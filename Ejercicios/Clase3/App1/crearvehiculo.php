<?php
    include_once "vehiculo.php";
    
    $vehAux=new Vehiculo("QWE836","AYER",3000);

    Vehiculo::guardar($vehAux);
?>