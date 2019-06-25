<?php
    require_once __DIR__ . '/../modelo/pizza.php';
    
    $id=Pizza::getUltimoId();

    if (isset($_FILES["archivo"]["name"])) {
        $pizzaTmp=new Pizza($id, strtolower($_POST[0]), $_POST[1], strtolower($_POST[2]), $_POST[3]);
        altaImagen();
    }else{
        $pizzaTmp=new Pizza($id, strtolower($_GET[1]), $_GET[2], strtolower($_GET[3]), $_GET[4]);
    }
    Pizza::guardar($pizzaTmp);
    Pizza::setUltimoId($id+1);

    function altaImagen(){
        $destino = __DIR__ . '/../../bds/ImagenesDePizzas/' . $_FILES["archivo"]["name"];
        $destino = pathinfo($destino, PATHINFO_DIRNAME) . "/" . $_POST[2] . "-" . $_POST[0] . "." . pathinfo($destino, PATHINFO_EXTENSION);
        move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
    }
?>