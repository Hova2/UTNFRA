<?php
namespace Src\App\Clases\Helper;

class ImagenMarcaDeAgua{
    public static function marcaDeAgua($rutaImagen,$rutaEstampa){
    
    $imagen = imagecreatefrompng($rutaImagen);
    $estampa = imagecreatefrompng($rutaEstampa);
    $destino = pathinfo($rutaImagen, PATHINFO_DIRNAME) . "/" . pathinfo($rutaImagen,PATHINFO_BASENAME);

    $margen_dcho = 10;
    $margen_inf = 10;
    $sx = imagesx($estampa);
    $sy = imagesy($estampa);

    imagecopy($imagen, $estampa, imagesx($imagen) - $sx - $margen_dcho, imagesy($imagen) - $sy - $margen_inf, 0, 0, imagesx($estampa), imagesy($estampa));

    imagepng($imagen, $destino);
    imagedestroy($imagen);

    }

}
?>