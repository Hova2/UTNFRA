<?php
namespace Src\App\Clases\Helper;

class BajaImagen{

    public static function baja($directorio,$idcompra){
        $imagenes=scandir($directorio);
        if(sizeof($imagenes)>0){
            for($i=2 ; $i < sizeof($imagenes) ; $i++){
                $arrayImagen = explode('-', $imagenes[$i]);
                if($arrayImagen[0]==$idcompra){
                    unlink($directorio . '\\' .$imagenes[$i]);
                }
            }
        }
    }
}

?>