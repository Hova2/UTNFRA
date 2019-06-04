<?php
    //include_once __DIR__ . '/../Class/vehiculo.php';
    
    $arregloVehiculo=App1\Modelo\Vehiculo::leer();

    foreach ($arregloVehiculo as $value) {
        $value->mostrar();
    }
?>