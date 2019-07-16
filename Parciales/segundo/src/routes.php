<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;
use App\Herramientas\AutentificadorJWT;

return function (App $app) {
    $container = $app->getContainer();

    $app->group('/JWT', function (){   
        $this->get('/crearToken/', function (Request $request, Response $response) {
            $datos = array('usuario' => 'eeee@ma.il','perfil' => 'Administrador', 'alias' => "Pepe");
            $token= AutentificadorJWT::CrearToken($datos); 
            $respuesta = $response->withJson($token, 200); 
            return $respuesta;
          });
    });
};

?>
