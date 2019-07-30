<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;
use Src\App\Clases\Helper\AutentificadorJWT;
use Src\App\Clases\Helper\Altaimagen;
use Src\App\Clases\Helper\Bajaimagen;
use Src\App\Clases\Helper\Listarimagenes;
use Src\App\Clases\Model\Usuario;
use Src\App\Clases\Model\Compra;
use Src\App\Clases\Model\Comprausuario;
use Src\App\Clases\Model\Log;


return function (App $app) {
    $container = $app->getContainer();

    $container['dirCompraImg']=__DIR__ . '\\public_html\\images\\IMGCompras';
    $container['marcaDeAgua'] = __DIR__ . '\\public_html\\images\\marcadeagua.png';
   
    
    // MW para loguear en la BD
    
    $logueador=function (Request $request, Response $response, $next) {
        $metodo     = $request->getMethod();
        $token      = $request->getParam('token');
        $ruta       = $request->getUri()->getPath();
        $hora       = new DateTime('America/Argentina/Buenos_Aires');
        $datosToken = AutentificadorJWT::obtenerData($token);
        $usuario    = $datosToken->usuario;
        $log        = new Log;

        $log->usuario = $usuario;
        $log->metodo  = $metodo;
        $log->ruta    = $ruta;
        $log->hora    = $hora;

        $log->save();

        $response = $next($request, $response);

        return $response;

    };

    // MW para autorizacion admin

    $autorizarAdmin=function (Request $request, Response $response, $next) {
        $token = $request->getParam('token');
            
                      AutentificadorJWT::verificarToken($token);
        $datosToken = AutentificadorJWT::obtenerData($token);

        if($datosToken->perfil === 'admin'){
            $response = $next($request, $response);
        }else{
            $response->write('<h1>El usuario es no admin</h1>'); 
        }
        return $response;
    };

    // MW para autorizacion
    $autorizar=function (Request $request, Response $response, $next) {
        $token = $request->getParam('token');
        AutentificadorJWT:: verificarToken($token);

        return $next($request, $response);
    };

    $app->group('/Usuarios', function () use ($logueador, $autorizarAdmin, $autorizar){   
        $this->post('/alta[/]', function (Request $request, Response $response, array $args) {
            $nombre = strtolower(trim($request->getParam('nombre')));
            $clave  = strtolower(trim($request->getParam('clave')));
            $sexo   = strtolower(trim($request->getParam('sexo')));
            $perfil = 'usuario';

            $usuario = new Usuario;

            $usuario->nombre = $nombre;
            $usuario->clave  = $clave;
            $usuario->sexo   = $sexo;
            $usuario->perfil = $perfil;
    
            $usuario->save();

            return $response->write('<h1>Se dio de alta el usuario</h1>');
        })->add($logueador)->add($autorizarAdmin);
        
        $this->get('/lista[/]', function (Request $request, Response $response, array $args) {
            return $response->write(Usuario::all()->toJson());
        })->add($logueador)->add($autorizarAdmin);

        $this->put('/modificar[/]', function (Request $request, Response $response, array $args) {
            $token      = $request->getParam('token');
            $sexo       = $request->getParam('sexo');
            $clave      = $request->getParam('clave');
            $datosToken = AutentificadorJWT::obtenerData($token);

            $usuario        = Usuario::where('nombre',$datosToken->usuario)->first();
            $usuario->sexo  = $sexo;
            $usuario->clave = $clave;
            $usuario->save();

            return $response->write('<h1>Se modificaron la clave y el sexo correctamente</h1>');
        })->add($logueador)->add($autorizar);

        $this->delete('/baja[/]', function (Request $request, Response $response, array $args) {
            $token      = $request->getParam('token');
            
            $datosToken = AutentificadorJWT::obtenerData($token);
            $usuario = Usuario::where('nombre',$datosToken->usuario)->first();
            $compasusuario = Comprausuario::where('idusuario',$usuario->id)-get();

            foreach ($compasusuario as $comprausuario) {
                $compra=Compra::where('id',$comprausuario->idcompra)->first();
                Comprausuario::where('idcompra',$idcompra)->delete();
                $compra->delete();
                Bajaimagen::baja($this->get('dirCompraImg'),$idcompra);
            }

            $usuario->delete();
            
            return $response->write('<h1>Se borro el usuario</h1>'); 
            
        })->add($logueador)->add($autorizar);
    });
   
    $app->group('/JWT', function (){   
        $this->get('/login[/]', function (Request $request, Response $response, array $args) {
            $nombre         = strtolower(trim($request->getParam('nombre')));
            $clave          = strtolower(trim($request->getParam('clave')));
            $sexo           = strtolower(trim($request->getParam('sexo')));
            $coincideNombre = false;
            $coincideClave  = false;
            $coincideSexo   = false;


            $usuarios = Usuario::where('nombre',$nombre)->get();

            $userValido = null;
            foreach ($usuarios as $usuario) {
               $coincideNombre = true;
                if($usuario->clave === $clave){
                    $coincideClave = true;
                    if($usuario->sexo === $sexo){
                        $coincideSexo = true;
                        $userValido   = $usuario;
                        break;
                    }
               }
            }
            
            if($userValido){
                $datos     = array('usuario' => $userValido->nombre,'perfil' => $userValido->perfil);
                $token     = AutentificadorJWT::CrearToken($datos);
                $respuesta = $response->withJson($token, 200);
            }else{
                $aviso = '';
                if($coincideNombre){
                    if($coincideClave){
                        if(!$coincideSexo){
                            $aviso = '<h1>El sexo del usuario no coincide</h1>';
                        }
                    }else{
                        $aviso = '<h1>La clave del usuario no coincide</h1>';
                    }
                }else{
                    $aviso = '<h1>El nombre del usuario no existe</h1>';
                }
                
                $respuesta = $response->write($aviso);
            }

            return $respuesta;
          });
          
          
    });

    $app->group('/Compras', function () use ($logueador, $autorizarAdmin, $autorizar){   
        $this->post('/alta[/]', function (Request $request, Response $response, array $args) {
            $token    = $request->getParam('token');
            $articulo = strtolower(trim($request->getParam('articulo')));
            $fecha    = new DateTime('America/Argentina/Buenos_Aires');
            $precio   = $request->getParam('precio');
            $tipopago = strtolower(trim($request->getParam('tipopago')));

            $datosToken = AutentificadorJWT::obtenerData($token);

            $compra = new Compra;

            $compra->articulo   = $articulo;
            $compra->fecha      = $fecha;
            $compra->precio     = $precio;
            $compra->tipopago   = $tipopago;
            
            $compra->save();

            $usuario = Usuario::where('nombre',$datosToken->usuario)->first();

            $comprausuario = new Comprausuario;

            $comprausuario->idusuario = $usuario->id;
            $comprausuario->idcompra  = $compra->id;

            $comprausuario->save();

            return $response->write('<h1>Se dio de alta la compra</h1>');
        })->add($logueador)->add($autorizar);

        $this->post('/altaconimagen[/]', function (Request $request, Response $response, array $args) {
            $token           = $request->getParam('token');
            $articulo        = strtolower(trim($request->getParam('articulo')));
            $fecha           = new DateTime('America/Argentina/Buenos_Aires');
            $precio          = $request->getParam('precio');
            $tipopago        = strtolower(trim($request->getParam('tipopago')));
            $archivosSubidos = $request->getUploadedFiles();
            $archivoTmp      = $archivosSubidos['archivo'];


            $datosToken = AutentificadorJWT::obtenerData($token);

            $compra = new Compra;

            $compra->articulo = $articulo;
            $compra->fecha    = $fecha;
            $compra->precio   = $precio;
            $compra->tipopago = $tipopago;
            
            $compra->save();

            $usuario = Usuario::where('nombre',$datosToken->usuario)->first();

            $comprausuario = new Comprausuario;

            $comprausuario->idusuario = $usuario->id;
            $comprausuario->idcompra  = $compra->id;

            $comprausuario->save();

            $nombreArchivo = $compra->id . '-' . $compra->articulo;
            
            Altaimagen:: alta($this->get('dirCompraImg'),$nombreArchivo,$archivoTmp);

            return $response->write('<h1>Se dio de alta la compra</h1>');
        })->add($logueador)->add($autorizar);

        $this->post('/altaconimgmarcadeagua[/]', function (Request $request, Response $response, array $args) {
            $token           = $request->getParam('token');
            $articulo        = strtolower(trim($request->getParam('articulo')));
            $fecha           = new DateTime('America/Argentina/Buenos_Aires');
            $precio          = $request->getParam('precio');
            $tipopago        = strtolower(trim($request->getParam('tipopago')));
            $archivosSubidos = $request->getUploadedFiles();
            $archivoTmp      = $archivosSubidos['archivo'];

            $datosToken = AutentificadorJWT::obtenerData($token);

            $compra = new Compra;

            $compra->articulo = $articulo;
            $compra->fecha    = $fecha;
            $compra->precio   = $precio;
            $compra->tipopago = $tipopago;
            
            $compra->save();

            $usuario = Usuario::where('nombre',$datosToken->usuario)->first();

            $comprausuario = new Comprausuario;

            $comprausuario->idusuario = $usuario->id;
            $comprausuario->idcompra  = $compra->id;

            $comprausuario->save();

            $nombreArchivo = $compra->id . '-' . $compra->articulo;
            
            Altaimagen::altaMarcaDeAgua($this->get('dirCompraImg'),$this->get('marcaDeAgua'),$nombreArchivo,$archivoTmp);

            return $response->write('<h1>Se dio de alta la compra</h1>');
        })->add($logueador)->add($autorizar);
        
        $this->get('/lista[/]', function (Request $request, Response $response, array $args) {
            $token      = $request->getParam('token');
            $datosToken = AutentificadorJWT::obtenerData($token);
            $usuario    = Usuario::where('nombre',$datosToken->usuario)->first();

            if($usuario->nombre==='admin'){
                return $response->write(Compra::all()->toJson()); 
            }else{
                $sb             = '';
                $comprausuarios = Comprausuario::where('idusuario',$usuario->id)->get();
                foreach ($comprausuarios as $comprausuario) {
                    $sb .= Compra::where('id',$comprausuario->idcompra)->first()->toJson();
                }
                return $response->write($sb); 
            }
        })->add($logueador)->add($autorizar);
            
        $this->get('/listaconimagenes[/]', function (Request $request, Response $response, array $args) {
            $token      = $request->getParam('token');
            $datosToken = AutentificadorJWT::obtenerData($token);
            $usuario    = Usuario::where('nombre',$datosToken->usuario)->first();

            if($usuario->nombre==='admin'){
                return $response->write(Listarimagenes::listarAdmin($this->get('dirCompraImg'))); 
            }else{
                $idsCompras     = [];
                $comprausuarios = Comprausuario::where('idusuario',$usuario->id)->get();
                foreach ($comprausuarios as $comprausuario) {
                    array_push($idsCompras,$comprausuario->idcompra);
                }
                return $response->write(Listarimagenes::listarUsuario($this->get('dirCompraImg'),$datosToken->usuario,$idsCompras));
            }
        })->add($logueador)->add($autorizar);

        $this->get('/listaconfiltros[/]', function (Request $request, Response $response, array $args) {
            $filto = strtolower(trim($request->getParam('filtro')));
            $valor = strtolower(trim($request->getParam('valor')));
            
            $respuesta = '';

            switch($filto){
                case 'nombre':
                    $usuario=Usuario::where('nombre',$valor)->first();
                    $comprausuarios = Comprausuario::where('idusuario',$usuario->id)->get();
                    foreach ($comprausuarios as $comprausuario) {
                        $compra=Compra::where('id',$comprausuario->idcompra)->first()->toJson();
                        $respuesta.=$compra;
                        $respuesta .= '<br>';
                    }
                break;
                case 'articulo':
                    $compras = Compra::all();
                    foreach ($compras as $compra) {
                        if($compra->articulo==$valor){
                            $respuesta .= $compra;
                            $respuesta .= '<br>';
                        }
                    }
                break;
                case 'tipodepago':
                    $compras = Compra::all();
                    foreach ($compras as $compra) {
                        if($compra->tipopago==$valor){
                            $respuesta .= $compra;
                            $respuesta .= '<br>';
                        }
                    }
                break;
            }
            
            
            return $response->write($respuesta); 
            
        })->add($logueador)->add($autorizarAdmin);

        $this->delete('/baja[/]', function (Request $request, Response $response, array $args) {
            $idcompra = $request->getParam('id');
            
            $compra=Compra::where('id',$idcompra)->first();
            Comprausuario::where('idcompra',$idcompra)->delete();
            
            $compra->delete();
            Bajaimagen::baja($this->get('dirCompraImg'),$idcompra);
            
            return $response->write('<h1>Se borro la compra</h1>'); 
            
        })->add($logueador)->add($autorizarAdmin);

        $this->put('/modificar[/]', function (Request $request, Response $response, array $args) {
            $idcompra  = $request->getParam('idcompra');
            $articulo  =  strtolower(trim($request->getParam('articulo')));
            $precio = $request->getParam('precio');

            $compra = Compra::where('id',$idcompra)->first();
            
            $compra->articulo  = $articulo;
            $compra->precio = $precio;
            $compra->save();

            return $response->write('<h1>Se modifico la compra correctamente</h1>');
        })->add($logueador)->add($autorizar);

    });
    
    $app->group('/Logs', function (){   
        $this->get('/lista[/]', function (Request $request, Response $response, array $args) {
            $metodo = strtoupper(trim($request->getParam('metodo')));
            return $response->write(Log::where('metodo',$metodo)->get()->toJson());
        });

    })->add($logueador)->add($autorizarAdmin);
    
   

}


?>
