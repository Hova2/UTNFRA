<?php
    require_once __DIR__ . '/../modelo/empleado.php';

    $arregloEmpleado = Empleado::leer();
    if(sizeof($arregloEmpleado)>0){
        Empleado::borrar();
        foreach ($arregloEmpleado as $value) {
            if($value->getEmail()==strtolower($_PUT[0])){
                $value->setTipo(strtolower($_PUT[1]));
            }
            $value->setEmail(trim($value->getEmail()));
            $value->setAlias(trim($value->getAlias()));
            $value->setTipo(trim($value->getTipo()));
            $value->setEdad(trim($value->getEdad()));
            Empleado::guardar($value);
        }
    }
?>