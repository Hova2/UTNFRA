<?php
    if(isset($_GET[1])){
        if (strcmp(strtolower($_GET[1]), 'borradas')==0){
            $directorio = __DIR__ . '/../../bds/BackUpFotos/';
            $borradas  = scandir($directorio);

            if(sizeof($borradas)>0){
                echo "<table border=1>";
                echo "<caption><h2>Fotos Borradas</h2></caption>";
                echo "<tr>";
                echo "<th>Foto</th>";
                echo "<th>Nombre</th>";
                echo "</tr>";
                for($i=2 ; $i < sizeof($borradas) ; $i++){
                    echo "<tr>";
                    echo "<td>";
                    echo "<img src=" . dirname($_SERVER['PHP_SELF']) . "/bds/BackUpFotos/" . $borradas[$i] . ">";
                    echo "</td>";
                    echo "<td>";
                    echo $borradas[$i];
                    echo "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            }
        }else{
            $fotos1=scandir(__DIR__ . '/../../bds/ImagenesDeLaVenta/');
            if(sizeof($fotos1)>0){
                echo "<table border=1>";
                echo "<caption><h2>Fotos de las Ventas</h2></caption>";
                echo "<tr>";
                echo "<th>Foto</th>";
                echo "<th>Nombre</th>";
                echo "</tr>";
                for($i=2 ; $i < sizeof($fotos1) ; $i++){
                    echo "<tr>";
                    echo "<td>";
                    echo "<img src=" . dirname($_SERVER['PHP_SELF']) . "/bds/ImagenesDeLaVenta/" . $fotos1[$i] . ">";
                    echo "</td>";
                    echo "<td>";
                    echo $fotos1[$i];
                    echo "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            }
            $fotos2  = scandir(__DIR__ . '/../../bds/ImagenesDePizzas/'); 
            if(sizeof($fotos2)>0){
                echo "<table border=1>";
                echo "<caption><h2>Fotos de las Pizzas</h2></caption>";
                echo "<tr>";
                echo "<th>Foto</th>";
                echo "<th>Nombre</th>";
                echo "</tr>";
                for($i=2 ; $i < sizeof($fotos2) ; $i++){
                    echo "<tr>";
                    echo "<td>";
                    echo "<img src=" . dirname($_SERVER['PHP_SELF']) . "/bds/ImagenesDePizzas/" . $fotos2[$i] . ">";
                    echo "</td>";
                    echo "<td>";
                    echo $fotos2[$i];
                    echo "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            }
        }
    }else{
        echo "<h2>Ingrese parametros</h2>";
    }
?>