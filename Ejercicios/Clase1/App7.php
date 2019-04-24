<?php
	$mesdia=date("n"."j");

		echo "La fecha es: " . date("j-"."n-"."Y") . "<br>";
	if(($mesdia>=1221 && $mesdia<=1231) || ($mesdia>=101 && $mesdia<=320)){
		echo "La estacion es verano";
	}elseif ($mesdia>=321 && $mesdia<=620){
		echo "La estacion es otoño";
	}elseif ($mesdia>=621 && $mesdia<=920){
		echo "La estacion es invierno";
	}else{
		echo "La estacion es primavera";
	}
?>