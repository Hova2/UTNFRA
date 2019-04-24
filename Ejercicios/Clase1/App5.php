<?php
	$a=5; 
	$b=4; 
	$c=4;
	
	if($a<$b && $a<$c){
		if($b<$c){
			echo "El valor del medio es: " . $b;
		}else{
			echo "El valor del medio es: " . $c;
		}
	}elseif ($b<$a && $b<$c) {
		if($a<$c){
			echo "El valor del medio es: " . $a;
		}else{
			echo "El valor del medio es: " . $c;
		}
	}elseif ($c<$a && $c<$b) {
		if($a<$b){
			echo "El valor del medio es: " . $a;
		}else{
			echo "El valor del medio es: " . $b;
		}
	}else{
		echo "No existe valor medio";
	}
?>