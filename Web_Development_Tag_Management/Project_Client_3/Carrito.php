<?php
class Carrito
{
	// atributos de clase
	public $codigo; 	// atributo código de carrito
	public $productos; 	// atributo productos, contendra todos los productos seleccionados al carrito

	// constructor del Carrito
	function __construct( $id )
	{		
		$this->codigo = $id;
		$this->productos = array(); // instanciamos el atributo como un arreglo
	} // fin del constructor

	// método get de productos
	public function obtenerTodosProductos()
	{
		return $productos;
	}
	
	// método obtener producto
	public function obtenerProducto( $codigo )
	{
		foreach( $this->productos as $indice => $producto ) 
		{
			if( $producto->codpro == (int)$codigo )
			{
				return $producto;
			}
		}
		return null;
	} // fin del método getProducto

	// método updateQuantity
	// actualiza la cantidad de items para un mismo producto que ya existe en el carrito
	public function actualizarCantidad( $codigo, $cantidad )
	{
		foreach ($this->productos as $indice => $producto ) 
		{
			if( $producto->codpro == (int)$codigo )
			{
				$producto->cantidad += $cantidad;
			} // fin del if
		} // fin de foreach
	} // fin del método updateQuantity

	// agrega o actualiza la cantidad de un producto
	public function agregarProducto( $producto )
	{
		// busco el producto si ya fue agregado
		$incluido = $this->getProduct( $producto->codpro );
		if( $incluido )
		{
			$this->updateQuantity( $producto->codpro, 1); // busco y actualizo el producto
			
			if($producto->codpro == 0)
				$this->deleteProduct( $producto->codpro );
		} 
		else
		{
			$this->productos[] = $producto; // agrego un nuevo producto
		}
	} // fin del método addProduct

	// calcula el monto total de los productos
	public function calcularMontoTotal()
	{
		$monto = 0.0;

		foreach ( $this->productos as $indice => $producto ) 
		{
			$monto += $producto->precioTotal();
		} // fin de foreach

		// formato para números con dos decimales
		return number_format($monto, 2, '.', '');
	} // fin del método calculateAmount

	// calcula la cantidad total de productos agregados
	public function calcularCantidad()
	{
		$cantidad = 0;

		foreach ($this->productos as $indice => $producto ) 
		{
			$cantidad += $producto->cantidad;
		}

		return $cantidad;
	} // fin del método calculateQuantity

	// eliminar producto
	public function eliminarProducto( $codigo )
	{
		$productos2 = array();

		foreach ($this->productos as $indice => $producto) 
		{
			if($producto->codpro != (int)$codigo )
				$productos2[] = $producto;
		} // fin de foreach

		$this->productos = $productos2;
	} // fin del método deleteProduct

	// actualiza cantidad ingresada
	public function updateQuantityEntered( $codigo, $cantidad )
	{
		foreach ($this->productos as $indice => $producto ) 
		{
			if( $producto->codpro == (int)$codigo )
				$producto->cantidad = $cantidad;
		} // fin de foreach
	} // fin del método updateQuantityEntered

} // fin de la clase Carrito
?>