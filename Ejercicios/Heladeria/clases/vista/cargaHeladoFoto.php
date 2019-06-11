<?php
	$ruta = 'http://localhost/UTNFRA/Ejercicios/Heladeria/clases/controlador/subirHelado.php';
?>
<!doctype html>
<html>
	<head>
		<title>Subir foto de helado</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<form action="<?php echo $ruta; ?>" method="post" enctype="multipart/form-data" >
			<input type="hidden" name="sabor" value=<?php echo $_POST[1] ?>>
			<input type="hidden" name="tipo" value=<?php echo $_POST[2] ?>>
			<input type="hidden" name="precio" value=<?php echo $_POST[3] ?>>
			<input type="hidden" name="kg" value=<?php echo $_POST[4] ?>>
			<input type="file" name="archivo" /> 
			<br/>
			<input type="submit" value="Subir" />
		</form>
	</body>
</html>