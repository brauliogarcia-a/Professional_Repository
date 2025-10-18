<?php
class Producto
{
    private $codigo;
    private $nombre;
    private $descrip;	
    private $cantidad;
    private $precio;

    // Constructores
    public function __construct( $codigo, $nombre, $descrip, $cantidad, $precio )
    {
        $this->codigo = $codigo;
	    $this->nombre = $nombre;
	    $this->descrip = $descrip;
	    $this->cantidad = $cantidad;
	    $this->precio = $precio;
    }

    // Getters y Setters
    public function getCodigo()
    {
        return $this->codigo;
    }

    public function setCodigo( $codigo )
    {
        $this->codigo = $codigo;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre( $nombre )
    {
        $this->nombre = $nombre;
    }

    public function getDescripcion()
    {
        return $this->descrip;
    }

    public function setDescripcion( $descrip )
    {
        $this->descrip = $descrip;
    }

    public function getCantidad()
    {
        return $this->cantidad;
    }

    public function setCantidad( $cantidad )
    {
        $this->cantidad = $cantidad;
    }

    public function getPrecio()
    {
        return $this->precio;
    }

    public function setPrecio( $precio )
    {
        $this->precio = $precio;
    }

    // Métodos
    public function actualizarCantidad( $cantidad )
    {
        $this->cantidad += $cantidad;
    }

    public function calcularPrecio()
    {
        // formato para números con dos decimales
        return number_format($this->precio * $this->cantidad, 2, '.','' );
    } // fin del método precioTotal
}
?>