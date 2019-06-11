<?php
    class heladoDao{
        public static function guardar($helado){
            $archivo=fopen(__DIR__ . "/../../bds/helado.txt","a");
            $helTmp=implode(",",$helado->toArray());
            fputs($archivo,"\n $helTmp");
            fclose($archivo);
        }    
    }
?>
    