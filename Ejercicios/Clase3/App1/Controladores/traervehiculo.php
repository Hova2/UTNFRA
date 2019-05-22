<?php
    include_once __DIR__ . '/../Class/vehiculo.php';
    
    $arregloVehiculo=Vehiculo::leer();

    foreach ($arregloVehiculo as $value) {
        $value->mostrar();
    }
?>