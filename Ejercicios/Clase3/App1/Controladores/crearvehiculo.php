<?php
    include_once __DIR__ . '/../Class/vehiculo.php';
    
    $vehAux=new Vehiculo("QWE836","AYER",3000);

    Vehiculo::guardar($vehAux);
?>