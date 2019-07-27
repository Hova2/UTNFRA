<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;
use Src\App\Clases\Helper\AutentificadorJWT;
use Src\App\Clases\Model\Usuario;

return function (App $app) {
    $container = $app->getContainer();

    $app->group('/Usuarios', function (){   
        $this->post('/alta[/]', function (Request $request, Response $response, array $args) {
            $nombre = strtolower(trim($request->getParam('nombre')));
            $clave = strtolower(trim($request->getParam('clave')));
            $sexo = strtolower(trim($request->getParam('sexo')));
            
            $perfil = 'usuario';

            $sb = 'Nombre: ';
            $sb .= $nombre;
            $sb .= ' - ';
            $sb .= 'Clave: ';
            $sb .= $clave;
            $sb .= ' - ';
            $sb .= 'Sexo: ';
            $sb .= $sexo;
            $sb .= ' - ';
            $sb .= 'Perfil: ';
            $sb .= $perfil;

            $usuario = new Usuario;

            $usuario->nombre = $nombre;
            $usuario->clave = $clave;
            $usuario->sexo = $sexo;
            $usuario->perfil = $perfil;
    
            $usuario->save();

            return $response->write($sb);
          });

          $this->get('/todos[/]', function (Request $request, Response $response, array $args) {
              return $response->write(Usuario::all()->toJson());
          });
    });
   
    $app->group('/JWT', function (){   
        $this->post('/login[/]', function (Request $request, Response $response, array $args) {
            $nombre = strtolower(trim($request->getParam('nombre')));
            $clave = strtolower(trim($request->getParam('clave')));
            
            if($nombre === 'juan' && $clave === '123456'){
                $datos = array('usuario' => $nombre,'perfil' => 'admin', 'alias' => "Pepe");
                $token= AutentificadorJWT::CrearToken($datos); 
                $respuesta = $response->withJson($token, 200); 
            }else{
                $respuesta = $response->write('Usuario invalido'); 
            }

            return $respuesta;
          });

          $this->post('/prueba[/]', function (Request $request, Response $response, array $args) {
            $token = $request->getParam('token');
            
            AutentificadorJWT::verificarToken($token);
            $datosToken = AutentificadorJWT::obtenerData($token);
            
            if($datosToken->usuario === 'admin'){
                $response->write('El usuario es admin'); 
            }else{
                $response->write('El usuario es no admin'); 
            }
            
            return $response;
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
    });

    // Para encadenar middlewares
    
    $app->get('/', function ($req, $res) {
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
};

?>
