<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;
use Src\App\Clases\Helper\AutentificadorJWT;
use Src\App\Clases\Model\Usuario;
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

    // MW para autorizacion

    $autorizar=function (Request $request, Response $response, $next) {
        $token = $request->getParam('token');
            
        AutentificadorJWT::verificarToken($token);
        $datosToken = AutentificadorJWT::obtenerData($token);

        if($datosToken->perfil === 'admin'){
            $response = $next($request, $response);
        }else{
            $response->write('<h1>El usuario es no admin</h1>'); 
        }
        return $response;;
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
    })->add($logueador)->add($autorizar);
   
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

    
    
    
    /*// Para cear un Token
        
    $app->group('/JWT', function (){   
        $this->get('/crearToken[/]', function (Request $request, Response $response) {
            $datos = array('usuario' => 'eeee@ma.il','perfil' => 'Administrador', 'alias' => "Pepe");
            $token= AutentificadorJWT::CrearToken($datos); 
            $respuesta = $response->withJson($token, 200); 
            return $respuesta;
          });
    });*/

    // Para encadenar middlewares
    
    /*$app->get('/', function ($req, $res) {
        return $res->write('Center');
    })->add(function ($req, $res, $next) {
        $res->write('In1');
        $res = $next($req, $res);
        $res->write('Out1');
        return $res;
    })->add(function ($req, $res, $next) {
        $res->write('In2');
        $res = $next($req, $res);
        $res->write('Out2');
        return $res;
    });*/

    // Prueba middlewares

    $app->post('/', function ($req, $res) {
        return $res->write('Center');
    })->add(function ($req, $res, $next) {
        $res->write('In1');
        $res = $next($req, $res);
        $res->write('Out1');
        return $res;
    })->add(function ($req, $res, $next) {
        $token = $req->getParam('token');
            
        AutentificadorJWT::verificarToken($token);
        $datosToken = AutentificadorJWT::obtenerData($token);

        if($datosToken->perfil === 'admin'){
            $res = $next($req, $res);
        }else{
            $res->write('El usuario es no admin'); 
        }
        return $res;
    });

}


?>
