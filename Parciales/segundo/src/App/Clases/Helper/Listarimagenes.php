<?php
namespace Src\App\Clases\Helper;

class ListarImagenes{
    public static function listarAdmin($directorio){
        $imagenes=scandir($directorio);
        $sb='';
        if(sizeof($imagenes)>0){
            $sb.="<table border=1>";
            $sb.="<caption><h2>Todas las compras</h2></caption>";
            $sb.="<tr>";
            $sb.="<th>Foto</th>";
            $sb.="<th>Nombre</th>";
            $sb.="</tr>";
            for($i=2 ; $i < sizeof($imagenes) ; $i++){
                $sb.="<tr>";
                $sb.="<td>";
                $sb.="<img src=" . $directorio . '\\' . $imagenes[$i] . ">";
                $sb.="</td>";
                $sb.="<td>";
                $sb.=$imagenes[$i];
                $sb.="</td>";
                $sb.="</tr>";
            }
            $sb.="</table>";
        }
        return $sb;
    }
    public static function listarUsuario($directorio,$usuarioNombre,$idsCompras){
        $imagenes=scandir($directorio);
        $sb='';
        if(sizeof($imagenes)>0){
            $sb.="<table border=1>";
            $sb.="<caption><h2>Compras del usuario: " . $usuarioNombre . "</h2></caption>";
            $sb.="<tr>";
            $sb.="<th>Foto</th>";
            $sb.="<th>Nombre</th>";
            $sb.="</tr>";
            for($i=2 ; $i < sizeof($imagenes) ; $i++){
                $arrayImagen = explode('-', $imagenes[$i]);
                foreach($idsCompras as $id){
                    if($arrayImagen[0]==$id){
                        $sb.="<tr>";
                        $sb.="<td>";
                        $sb.="<img src=" . $directorio . '\\' . $imagenes[$i] . ">";
                        $sb.="</td>";
                        $sb.="<td>";
                        $sb.=$imagenes[$i];
                        $sb.="</td>";
                        $sb.="</tr>";
                        break;
                    }
                }
            }
            $sb.="</table>";
        }
        return $sb;
    }
}
?>





