<?php
    require_once __DIR__ . '/../modelo/empleado.php';
    
    if(isset($_GET[1])){
        switch (strtolower($_GET[1])){
            case'conimagen':
                $empleados = Empleado::leer();
                if(sizeof($empleados)>0){
                    echo "<table border=1 align=center valign=center>";
                    echo "<caption><h2>Listado de empleados con imagenes</h2></caption>";
                    echo "<tr>";
                    echo "<th>Foto</th>";
                    echo "<th>Email</th>";
                    echo "<th>Alias</th>";
                    echo "<th>Tipo</th>";
                    echo "<th>Edad</th>";
                    echo "</tr>";
                    foreach ($empleados as $value) {
                        echo "<tr>";
                        echo "<td align=center valign=center>";
                        $arrayMail = explode('@', $value->getEmail());
                        echo "<img src=" . dirname($_SERVER['PHP_SELF']) . "/bds/ImagenesDeEmpleado/" . $arrayMail[0] . ".png" . ">";
                        echo "</td>";
                        echo "<td align=center valign=center>";
                        echo $value->getEmail();
                        echo "</td>";
                        echo "<td align=center valign=center>";
                        echo $value->getAlias();
                        echo "</td>";
                        echo "<td align=center valign=center>";
                        echo $value->getTipo();
                        echo "</td>";
                        echo "<td align=center valign=center>";
                        echo $value->getEdad();
                        echo "</td>";
                        echo "</tr>";
                    }
                    echo "</table>";
                }
                break;
            case'sinimagen':
                $empleados = Empleado::leer();
                if(sizeof($empleados)>0){
                    echo "<table border=1 align=center valign=center>";
                    echo "<caption><h2>Listado de empleados sin imagenes</h2></caption>";
                    echo "<tr>";
                    echo "<th>Email</th>";
                    echo "<th>Alias</th>";
                    echo "<th>Tipo</th>";
                    echo "<th>Edad</th>";
                    echo "</tr>";
                    foreach ($empleados as $value) {
                        echo "<tr>";
                        echo "<td align=center valign=center>";
                        echo $value->getEmail();
                        echo "</td>";
                        echo "<td align=center valign=center>";
                        echo $value->getAlias();
                        echo "</td>";
                        echo "<td align=center valign=center>";
                        echo $value->getTipo();
                        echo "</td>";
                        echo "<td align=center valign=center>";
                        echo $value->getEdad();
                        echo "</td>";
                        echo "</tr>";
                    }
                    echo "</table>";
                }
                break;
            default:
                $empleados = Empleado::leer();
                if(sizeof($empleados)>0){
                    echo "<table border=1 align=center valign=center>";
                    echo "<caption><h2>Listado de empleados solo nombres</h2></caption>";
                    echo "<tr>";
                    echo "<th>Nombre/Alias</th>";
                    echo "</tr>";
                    foreach ($empleados as $value) {
                        echo "<tr>";
                        echo "<td align=center valign=center>";
                        echo $value->getAlias();
                        echo "</td>";
                        echo "</tr>";
                    }
                    echo "</table>";
                }
                break;
        }    
    }else{
        echo "<h2>Ingrese parametros</h2>";
    }
?>