<?php
    require __DIR__ . '/../modelo/helado.php';
    require __DIR__ . '/../dao/heladoDao.php';
    
    class controlador{
     
        public static function crearHelado($sabor, $tipo, $precio, $cantKg){
            $helTmp=new helado($sabor, $tipo, $precio, $cantKg);
            heladoDao::guardar($helTmp);
        }

        public static function crearHeladoFoto($sabor, $tipo, $precio, $cantKg){
            $helTmp=new helado($sabor, $tipo, $precio, $cantKg);
            heladoDao::guardar($helTmp);
            $destino = __DIR__ . '/../../bds/fotohelados/' . $_FILES["archivo"]["name"];
            $destino = pathinfo($destino, PATHINFO_DIRNAME) . "/" . $sabor . $tipo . date("Ymd") . "." . pathinfo($destino, PATHINFO_EXTENSION);
            move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
        }

    }
?>