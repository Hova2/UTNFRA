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
            if(count($this->_productos)==0){
                array_push($this->_productos,$producto);
                $this->_capacidadActual=($this->_capacidadActual)-($producto->getKilos());
            }else{
                if((($this->_capacidadActual)-($producto->getKilos())>=0){
                    for ($i=0;$i<count($this->_productos);$i++){
                        if($this->_productos[$i]->getId()==$producto->getId()){
                            $this->_productos[$i]->setKilos($this->_productos[$i]->getKilos()+$producto->getKilos());
                            $this->_capacidadActual=($this->_capacidadActual)-($producto->getKilos());
                        }else{
                            array_push($this->_productos,$producto);
                            $this->_capacidadActual=($this->_capacidadActual)-($producto->getKilos());
                        }
                    }
                }else{
                    echo "No hay espacio en el container";
                }
            }
        }
    }
?>