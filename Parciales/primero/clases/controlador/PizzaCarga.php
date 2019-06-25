<?php
    require_once __DIR__ . '/../modelo/pizza.php';
    
    $id=Pizza::getUltimoId();
    $pizzaTmp=new Pizza($id, strtolower($_GET[1]), $_GET[2], strtolower($_GET[3]), $_GET[4]);
    Pizza::guardar($pizzaTmp);
    Pizza::setUltimoId($id+1);
?>