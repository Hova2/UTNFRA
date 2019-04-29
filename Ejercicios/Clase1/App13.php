<?php

/**
 * @Author: JuanIG
 * @Date:   2019-04-25 12:14:15
 * @Last Modified by:   JuanIG
 * @Last Modified time: 2019-04-25 13:51:14
 */
	
	$array1=array();
	$array2=array();
	$array3=array();

	array_push($array1,"Perro", "Gato", "Ratón", "Araña", "Mosca");
	array_push($array2,"1986", "1996", "2015", "78", "86");
	array_push($array3,"php", "mysql", "html5", "typescript", "ajax");
	$tmp = array_merge($array1, $array2);
	$final = array_merge($tmp, $array3);

	var_dump($final);

?>