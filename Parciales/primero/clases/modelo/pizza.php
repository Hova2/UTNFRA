<?php

class Pizza{
    
    private $id;
    private $sabor;
    private $precio;
    private $tipo;
    private $cantidad;

    public function __construct()
    {
        $parametros=func_get_args();
        if(func_num_args()==4){
            $this->sabor = $parametros[0];
            $this->precio = $parametros[1];
            $this->tipo = $parametros[2];
            $this->cantidad = $parametros[3];
        }else{
            $this->id = $parametros[0];
            $this->sabor = $parametros[1];
            $this->precio = $parametros[2];
            $this->tipo = $parametros[3];
            $this->cantidad = $parametros[4];
        }
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

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
        array_push($array,$this->id);
        array_push($array,$this->sabor);
        array_push($array,$this->precio);
        array_push($array,$this->tipo);
        array_push($array,$this->cantidad);
        return $array;
    }

    public static function guardar($pizza){
        $archivo=fopen(__DIR__ . "/../../bds/Pizza.txt","a");
        $pizzaTmp=implode(",",$pizza->toArray());
        fputs($archivo,"$pizzaTmp\n");
        fclose($archivo);
    }

    public static function leer(){
        $archivo=fopen(__DIR__ . "/../../bds/Pizza.txt","r");
        $retorno=array();
        while (!feof($archivo)) {
            $renglon = fgets($archivo);
            if(strlen($renglon)>0){
                $arrayDatos = explode(",",$renglon);
                $pizzaTmp=new Pizza($arrayDatos[0],$arrayDatos[1],$arrayDatos[2],$arrayDatos[3],$arrayDatos[4]);
                array_push($retorno,$pizzaTmp);
            }
        }
        fclose($archivo);
        return $retorno;
    }

    public static function borrar(){
        $archivo=fopen(__DIR__ . "/../../bds/Pizza.txt","w");
        fclose($archivo);
    }

    public static function getUltimoId(){
        $idPizza;
        $retorno;
        if(file_exists( __DIR__ . "/../../bds/IdPizza.txt")){
            $idPizza = file(__DIR__ . "/../../bds/IdPizza.txt");
            $retorno=(int)$idPizza[0];
        }else{
            $archivo=fopen(__DIR__ . "/../../bds/IdPizza.txt","w");
            fclose($archivo);
            $retorno=0;
        }
        return $retorno;
    }

    public static function setUltimoId($id){
        $archivo=fopen(__DIR__ . "/../../bds/IdPizza.txt","w");
        fputs($archivo,$id);
        fclose($archivo);
    }

    
}




?>