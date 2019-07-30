<?php
namespace Src\App\Clases\Helper;

use Slim\Http\UploadedFile;

class AltaImagen{

    public static function alta($directorio, $nombreArchivo, UploadedFile $archivoTmp){
        $extencion = pathinfo($archivoTmp->getClientFilename(), PATHINFO_EXTENSION);
        $archivoTmp->moveTo($directorio . DIRECTORY_SEPARATOR . $nombreArchivo . '.' . $extencion);
    }
}

?>