<?php
    require_once __DIR__ . '/../modelo/pizza.php';
    require_once __DIR__ . '/../modelo/ventaemp.php';
    require_once __DIR__ . '/../modelo/empleado.php';

    $arregloPizza=Pizza::leer();
    $arregloEmpleado=Empleado::leer();
    $existePizza=false;
    $existeEmpleado=false;
    $existeCantidad=false;
    if((sizeof($arregloPizza)>0) && (sizeof($arregloEmpleado)>0)){
        Pizza::borrar();
        foreach ($arregloPizza as $value) {
            if($value->getSabor()==strtolower($_POST[1]) && $value->getTipo()==strtolower($_POST[2])){
                $existePizza=true;
                foreach ($arregloEmpleado as $value2) {
                    if($value2->getEmail()==strtolower($_POST[4])){
                        $existeEmpleado=true;
                        if( (int)$value->getCantidad()>0 && ((int)$value->getCantidad() - (int)$_POST[3]) >=0 ){
                            $existeCantidad=true;
                            $value->setCantidad((int)$value->getCantidad() - (int)$_POST[3]);
                            $ventaEmpTmp=new VentaEmp(strtolower($_POST[0]), strtolower($_POST[1]), strtolower($_POST[2]), $_POST[3], strtolower($_POST[4]));
                            VentaEmp::guardar($ventaEmpTmp);
                            if (isset($_FILES["archivo"]["name"])) {
                                altaImagen();
                            }
                        }
                    }
                }
                


            }
            $value->setId(trim($value->getId()));
            $value->setSabor(trim($value->getSabor()));
            $value->setPrecio(trim($value->getPrecio()));
            $value->setTipo(trim($value->getTipo()));
            $value->setCantidad(trim($value->getCantidad()));
            Pizza::guardar($value);
        }
        if($existePizza && $existeEmpleado && $existeCantidad){
            echo "<h1>Se dio de alta el pedido</h1>";    
        }elseif(!$existePizza){
            echo "<h1>No existe la pizza</h1>";    
        }
        elseif($existePizza && !$existeEmpleado){
            echo "<h1>No existe el empleado</h1>";    
        }else{
            echo "<h1>No hay cantidad suficiente</h1>";    
        }
    }else{
        echo "<h1> No hay pizzas o empleados cargados</h1>";
    }

    function altaImagen(){
        $destino = __DIR__ . '/../../bds/ImagenesDeLaVentaEmpleado/' . $_FILES["archivo"]["name"];
        $arrayMail = explode('@', $_POST[4]);
        $destino = pathinfo($destino, PATHINFO_DIRNAME) . "/" . $arrayMail[0] . "." . pathinfo($destino, PATHINFO_EXTENSION);
        move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
    }

?>