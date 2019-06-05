<?php
    namespace Heladeria\clases\modelo

    class venta
    {
        private $sabor;
        private $tipo;
        private $total;
        private $cantKgVendVend;


        public function __construct($sabor, $tipo, $total, $cantKgVendVend)
        {
            $this->sabor = $sabor;
            $this->tipo = $tipo;
            $this->total = $total;
            $this->cantKgVendVend = $cantKgVendVend;
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
         * Get the value of total
         */ 
        public function getTotal()
        {
                return $this->total;
        }

        /**
         * Set the value of total
         *
         * @return  self
         */ 
        public function setTotal($total)
        {
                $this->total = $total;

                return $this;
        }


        /**
         * Get the value of cantKgVendVend
         */ 
        public function getCantKgVend()
        {
                return $this->cantKgVend;
        }

        /**
         * Set the value of cantKgVend
         *
         * @return  self
         */ 
        public function setCantKgVend($cantKgVend)
        {
                $this->cantKgVend = $cantKgVend;

                return $this;
        }
    }

?>