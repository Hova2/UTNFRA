<?php
    //include "crearvehiculo.php";
    //include "traervehiculo.php";

    $metodo=$_SERVER['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':
            switch ($_GET[0]) {
                case 'auto':
                    echo "Traigo un auto";
                    break;
                
                case 'estacionamiento':
                    echo "Traigo un estacionamiento";
                    break;
            }    



            break;
        
        case 'POST':
            echo "Estoy en un POST";
            break;
        case 'DELETE':
            echo "Estoy en un DELETE";
            break;
        case 'PUT':
            echo "Estoy en un PUT";
            break;
    }
?>