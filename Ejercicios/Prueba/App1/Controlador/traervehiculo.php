<?php
    //include_once __DIR__ . '/../Class/vehiculo.php';
    
    $arregloVehiculo=vehiculo::leer();

    foreach ($arregloVehiculo as $value) {
        $value->mostrar();
    }
?>