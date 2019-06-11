<?php
    require __DIR__ . './clases/controlador/controlador.php';

    $metodo=$_SERVER['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':                
            if(count($_GET)==0){
                require __DIR__ . '/html/main.html';
            }else{
                switch ($_GET[0]) {
                    default:
                        echo 'Default';
                    break;
                }
            }
            break;
        
        case 'POST':
            if(count($_POST)==0){
            echo "Ingrese parametros";
            }else{
                switch ($_POST[0]) {
                case 'crearHelado':
                $tipoHelado=strtolower($_POST[2]);
                    if($tipoHelado == 'crema' || $tipoHelado == 'agua'){
                        controlador::crearHelado($_POST[1], $tipoHelado, $_POST[3], $_POST[4]);
                    }else{
                        echo "<h1>El tipo de helado solo puede ser de crema o agua</h1>";
                    }
                break;
                case 'crearHeladoFoto':
                $tipoHelado=strtolower($_POST[2]);
                    if($tipoHelado == 'crema' || $tipoHelado == 'agua'){
                        controlador::crearHelado($_POST[1], $tipoHelado, $_POST[3], $_POST[4]);
                        require  __DIR__ . './clases/vista/cargaHeladoFoto.php';
                    }else{
                        echo "<h1>El tipo de helado solo puede ser de crema o agua</h1>";
                    }
                    break;
                }*/
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