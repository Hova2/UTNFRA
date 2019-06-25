<?php
    if(isset($_GET[1])){
        if (strcmp($_GET[1], 'borradas')==0){
            $directorio = __DIR__ . '/../../bds/BackUpFotos/';
            $borradas  = scandir($directorio);    

            if(sizeof($borradas)>0){
                echo "<table>";
                echo "<tr>";
                echo "<th>Foto</th>";
                echo "<th>Nombre</th>";
                echo "</tr>";
                for($i=2 ; $i < sizeof($borradas) ; $i++){
                    echo "<tr>";
                    echo "<td>";
                    echo "<img src=" . 'C:\TEST\UTNFRA\Parciales\primero\clases\bds\BackUpFotos\' . $borradas[$i] . ">";
                    echo "</td>";
                    echo "<td>";
                    echo $borradas[$i];
                    echo "</td>";
                    echo "</tr>";
                }
                echo "</table>";
        }else{
            $fotos1  = scandir(__DIR__ . '/../../bds/ImagenesDeLaVenta/');    
            $fotos2  = scandir(__DIR__ . '/../../bds/ImagenesDePizzas/');    
            var_dump($fotos1);
            var_dump($fotos2);
        }
    }else{
        echo "<h2>Ingrese parametros</h2>";
    }
}
?>