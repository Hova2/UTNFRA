<?php
	$operador="+";
	$op1=1;
	$op2=2;

	switch ($operador) {
	 	case '+':
	 		echo "El resultado de la suma es: " . ($op1+$op2);
	 		break;
	 	case '-':
	 		echo "El resultado de la resta es: " . ($op1-$op2);
	 		break;
	 	case '*':
	 		echo "El resultado de la multiplicacion es: " . ($op1*$op2);
	 		break;
	 	case '/':
	 		echo "El resultado de la division es: " . ($op1/$op2);
	 		break;
	 } 
?>