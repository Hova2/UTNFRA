<?php
	$condicion=true;
	$num=1;
	$acum=0;
	while($condicion){
		echo "El numero sumado fue: " . $num . "<br>";
		if($acum+$num < 1000){
			$acum+=$num;
			$num++;
		}
		else{
			$condicion=false;
			echo "<br>";
			echo "La suma total fue: " . $acum . "<br>";
		}
	}
?>