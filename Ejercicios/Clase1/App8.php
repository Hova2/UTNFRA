<?php
	$numeros[1]="uno";
	$numeros[2]="dos";
	$numeros[3]="tres";
	$numeros[4]="cuatro";
	$numeros[5]="cinco";
	$numeros[6]="seis";
	$numeros[7]="siete";
	$numeros[8]="ocho";
	$numeros[9]="nueve";
	$numeros[20]="Veinte";
	$numeros[21]="Veintiuno"; 
	$numeros[22]="Veintidos"; 
	$numeros[23]="Veintitres"; 
	$numeros[24]="Veinticuatro"; 
	$numeros[25]="Veinticinco"; 
	$numeros[26]="Veintiseis"; 
	$numeros[27]="Veintisiete"; 
	$numeros[28]="Veintiocho"; 
	$numeros[29]="Veintinueve"; 
	$numeros[30]="Treinta";
	$numeros[40]="Cuarenta";
	$numeros[50]="Cincuenta";
	$numeros[60]="Sesenta";

	$num=32;
	$decena=(int)($num/10);
	$unidad=$num%10;

	echo "El numero es: " . $num . "<br>";
	echo "El numero en letras es " . " " . $numeros[$decena*10] . " y " . $numeros[$unidad];
?>