<?php

    class Empleado{
        
        private $email;
        private $alias;
        private $tipo;
        private $edad;

        public function __construct($email, $alias, $tipo, $edad){
        
            $this->email = $email;
            $this->alias = $alias;
            $this->tipo = $tipo;
            $this->edad = $edad;
        }

        /**
         * Get the value of email
         */ 
        public function getEmail()
        {
                return $this->email;
        }

        /**
         * Set the value of email
         *
         * @return  self
         */ 
        public function setEmail($email)
        {
                $this->email = $email;

                return $this;
        }

        /**
         * Get the value of edad
         */ 
        public function getEdad()
        {
                return $this->edad;
        }

        /**
         * Set the value of edad
         *
         * @return  self
         */ 
        public function setEdad($edad)
        {
                $this->edad = $edad;

                return $this;
        }

        /**
         * Get the value of alias
         */ 
        public function getAlias()
        {
                return $this->alias;
        }

        /**
         * Set the value of alias
         *
         * @return  self
         */ 
        public function setAlias($alias)
        {
                $this->alias = $alias;

                return $this;
        }

        /**
         * Get the value of tipo
         */ 
        public function getTipo()
        {
                return $this->tipo;
        }

        /**
         * Set the value of tipo
         *
         * @return  self
         */ 
        public function setTipo($tipo)
        {
                $this->tipo = $tipo;

                return $this;
        }

        public function toArray(){
            $array=array();
            array_push($array,$this->email);
            array_push($array,$this->alias);
            array_push($array,$this->tipo);
            array_push($array,$this->edad);
            return $array;
        }

        public static function leer(){
            $archivo=fopen(__DIR__ . "/../../bds/Empleado.txt","r");
            $retorno=array();
            while (!feof($archivo)) {
                $renglon = fgets($archivo);
                if(strlen($renglon)>0){
                    $arrayDatos = explode(",",$renglon);
                    $empleadoTmp=new Empleado($arrayDatos[0],$arrayDatos[1],$arrayDatos[2],$arrayDatos[3]);
                    array_push($retorno,$empleadoTmp);
                }
            }
            fclose($archivo);
            return $retorno;
        }

        public static function guardar($empleado){
            $archivo=fopen(__DIR__ . "/../../bds/Empleado.txt","a");
            $empleadoTmp=implode(",",$empleado->toArray());
            fputs($archivo,"$empleadoTmp\n");
            fclose($archivo);
        }

        public static function borrar(){
            $archivo=fopen(__DIR__ . "/../../bds/Empleado.txt","w");
            fclose($archivo);
        }
    }
?>