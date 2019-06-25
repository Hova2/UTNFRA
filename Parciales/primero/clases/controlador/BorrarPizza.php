<?php
    require_once __DIR__ . '/../modelo/pizza.php';

    $arregloPizza=Pizza::leer();
    if(sizeof($arregloPizza)>0){
        Pizza::borrar();
        foreach ($arregloPizza as $value) {
            if($value->getSabor()==strtolower($_DELETE[0]) && $value->getTipo()==strtolower($_DELETE[1])){
                $origen = __DIR__ . '/../../bds/ImagenesDePizzas/' . $value->getTipo() . "-" . $value->getSabor() . ".png";
                $destino = __DIR__ . '/../../bds/BackUpFotos/' . $value->getTipo() . "-" . $value->getSabor() . "-" . date("Ymd") . ".png";
                rename($origen, $destino);
            }else{
                $value->setId(trim($value->getId()));
                $value->setSabor(trim($value->getSabor()));
                $value->setPrecio(trim($value->getPrecio()));
                $value->setTipo(trim($value->getTipo()));
                $value->setCantidad(trim($value->getCantidad()));
                Pizza::guardar($value);
            }
        }
    }


?>