<?php
    require_once __DIR__ . '/../modelo/pizza.php';
    require_once __DIR__ . '/../modelo/venta.php';

    $arregloPizza=Pizza::leer();
    if(sizeof($arregloPizza)>0){
        Pizza::borrar();
        foreach ($arregloPizza as $value) {
            if($value->getSabor()==strtolower($_POST[1]) && $value->getTipo()==strtolower($_POST[2])){
                if( (int)$value->getCantidad()>0 && ((int)$value->getCantidad() - (int)$_POST[3]) >=0 ){
                    $value->setCantidad((int)$value->getCantidad() - (int)$_POST[3]);
                    $ventaTmp=new Venta(strtolower($_POST[0]), strtolower($_POST[1]), strtolower($_POST[2]), $_POST[3]);
                    Venta::guardar($ventaTmp);
                    if (isset($_FILES["archivo"]["name"])) {
                        altaImagen();
                    }
                }else{
                    echo "<h1> No hay cantidad suficiente para cumplir el pedido </h1>";
                }
            }
            $value->setId(trim($value->getId()));
            $value->setSabor(trim($value->getSabor()));
            $value->setPrecio(trim($value->getPrecio()));
            $value->setTipo(trim($value->getTipo()));
            $value->setCantidad(trim($value->getCantidad()));
            Pizza::guardar($value);
        }
    }else{
        echo "<h1> No hay pizzas cargadas </h1>";
    }

    function altaImagen(){
        $destino = __DIR__ . '/../../bds/ImagenesDeLaVenta/' . $_FILES["archivo"]["name"];
        $arrayMail = explode('@', $_POST[0]);
        $destino = pathinfo($destino, PATHINFO_DIRNAME) . "/" . $_POST[2] . "-" . $_POST[1] . "-" . $arrayMail[0] . "-" . date("Ymd") . "." . pathinfo($destino, PATHINFO_EXTENSION);
        move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
    }

?>