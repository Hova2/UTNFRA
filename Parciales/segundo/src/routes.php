<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;
use Src\App\Clases\Helper\AutentificadorJWT;
use Src\App\Clases\Model\Usuario;
use Src\App\Clases\Model\Compra;
use Src\App\Clases\Model\Comprausuario;
use Src\App\Clases\Model\Log;


return function (App $app) {
    $container = $app->getContainer();

    // MW para loguear en la BD
    
    $logueador=function (Request $request, Response $response, $next) {
        $token=$request->getParam('token');
        $ruta=$request->getUri()->getPath();
        $metodo=$request->getMethod();
        $hora=new DateTime('America/Argentina/Buenos_Aires');
        $datosToken = AutentificadorJWT::obtenerData($token);
        $usuario=$datosToken->usuario;
        $log=new Log;

        $log->usuario=$usuario;
        $log->metodo=$metodo;
        $log->ruta=$ruta;
        $log->hora=$hora;

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
            
        AutentificadorJWT::verificarToken($token);
        $datosToken = AutentificadorJWT::obtenerData($token);

        return $next($request, $response);
    };



    $app->group('/Usuarios', function (){   
        $this->post('/alta[/]', function (Request $request, Response $response, array $args) {
            $nombre = strtolower(trim($request->getParam('nombre')));
            $clave = strtolower(trim($request->getParam('clave')));
            $sexo = strtolower(trim($request->getParam('sexo')));
            $perfil = 'usuario';

            $usuario = new Usuario;

            $usuario->nombre = $nombre;
            $usuario->clave = $clave;
            $usuario->sexo = $sexo;
            $usuario->perfil = $perfil;
    
            $usuario->save();

            return $response->write('<h1>Se dio de alta el usuario</h1>');
        });
        
        $this->get('/lista[/]', function (Request $request, Response $response, array $args) {
            return $response->write(Usuario::all()->toJson());
        });
    })->add($logueador)->add($autorizarAdmin);
   
    $app->group('/JWT', function (){   
        $this->post('/login[/]', function (Request $request, Response $response, array $args) {
            $nombre = strtolower(trim($request->getParam('nombre')));
            $clave = strtolower(trim($request->getParam('clave')));
            $sexo = strtolower(trim($request->getParam('sexo')));
            $coincideNombre=false;
            $coincideClave=false;
            $coincideSexo=false;


            $usuarios = Usuario::where('nombre',$nombre)->get();

            $userValido=null;
            foreach ($usuarios as $usuario) {
               $coincideNombre=true;
                if($usuario->clave === $clave){
                    $coincideClave=true;
                    if($usuario->sexo === $sexo){
                        $coincideSexo=true;
                        $userValido=$usuario;
                        break;
                    }
               }
            }
            
            if($userValido){
                $datos = array('usuario' => $userValido->nombre,'perfil' => $userValido->perfil,'sexo' => $userValido->sexo);
                $token= AutentificadorJWT::CrearToken($datos); 
                $respuesta = $response->withJson($token, 200); 
            }else{
                $aviso='';
                if($coincideNombre){
                    if($coincideClave){
                        if(!$coincideSexo){
                            $aviso='<h1>El sexo del usuario no coincide</h1>';                    
                        }
                    }else{
                        $aviso='<h1>La clave del usuario no coincide</h1>';                    
                    }
                }else{
                    $aviso='<h1>El nombre del usuario no existe</h1>';
                }
                
                $respuesta = $response->write($aviso); 
            }

            return $respuesta;
          });
    });

    $app->group('/Compras', function (){   
        $this->post('/alta[/]', function (Request $request, Response $response, array $args) {
            $token = $request->getParam('token');
            $articulo = strtolower(trim($request->getParam('articulo')));
            $fecha = new DateTime('America/Argentina/Buenos_Aires');
            $precio = $request->getParam('precio');

            $datosToken = AutentificadorJWT::obtenerData($token);

            $compra = new Compra;

            $compra->articulo = $articulo;
            $compra->fecha = $fecha;
            $compra->precio = $precio;
            
            $compra->save();

            $usuario = Usuario::where('nombre',$datosToken->usuario)->first(); 

            $comprausuario=new Comprausuario;

            $comprausuario->idusuario=$usuario->id;
            $comprausuario->idcompra=$compra->id;

            $comprausuario->save();

            return $response->write('<h1>Se dio de alta la compra</h1>');
        });
        
        $this->get('/lista[/]', function (Request $request, Response $response, array $args) {
            $token=$request->getParam('token');
            $datosToken=AutentificadorJWT::obtenerData($token);
            $usuario=Usuario::where('nombre',$datosToken->usuario)->first();

            if($usuario->nombre==='admin'){
                return $response->write(Compra::all()->toJson()); 
            }else{
                $sb='';
                $comprausuarios=Comprausuario::where('idusuario',$usuario->id)->get();
                foreach ($comprausuarios as $comprausuario) {
                    $sb.=Compra::where('id',$comprausuario->idcompra)->first()->toJson();
                }
                return $response->write($sb); 
            }
        });
    })->add($logueador)->add($autorizar);
    
    
    
   

}


?>
