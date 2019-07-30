<?php
namespace Src\App\Clases\Helper;

use Src\App\Clases\Helper\Imagenmarcadeagua;
use Slim\Http\UploadedFile;

class AltaImagen{

    public static function alta($directorio, $nombreArchivo, UploadedFile $archivoTmp){
        $extencion = pathinfo($archivoTmp->getClientFilename(), PATHINFO_EXTENSION);
        $archivoTmp->moveTo($directorio . DIRECTORY_SEPARATOR . $nombreArchivo . '.' . $extencion);
    }

    public static function altaMarcaDeAgua($directorio, $rutaEstampa, $nombreArchivo, UploadedFile $archivoTmp){
        $extencion = pathinfo($archivoTmp->getClientFilename(), PATHINFO_EXTENSION);
        $rutaImagen = $directorio . DIRECTORY_SEPARATOR . $nombreArchivo . '.' . $extencion;
        $archivoTmp->moveTo($rutaImagen);
        Imagenmarcadeagua::marcaDeAgua($rutaImagen,$rutaEstampa);
    }
}

?>