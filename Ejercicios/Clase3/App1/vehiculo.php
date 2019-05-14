<?php
    class Vehiculo{
       private $patente;
       private $ingreso;
       private $importe;
    
        public static function leer(){
            $archivo=fopen("vehiculo.txt","r");
            $retorno=array();
            while (!feof($archivo)) {
                /*echo "<br>";
                $renglon = fgets($archivo);
                echo $renglon;*/

                $renglon = fgets($archivo);
                $arrayDatos = explode(",",$renglon);
                //var_dump($arrayDatos);
                $vehTmp=new Vehiculo($arrayDatos[0],$arrayDatos[1],$arrayDatos[2]);
                array_push($retorno,$vehTmp);
            }
            fclose($archivo);
            return $retorno;
        }

        public static function guardar($vehiculo){
            $archivo=fopen("vehiculo.txt","a");
            $vehTmp=implode(",",$vehiculo->toArray());
            fputs($archivo,"\n $vehTmp");
            fclose($archivo);
        }

        public function __construct($patente,$ingreso,$importe){
            $this->patente = $patente;
            $this->ingreso = $ingreso;
            $this->importe = $importe;
            
        }

        public function mostrar(){
            echo "La patente es: $this->patente - El ingreso es: $this->ingreso - El importe: $this->importe <br>";
        }

        public function toArray(){
            $array=array();
            array_push($array,$this->patente);
            array_push($array,$this->ingreso);
            array_push($array,$this->importe);
            return $array;

        }
    }
?>