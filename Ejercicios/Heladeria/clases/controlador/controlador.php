<?php
    require __DIR__ . '/../modelo/helado.php';
    require __DIR__ . '/../dao/heladoDao.php';
    
    class controlador{
     
        public static function crearHelado($sabor, $tipo, $precio, $cantKg){
            $helTmp=new helado($sabor, $tipo, $precio, $cantKg);
            heladoDao::guardar($helTmp);
        }

    }
?>