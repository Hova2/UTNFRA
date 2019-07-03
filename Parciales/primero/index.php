<?php
    $metodo=$_SERVER['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':                
            if(count($_GET)==0){
                echo "Ingrese parametros";
            }else{
                switch ($_GET[0]) {
                    case 'PizzaCarga':
                        $tipoPizza=strtolower($_GET[3]);
                        if($tipoPizza == 'molde' || $tipoPizza == 'piedra'){
                            require_once __DIR__ . '/./clases/controlador/PizzaCarga.php';                   
                        }else{
                            echo "<h1>El tipo de pizza solo puede ser molde o piedra</h1>";
                        }
                    break;
                    case 'ListadoDeImagenes':
                        require_once __DIR__ . '/./clases/controlador/ListadoDeImagenes.php';                   
                    break;
                    case 'ListadoEmpleado':
                        require_once __DIR__ . '/./clases/controlador/ListadoEmpleado.php';                   
                    break;
                    case 'Prueba':
                        require_once __DIR__ . '/./clases/controlador/Prueba.php';                   
                    break;
                }
            }
            break;
        
        case 'POST':
            if(count($_POST)==0){
                echo "Ingrese parametros";
            }else{
                switch ($_POST['accion']) {
                    case 'PizzaConsultar':
                        require_once __DIR__ . './clases/controlador/PizzaConsultar.php';
                    break;
                    case 'AltaVenta':
                        require_once __DIR__ . './clases/controlador/AltaVenta.php';
                    break;
                    case 'PizzaCarga':
                        require_once __DIR__ . '/./clases/controlador/PizzaCarga.php';                   
                    break;
                    case 'AltaEmpleado':
                        require_once __DIR__ . '/./clases/controlador/AltaEmpleado.php';                   
                    break;
                }
            }
            break;
        case 'DELETE':
            parse_str(file_get_contents("php://input"),$_DELETE);
            if(count($_DELETE)==0){
                echo "Ingrese parametros";
            }else{
                switch ($_DELETE['accion']) {
                    case 'BorrarPizza':
                        require_once __DIR__ . '/./clases/controlador/BorrarPizza.php';                   
                    break;
                    case 'EmpleadoBorrar':
                        require_once __DIR__ . '/./clases/controlador/EmpleadoBorrar.php';
                    break;
                }
            }
            break;
        case 'PUT':
            parse_str(file_get_contents("php://input"),$_PUT);
            if(count($_PUT)==0){
                echo "Ingrese parametros";
            }else{
                switch ($_PUT['accion']) {
                    case 'PizzaCargaPlus':
                        require_once __DIR__ . '/./clases/controlador/PizzaCargaPlus.php';                   
                    break;
                    case 'EmpleadoDatos':
                        require_once __DIR__ . '/./clases/controlador/EmpleadoDatos.php';                   
                    break;
                }
            }
            break;
    }
?>