<?php

/**
 * @Author: JuanIG
 * @Date:   2019-04-25 09:13:45
 * @Last Modified by:   JuanIG
 * @Last Modified time: 2019-04-25 09:51:51
 */
	$numeros[0]=0;
	for ($i=0; $i < 10; $i++) { 
		$numeros[$i]=($i*2)+1;
	}

	echo "Imprimir con FOR"."<br>";
	for ($i=0; $i < 10; $i++) { 
		echo $numeros[$i]."<br>";
	}

	echo "Imprimir con WHILE"."<br>";
	$i=0;
	while ( $i < 10) {
		echo $numeros[$i]."<br>";
		$i++;
	}

	echo "Imprimir con FOREACH"."<br>";
	foreach ($numeros as $valor) {
		echo $valor."<br>";	
	}
?>