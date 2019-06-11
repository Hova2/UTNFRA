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
                        require_once __DIR__ . './clases/controlador/PizzaCarga.php';                   
                    }else{
                        echo "<h1>El tipo de pizza solo puede ser molde o piedra</h1>";
                    }
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
                }
            }
            break;
        case 'DELETE':
            echo "Estoy en un DELETE";
            break;
        case 'PUT':
            echo "Estoy en un PUT";
            break;
    }
?>