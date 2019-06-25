<?php
    require_once __DIR__ . '/../modelo/pizza.php';


    $arregloPizza=Pizza::leer();
    $existePizza=false;
    $existeSabor=false;
    $existeTipo=false;

    foreach ($arregloPizza as $value) {
        if($value->getSabor()==strtolower($_POST[2]) && $value->getTipo()==strtolower($_POST[3]){
            $existePizza=true;
            break;
        }else if ($value->getSabor()==strtolower($_POST[2])) {
            $existeSabor=true;
        }else if($value->getTipo()==strtolower($_POST[3])){
            $existeTipo=true;
        }
    }

    if ($existePizza){
        echo "<h1>Si hay</h1>";
    }else if($existeSabor){
        echo "<h1>Existe el sabor pero no el tipo</h1>";
    }else if($existeTipo){
        echo "<h1>Existe el tipo pero no el sabor</h1>";
    }else{
        echo "<h1>No hay</h1>";
    }
?>