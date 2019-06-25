<?php
    require_once __DIR__ . '/../modelo/pizza.php';

    $arregloPizza=Pizza::leer();
    $seActualizo=false;
    if(sizeof($arregloPizza)>0){
        Pizza::borrar();
        foreach ($arregloPizza as $value) {
            if($value->getSabor()==strtolower($_PUT[0]) && $value->getTipo()==strtolower($_PUT[2])){
                $value->setCantidad((int)$value->getCantidad()+(int)$_PUT[3]);
                $value->setPrecio($_PUT[1]);
                $seActualizo=true;
            }
            $value->setId(trim($value->getId()));
            $value->setSabor(trim($value->getSabor()));
            $value->setPrecio(trim($value->getPrecio()));
            $value->setTipo(trim($value->getTipo()));
            $value->setCantidad(trim($value->getCantidad()));
            Pizza::guardar($value);
        }
    }else{
        cargar(strtolower($_PUT[0]), $_PUT[1], strtolower($_PUT[2]), $_PUT[3]);
    }

    if(!$seActualizo){
        cargar(strtolower($_PUT[0]), $_PUT[1], strtolower($_PUT[2]), $_PUT[3]);
    }

    function cargar($sabor,$precio,$tipo,$cantidad){
        $id=Pizza::getUltimoId();
        $pizzaTmp=new Pizza($id, $sabor,$precio,$tipo,$cantidad);
        Pizza::guardar($pizzaTmp);
        Pizza::setUltimoId($id+1);
    }

?>