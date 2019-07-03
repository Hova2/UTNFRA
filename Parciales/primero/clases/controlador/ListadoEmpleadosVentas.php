<?php
    require_once __DIR__ . '/../modelo/ventaemp.php';

    $arrayVentaEmp = VentaEmp::leer();
    if(sizeof($arrayVentaEmp)>0){
        $arrayMailGet = explode('@', strtolower($_GET[1]));
        echo "<table border=1 align=center valign=center>";
        echo "<caption><h2>Listado venta por empleado con imagenes</h2></caption>";
        echo "<tr>";
        echo "<th>Foto venta</th>";
        echo "<th>Email usuario</th>";
        echo "<th>Sabor pizza</th>";
        echo "<th>Tipo pizza</th>";
        echo "<th>Cantidad</th>";
        echo "<th>Email empleado</th>";
        echo "</tr>";
        foreach ($arrayVentaEmp as $value) {
            $arrayMailEmpleado = explode('@', $value->getEmailEmpleado());
            if(strcmp($arrayMailEmpleado[0],$arrayMailGet[0])==0){
                echo "<tr>";
                echo "<td align=center valign=center>";
                echo "<img src=" . dirname($_SERVER['PHP_SELF']) . "/bds/ImagenesDeLaVentaEmpleado/" . $arrayMailEmpleado[0] . ".png" . ">";
                echo "</td>";
                echo "<td align=center valign=center>";
                echo $value->getEmail();
                echo "</td>";
                echo "<td align=center valign=center>";
                echo $value->getSabor();
                echo "</td>";
                echo "<td align=center valign=center>";
                echo $value->getTipo();
                echo "</td>";
                echo "<td align=center valign=center>";
                echo $value->getCantidad();
                echo "</td>";
                echo "<td align=center valign=center>";
                echo $value->getEmailEmpleado();
                echo "</td>";
                echo "</tr>";
            }
        }
    }else{
        echo "<h1>Nos hay ventas con empleados</h1>";    
    }

    
?>