<?php

/**
 * @Author: iguglielmone_mecon
 * @Date:   2019-04-25 08:36:53
 * @Last Modified by:   JuanIG
 * @Last Modified time: 2019-04-25 09:11:16
 */
	$acum=0;

	for ($i=0; $i < 5; $i++) { 
		$numeros[$i]=rand(0,12);
		$acum+=$numeros[$i];
	}

	$prom=$acum/5;

	if ($prom<6) {
		echo "El promedio de los numeros es menor a 6";
	}elseif ($prom==6) {
		echo "El promedio de los numeros es igual a 6";
	}else {
		echo "El promedio de los numeros es mayor a 6";
	}

?>