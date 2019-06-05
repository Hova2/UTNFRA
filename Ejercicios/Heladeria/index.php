<?php
    require __DIR__ . '/autoloader.php';

    $loader = new \Heladeria\Psr4AutoloaderClass;
    $loader->register();
    $loader->addNamespace('Heladeria\clases\controlador', __DIR__ . '/clases/Controlador/');
    $loader->addNamespace('Heladeria\clases\modelo', __DIR__ . '/clases/modelo/');
    $loader->addNamespace('Heladeria\clases\vista', __DIR__ . '/clases/vista/');

    $metodo=$_SERVER['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':                
            if(count($_GET)==0){
                require __DIR__ . '/html/main.html';
            }else{
                switch ($_GET['param1']) {
                    default:
                        echo 'Default';
                    break;
                }
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