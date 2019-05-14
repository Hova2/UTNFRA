<?php
    include_once "vehiculo.php";
    
    $arregloVehiculo=Vehiculo::leer();

    foreach ($arregloVehiculo as $value) {
        $value->mostrar();
    }
?>