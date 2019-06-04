<?php
    require __DIR__ . '/html/main.html';
    require __DIR__ . '/autoloader.php';

    $loader = new \EstacionamientoMio\Psr4AutoloaderClass;
    $loader->register();
    $loader->addNamespace('EstacionamientoMio\clases\controlador', __DIR__ . '/clases/Controlador/');
    $loader->addNamespace('EstacionamientoMio\clases\modelo', __DIR__ . '/clases/modelo/');
    $loader->addNamespace('EstacionamientoMio\clases\vista', __DIR__ . '/clases/vista/');

    $metodo=$_SERVER['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':                
            switch ($_GET['param1']) {
                default:
                
                break;
            }
            break;
        
        case 'POST':
            echo "Estoy en un POST";
            break;
        case 'DELETE':
            echo "Estoy en un DELETE";
            break;
        case 'PUT':
            echo "Estoy en un PUT";
            break;
    }
?>