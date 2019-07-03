<?php
    require_once __DIR__ . '/../modelo/empleado.php';

    $arregloEmpleado=Empleado::leer();
    if(sizeof($arregloEmpleado)>0){
        Empleado::borrar();
        foreach ($arregloEmpleado as $value) {
            if($value->getEmail()==strtolower($_DELETE[0]) && $value->getTipo()==strtolower($_DELETE[1])){
                $arrayMail = explode('@', $_DELETE[0]);
                $origen = __DIR__ . '/../../bds/ImagenesDeEmpleado/' . $arrayMail[0] . ".png";
                $destino = __DIR__ . '/../../bds/BackUpFotos/' . $arrayMail[0] . "-" . date("Ymd") . ".png";
                rename($origen, $destino);
            }else{
                $value->setEmail(trim($value->getEmail()));
                $value->setAlias(trim($value->getAlias()));
                $value->setTipo(trim($value->getTipo()));
                $value->setEdad(trim($value->getEdad()));
                Empleado::guardar($value);
            }
        }
    }
?>