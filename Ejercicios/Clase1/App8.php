<?php
	$numeros[1]  ="uno";
	$numeros[2]  ="dos";
	$numeros[3]  ="tres";
	$numeros[4]  ="cuatro";
	$numeros[5]  ="cinco";
	$numeros[6]  ="seis";
	$numeros[7]  ="siete";
	$numeros[8]  ="ocho";
	$numeros[9]  ="nueve";
	$numeros[30] ="treinta";
	$numeros[40] ="cuarenta";
	$numeros[50] ="cincuenta";
	$numeros[60] ="sesenta";
	$num         =25;
	
	echo "El numero es: " . $num . "<br>";
	
	if ($num==20){
		echo "El numero en letras es veinte";
	}else{
		$decena =((int)($num/10))*10;
		$unidad =$num%10;
		if ($decena==20) {
			echo "El numero en letras es veinti".$numeros[$unidad];
		}else{
			echo "El numero en letras es " . " " . $numeros[$decena] . " y " . $numeros[$unidad];
		}
	}
?>