<?php
    class Producto{
        private $_id;
        private $_nombre;
        private $_importador;
        private $_pais;
        private $_kilos;

        public function __construct($id, $nombre, $importador, $pais, $kilos){
            $this->_id = $id;
            $this->_nombre = $nombre;
            $this->_importador = $importador;
            $this->_pais = $pais;
            $this->_id = $id;
            $this->_kilos = $kilos;
        }

        public function mostrar(){
            echo $this->_id."<br>";
            echo $this->_nombre."<br>";
            echo $this->_importador."<br>";
            echo $this->_pais."<br>";
            echo $this->_kilos."<br>";

        }

        public function getId(){
            return $this->_id;
        }

        public function getKilos(){
            return $this->_kilos;
        }

        public function setKilos($kilos){
            $this->_kilos=$kilos;
        }
    }
?>