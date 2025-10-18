<?php
require_once('Conexion.php');

class ProductoDAO
{
    private $productos;

    // obtiene el total de categorias
    public function getCantidadCategorias()
    {
        $consulta = "SELECT COUNT(*) AS cantidad FROM categorias";
        $conexion = new Conexion(); // instanciamos Conexion
        $this->productos = $conexion->consultar( $consulta);

        $conexion->__destructor(); // cerramos Conexion

        return $this->productos;
    }

    // obtiene todas las categorias
    public function getCategorias()
    {
        $consulta = "SELECT * FROM categorias";
        $conexion = new Conexion(); // instanciamos Conexion
        $this->productos = $conexion->consultar( $consulta);

        $conexion->__destructor(); // cerramos Conexion

        return $this->productos;
    }

    // obtiene todas las categorias para paginación
    public function getPaginacionCategorias( $inicio, $tamanio )
    {
        $consulta = "SELECT * FROM categorias LIMIT :inicio , :tamanio";
        $valores = array( "inicio" => $inicio, "tamanio" => $tamanio );
        $conexion = new Conexion(); // instanciamos Conexion
        $this->productos = $conexion->consultar( $consulta, $valores );

        $conexion->__destructor(); // cerramos Conexion

        return $this->productos;
    }

    // obtiene el total de productos por nombre
    public function getCantidadProductoPorNombre( $nombre )
    {        
        $consulta = "SELECT COUNT(*)  AS cantidad  
                    FROM productos WHERE nombre LIKE :nombre OR codigo LIKE :nombre";
        $valores = array( "nombre" => $nombre, "nombre" => $nombre );
       
        $conexion = new Conexion(); // instanciamos Conexion
        $this->productos = $conexion->consultar( $consulta, $valores, 'si' );

        $conexion->__destructor(); // cerramos Conexion

        return $this->productos;
    } // fin del método obtener cantidad de productos

    // obtiene producto por nombre
    public function getProductoPorNombre( $nombre )
    {        
        $consulta = "SELECT codigo, nombre, imagen1   
                    FROM productos WHERE nombre LIKE :nombre OR codigo LIKE :nombre";
	    $valores = array( "nombre" => $nombre, "nombre" => $nombre );
       
	    $conexion = new Conexion(); // instanciamos Conexion
	    $this->productos = $conexion->consultar( $consulta, $valores, 'si' );

	    $conexion->__destructor(); // cerramos Conexion

        return $this->productos;
    } // fin del método obtener Producto por Nombre

    // obtiene productos del campo de texto busqueda
    public function getProductosFiltrados( $nombre, $inicio, $tamanio )
    {
        $consulta = "SELECT codigo, nombre, imagen1   
                    FROM productos WHERE nombre LIKE :nombre OR codigo LIKE :nombre LIMIT :inicio , :tamanio";
        $valores = array( "nombre" => $nombre, "nombre" => $nombre, "inicio" => $inicio, "tamanio" => $tamanio );
       
        $conexion = new Conexion(); // instanciamos Conexion
        $this->productos = $conexion->consultar( $consulta, $valores, 'si' );

        $conexion->__destructor(); // cerramos Conexion

        return $this->productos;
    }

    // obtiene el total de productos de categoria
    public function getCantidadProductoPorCategoria( $categoria )
    {
        $consulta = "SELECT COUNT(*) AS cantidad FROM productos p JOIN categorias c ON p.idcateg = c.id AND p.idcateg = :categoria";
        $valores = array( "categoria" => $categoria );
        
        $conexion = new Conexion(); // instanciamos Conexion
        $this->productos = $conexion->consultar( $consulta, $valores );
        
        $conexion->__destructor(); // cierra la conexión

        return $this->productos;
    }

    // obtiene todos los productos de una categoria
    public function getProductoPorCategoria( $categoria, $inicio, $tamanio )
    {
        $consulta = "SELECT p.codigo, p.nombre, p.imagen1, c.nom 
                    FROM productos p JOIN categorias c ON p.idcateg = c.id AND p.idcateg = :categoria
                    LIMIT :inicio , :tamanio";
        $valores = array( "categoria" => $categoria, "inicio" => $inicio, "tamanio" => $tamanio );
        
        $conexion = new Conexion(); // instanciamos Conexion
        $this->productos = $conexion->consultar( $consulta, $valores );
        
        $conexion->__destructor(); // cierra la conexión

        return $this->productos;
    } // fin del método obtener productos por categoria
    
    // obtiene el producto haciendo clic sobre la liga que contiene el codigo
    // como filtro
    public function getProductoPorCodigo( $codigo )
    {
        $consulta = "SELECT p.*, c.*
        FROM productos p JOIN categorias c ON p.idcateg = c.id AND p.codigo = :codigo";
	$valores = array( "codigo" => $codigo );

	$conexion = new Conexion(); // instanciamos Conexion
	$this->productos = $conexion->consultar( $consulta, $valores );

	$conexion->__destructor(); // cierra la conexión

	return $this->productos;
    } // fin del método obtener Producto por Código
    
    // obtiene el producto haciendo clic sobre el boton Agregar para agregarlo al carrito
    public function getProductoPorCodigo2( $codigo )
    {
        $consulta = "SELECT codigo, nombre, descrip, precio FROM productos WHERE codigo = :codigo";
	   $valores = array( "codigo" => $codigo );

	$conexion = new Conexion(); // instanciamos Conexion
	$this->productos = $conexion->consultar( $consulta, $valores );

	$conexion->__destructor(); // cierra la conexión

	return $this->productos;
    } // fin del método obtener Producto por Código
    
} // fin de la clase ProductoDAO
?>