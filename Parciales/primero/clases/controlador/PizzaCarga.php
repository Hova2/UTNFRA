<?php
     require_once __DIR__ . '/../modelo/pizza.php';
    
    $pizzaTmp=new Pizza($_GET[1], $_GET[2], $_GET[3], $_GET[4]);
    Pizza::guardar($pizzaTmp);
?>