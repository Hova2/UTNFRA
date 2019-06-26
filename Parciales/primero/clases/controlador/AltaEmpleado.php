<?php
    require_once __DIR__ . '/../modelo/empleado.php';

    $arregloEmpleado=Empleado::leer();
    $existeEmpleado=false;
    if(sizeof($arregloEmpleado)>0){
        foreach ($arregloEmpleado as $value) {
            if($value->getEmail()==strtolower($_POST[0])){
                $existeEmpleado=true;
                break;
            }
        }

        if(!$existeEmpleado){
            $empleadoTmp=new Empleado(strtolower($_POST[0]), strtolower($_POST[1]), strtolower($_POST[2]), $_POST[3]);
            Empleado::guardar($empleadoTmp);
            altaImagen();
        }else{
            echo "<h2>El empleado ya existe</h2>";
        }
    }else{
        $empleadoTmp=new Empleado(strtolower($_POST[0]), strtolower($_POST[1]), strtolower($_POST[2]), $_POST[3]);
        Empleado::guardar($empleadoTmp);
        altaImagen();
    }

    function altaImagen(){
        $destino = __DIR__ . '/../../bds/ImagenesDeEmpleado/' . $_FILES["archivo"]["name"];
        $arrayMail = explode('@', $_POST[0]);
        $destino = pathinfo($destino, PATHINFO_DIRNAME) . "/" . $arrayMail[0] . pathinfo($destino, PATHINFO_EXTENSION);
        move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
    }
?>