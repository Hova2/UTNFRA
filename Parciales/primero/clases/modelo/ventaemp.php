<?php

    class VentaEmp{
        
        private $email;
        private $sabor;
        private $tipo;
        private $cantidad;
        private $emailEmpleado;
        
        public function __construct($email, $sabor, $tipo, $cantidad, $emailEmpleado){
            $this->email = $email;
            $this->sabor = $sabor;
            $this->tipo = $tipo;
            $this->cantidad = $cantidad;
            $this->emailEmpleado = $emailEmpleado;
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

        public function getEmailEmpleado()
        {
                return $this->emailEmpleado;
        }

        /**
         * Set the value of email
         *
         * @return  self
         */ 
        public function setEmailEmpleado($emailEmpleado)
        {
                $this->emailEmpleado = $emailEmpleado;

                return $this;
        }

        /**
         * Get the value of sabor
         */ 
        public function getSabor()
        {
                return $this->sabor;
        }

        /**
         * Set the value of sabor
         *
         * @return  self
         */ 
        public function setSabor($sabor)
        {
                $this->sabor = $sabor;

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

        /**
         * Get the value of cantidad
         */ 
        public function getCantidad()
        {
                return $this->cantidad;
        }

        /**
         * Set the value of cantidad
         *
         * @return  self
         */ 
        public function setCantidad($cantidad)
        {
                $this->cantidad = $cantidad;

                return $this;
        }

        public function toArray(){
            $array=array();
            array_push($array,$this->email);
            array_push($array,$this->sabor);
            array_push($array,$this->tipo);
            array_push($array,$this->cantidad);
            array_push($array,$this->emailEmpleado);
            return $array;
        }

        public static function guardar($ventaEmp){
            $archivo=fopen(__DIR__ . "/../../bds/VentaEmp.txt","a");
            $ventaEmpTmp=implode(",",$ventaEmp->toArray());
            fputs($archivo,"$ventaEmpTmp\n");
            fclose($archivo);
        }

        public static function leer(){
                $archivo=fopen(__DIR__ . "/../../bds/VentaEmp.txt","r");
                $retorno=array();
                while (!feof($archivo)) {
                    $renglon = fgets($archivo);
                    if(strlen($renglon)>0){
                        $arrayDatos = explode(",",$renglon);
                        $ventaEmpTmp=new VentaEmp($arrayDatos[0],$arrayDatos[1],$arrayDatos[2],$arrayDatos[3],$arrayDatos[4]);
                        array_push($retorno,$ventaEmpTmp);
                    }
                }
                fclose($archivo);
                return $retorno;
            }
    }
?>