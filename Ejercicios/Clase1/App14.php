<?php
    /**
     * 
     */
    
    $array1=array();
	$array2=array();
	$array3=array();
    $arrayAso=array();
    $arrayInd=array();
    
    array_push($array1,"Perro", "Gato", "Ratón", "Araña", "Mosca");
	array_push($array2,"1986", "1996", "2015", "78", "86");
    array_push($array3,"php", "mysql", "html5", "typescript", "ajax");
    
    $arrayAso["Uno"]=$array1;
    $arrayAso["Dos"]=$array2;
    $arrayAso["Tres"]=$array3;

    $arrayInd[1]=$array1;
    $arrayInd[2]=$array1;
    $arrayInd[3]=$array1;

    foreach ($arrayAso as $key => $value) {
        echo "La clave del array asociativo es: ".$key ." y el valor es: ";
        var_dump($value);
        echo "<br>";
    }

    foreach ($arrayInd as $key => $value) {
        echo "La clave del array indexado es: ".$key ." y el valor es: ";
        var_dump($value);
        echo "<br>";
    }


?>