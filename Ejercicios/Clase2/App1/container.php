<?php
    class Container{
        private $_tamanio;
        private $_capacidad;
        private $_capacidadActual;
        private $_productos=array();

        public function __construct($tamanio){
            $this->_tamanio = $tamanio;
            switch($tamanio){
                case "chico":
                    $this->_capacidad = 1000;
                    break;
                case "mediano":
                    $this->_capacidad = 2500;
                    break;
                case "grande":
                    $this->_capacidad = 9000;
                    break;
            }

            $this->_capacidadActual=$this->_capacidad;
        }

        public function mostrar(){
            echo $this->_tamanio."<br>";
            echo $this->_capacidad."<br>";
        }

        public function agregarProducto($producto){
            $tam=count($this->_productos);
            
            if($tam==0){
                array_push($this->_productos,$producto);
                $this->_capacidadActual=($this->_capacidadActual)-($producto->getKilos());
            }else{
                if((($this->_capacidadActual)-($producto->getKilos())>=0)){
                    $existe=false;
                    foreach ($this->_productos as $valor){
                        if($valor->getId()==$producto->getId()){
                            $existe=true;
                            $valor->setKilos($valor->getKilos()+$producto->getKilos());
                            $this->_capacidadActual=($this->_capacidadActual)-($producto->getKilos());
                            break;
                        }
                    }
                    if(!$existe){
                        array_push($this->_productos,$producto);
                        $this->_capacidadActual=($this->_capacidadActual)-($producto->getKilos());
                    }
                }else{
                    echo "No hay espacio en el container";
                }
            }
        }

        public function mostrarProductos(){
            foreach ($this->_productos as $valor){
                echo "El id del producto es: " . $valor->getId() . "<br>";
                echo "Los kilos del producto son: " . $valor->getKilos() . "<br>";
                echo "<br>";
            }
        }
    }
?>