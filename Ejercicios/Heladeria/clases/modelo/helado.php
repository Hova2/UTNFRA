<?php
    namespace Heladeria\clases\modelo

    class helado
    {
        private $sabor;
        private $tipo;
        private $precio;
        private $cantKg;

        public function __construct($sabor, $tipo, $precio, $cantKg)
        {
            $this->sabor = $sabor;
            $this->tipo = $tipo;
            $this->precio = $precio;
            $this->cantKg = $cantKg;
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
         * Get the value of precio
         */ 
        public function getPrecio()
        {
                return $this->precio;
        }

        /**
         * Set the value of precio
         *
         * @return  self
         */ 
        public function setPrecio($precio)
        {
                $this->precio = $precio;

                return $this;
        }
        
        /**
         * Get the value of cantKg
         */ 
        public function getCantKg()
        {
                return $this->cantKg;
        }

        /**
         * Set the value of cantKg
         *
         * @return  self
         */ 
        public function setCantKg($cantKg)
        {
                $this->cantKg = $cantKg;

                return $this;
        }
    }

?>