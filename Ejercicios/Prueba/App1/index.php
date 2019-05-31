<?php
    require __DIR__ . '/autoloader.php';

    $loader = new \App1\Psr4AutoloaderClass;
    $loader->register();
    $loader->addNamespace('App1\Controlador', __DIR__ . '/Controlador/');
    $loader->addNamespace('App1\Modelo', __DIR__ . '/Modelo/');

    $metodo=$_SERVER['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':
                            
            switch ($_GET['param1']) {
                case 'auto':
                    //echo "Traigo un auto";
                    $arregloVehiculo1=App1\Modelo\Vehiculo::leer();
                    $arregloVehiculo2=App1\Modelo\Vehiculo::leer();

                    foreach ($arregloVehiculo1 as $value) {
                        $value->mostrar();
                    }
                    foreach ($arregloVehiculo2 as $value) {
                        $value->mostrar();
                    }
                    break;
                
                case 'estacionamiento':
                    echo "Traigo un estacionamiento";
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