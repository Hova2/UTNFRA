<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;
use Src\App\Clases\Helper\AutentificadorJWT;

return function (App $app) {
    $container = $app->getContainer();

    $app->group('/JWT', function (){   
        $this->get('/crearToken[/]', function (Request $request, Response $response) {
            $datos = array('usuario' => 'eeee@ma.il','perfil' => 'Administrador', 'alias' => "Pepe");
            $token= AutentificadorJWT::CrearToken($datos); 
            $respuesta = $response->withJson($token, 200); 
            return $respuesta;
          });
    });

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
};

?>
