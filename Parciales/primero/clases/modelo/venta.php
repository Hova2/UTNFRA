<?php

    class Venta{
        
        private $email;
        private $sabor;
        private $tipo;
        private $cantidad;
        
        public function __construct($email, $sabor, $tipo, $cantidad){
            $this->email = $email;
            $this->sabor = $sabor;
            $this->tipo = $tipo;
            $this->cantidad = $cantidad;
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
            return $array;
        }

        public static function guardar($venta){
            $archivo=fopen(__DIR__ . "/../../bds/Venta.txt","a");
            $ventaTmp=implode(",",$venta->toArray());
            fputs($archivo,"$ventaTmp\n");
            fclose($archivo);
        }
    }
?>