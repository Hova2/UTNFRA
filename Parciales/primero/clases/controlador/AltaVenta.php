<?php
    require_once __DIR__ . '/../modelo/pizza.php';
    require_once __DIR__ . '/../modelo/venta.php';

    $arregloPizza=Pizza::leer();
    if(sizeof($arregloPizza)>0){
        Pizza::borrar();
        foreach ($arregloPizza as $value) {
            if($value->getSabor()==$_POST['sabor'] && $value->getTipo()==$_POST['tipo']){
                if( (int)$value->getCantidad()>0 && ((int)$value->getCantidad() - (int)$_POST['cantidad']) >=0 ){
                    $value->setCantidad((int)$value->getCantidad() - (int)$_POST['cantidad']);
                    $ventaTmp=new Venta($_POST['email'], $_POST['sabor'], $_POST['tipo'], $_POST['cantidad']);
                    Venta::guardar($ventaTmp);
                    if (isset($_FILES["archivo"]["name"])) {
                        $destino = __DIR__ . '/../../bds/ImagenesDeLaVenta/' . $_FILES["archivo"]["name"];
                        $destino = pathinfo($destino, PATHINFO_DIRNAME) . "/" . $_POST['tipo'] . $_POST['sabor'] . substr($_POST['mail'], strpos($_POST['mail'], '@') - 1) . date("Ymd") . "." . pathinfo($destino, PATHINFO_EXTENSION);
                        move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
                    }
                }else{
                    echo "<h1> No hay cantidad suficiente para cumplir el pedido </h1>";
                }
            }
            $value->setSabor(trim($value->getSabor()));
            $value->setPrecio(trim($value->getPrecio()));
            $value->setTipo(trim($value->getTipo()));
            $value->setCantidad(trim($value->getCantidad()));
            Pizza::guardar($value);
        }
    }else{
        echo "<h1> No hay pizzas cargadas </h1>";
    }



?>