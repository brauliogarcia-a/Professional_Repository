<?php
require_once('php/ProductoDAO.php');

define('TAMANIO', 12); // determina cuántos resultados se mostrarán por página

$productosDAO = new ProductoDAO();
$categorias = $productosDAO->getCategorias(); // obtiene las categorías

// Se no hizo clic en alguna página
if(!isset( $_GET['pagina'] ) )
{
    $pagina = 1;
    $inicio = 0;
} else {
    $pagina = $_GET['pagina'];
    // calcula el límite inferior
    $inicio = ( $pagina - 1 ) * TAMANIO;
}    

// hay algún criterio de búsqueda
if( isset( $_GET['criterio'] ) )
{
    if( $_GET['criterio'] != ' ' )
    {
        $criterio = $_GET['criterio'];
        $cantidad = $productosDAO->getCantidadProductoPorNombre( $criterio ); // determina cuántos productos son con el filtro dado

        // calcula el número de páginas que se desplegaran
        $numeropaginas = ceil( $cantidad[0]['cantidad'] / TAMANIO );

        if( $cantidad[0]['cantidad'] > 0 ) // Si la cantidad es mayor a cero
        {            
            $productos = $productosDAO->getProductosFiltrados( $criterio, (int) $GLOBALS['inicio'], (int) TAMANIO ); 
        }
    }
}

?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> 
<html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Búsqueda: 
          <?php 
            if(isset($productos)){
              if($productos != NULL) 
                echo $productos[0]['nombre'];
              else
              echo 'No hay productos en ésta categoría';

            }
          ?>
        </title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="../img/avanti2.png">
        <link rel="stylesheet" href="css/styleCategorias.css" >
        <link rel="stylesheet" href="css/paginacion.css">
        <link href='http://fonts.googleapis.com/css?family=Calligraffitti' rel='stylesheet' type='text/css'>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" type="text/css">     
    </head>
    
    <body>
       <div class="wrapper">
           <header>
             <div><a class="logoLink" href="index.php"><img id="logoAvante" src="img/logoAvante.jpg"></a></div>
             
             <div class="telefonos">Teléfonos 01 (33) <strong>1202-9025 | 1955-4487 | 1955-8889<strong></div>

              <div class="menu">
                <li><a href="index.php">INICIO</a></li>
                <li><a href="empresa.php">EMPRESA</a></li>
                <li><a href="catalogo.php">CATALOGO</a></li>
                <li><a href="preguntas.php">PREGUNTAS FRECUENTES</a></li>
                <li><a href="contacto.php">CONTACTO</a></li>
              </div>
            
            <form  method="get" action="resultadodebusqueda.php"><input type="text" name="criterio" class="buscar" placeholder="Buscar por nombre o c&oacute;digo" ></form>
            <a href="http://www.facebook.com/andreateresita.avilacervantes"><div class="facebook"><img class="facebookI" src="img/facebook.png"></div></a>
      </header>

        <div class="banner">
            <div class="ContainerTextoBanner">
                <div class="TextoBanner">
                    Resultados de Búsqueda
                </div>
            </div>
            <div class="line"></div>
            <img id="banner1" src="img/bannerEmpresa.png"/> 
        </div> <! fin de banner>
          
        <div class="linkAzul">
            <li>
                <a href="index.php">Inicio</a>
            </li>
            <li>Búsqueda</li>
        </div>
      
        <div>
            <a name="ancla" id="a"></a>
            <div class="acerca">
                <div class="acercaTexto">
                    <br>
                </div>
            </div>
            
            <div class="lateral">
            <?php
                // imprime categorías en la lateral
                if(isset($categorias)){
                    foreach ($categorias as $valor) {                               
            ?>
                <li>
                    <a href="<?php echo 'productosporcategoria.php?criterio='.$valor['id']; ?>">
                        <?php echo $valor['nom']; ?>
                    </a>
                </li>              
            <?php                  
                    }
                }
            ?>
            </div>
            
            <div class="mapa">
            <?php
                if(isset($productos)){
                    if($productos != NULL){
                        foreach ($productos as $valor) {                               
            ?>
                <div class="modelo">
                    <a href="<?php echo 'producto.php?action=buscarprod&codigo='.strtolower($valor['codigo']); ?>">
                        <img class="modeloI" src="<?php echo $valor['imagen1']; ?>">
                    </a>
                    <a href="">
                        <div class="modeloLink">
                            <a href="<?php echo 'producto.php?action=buscarprod&codigo='.strtolower($valor['codigo']); ?>">
                                <?php echo $valor['nombre']; ?>
                            </a>
                        </div>
                    </a>
                </div>              
            <?php                  
                        }
                    } else
                        echo '<div class="no"><h1>Lo sentimos</h1><p>No hay productos en ésta categoría.</p></div>';
                } else
                    echo '<div class="no"><h1>Lo sentimos</h1><p>No hay productos en ésta categoría.</p></div>';
            ?>
            </div>

            <?php 
                // Comienza la paginación            
                $cantidad = (int) $GLOBALS['cantidad'][0]['cantidad'];                

                if( isset( $cantidad ) )
                {
                    if( $cantidad > 0 ) 
                    {
                        $nextpag = $pagina + 1;
                        $prevpag = $pagina - 1;
                
            ?>
            <div id="pagina">
                <ul id="pagination-digg">
                <?php
                    //Si es la primer página, deshabilito el botón
                        if ( $pagina == 1 ) 
                        {
                ?>
                            <li class="previous-off">&laquo; Previous</li>
                            <li class="active">1</li> 
                <?php
                            for( $i = ($pagina + 1); $i <= $numeropaginas; $i++ )
                            {
                ?>
                                <li>
                                    <a href="resultadodebusqueda.php?criterio=<?php echo $_GET['criterio']; ?>&pagina=<?php echo $i ?>;#ancla">
                                        <?php echo $i; ?>
                                    </a>
                                </li>
                <?php 
                            }

                            //Si es la última página, la deshabilito
                            if( $numeropaginas > $pagina )
                            {
                ?>      
                                <li class="next">
                                    <a href="resultadodebusqueda.php?criterio=<?php echo $_GET['criterio']; ?>&pagina=<?php echo $numeropaginas; ?>#ancla">
                                        Next &raquo;
                                    </a>
                                </li>
                <?php
                            } 
                            else
                            {
                ?>
                                <li class="next-off">Next &raquo;</li>
                <?php
                            }
                        }
                        else
                        {
                            // Si no es la primer página, habilito el botón previus y muestro los demás
                ?>
                            <li class="previous">
                                <a href="resultadodebusqueda.php?criterio=<?php echo $_GET['criterio']; ?>&pagina=<?php echo $prevpag; ?>#ancla">
                                    &laquo; Previous
                                </a>
                            </li>
                <?php
                            for( $i = 1; $i <= $numeropaginas ; $i++ )
                            {
                                // Compruebo si la página está activa
                                if( $pagina == $i )
                                {
                ?>
                                    <li class="active"><?php echo $i;?></li><?php
                                }
                                else
                                {
                ?>       
                                    <li>
                                        <a href="resultadodebusqueda.php?criterio=<?php echo $_GET['criterio']; ?>&pagina=<?php echo $i; ?>#ancla">
                                            <?php echo $i;?>
                                        </a>
                                    </li>
                <?php
                                }
                            }
                            //Si no es la última página, activo next
                            if( $numeropaginas > $pagina )
                            {   
                ?>   
                                <li class="next">
                                    <a href="resultadodebusqueda.php?criterio=<?php echo $_GET['criterio']; ?>&pagina=<?php echo $nextpag;?>#ancla">
                                        Next &raquo;
                                    </a>
                                </li>
                <?php
                            }
                            else
                            {
                ?>
                                <li class="next-off">Next &raquo;</li>
                <?php
                            }
                        }
                    }
                }
                ?> 
                </ul>
            </div>
        </div>

        <div class="footer">
          <div class="info">&copy;2015 Derechos Reservados. ********<br><br><br>
          <nav><strong>CONTACTO</strong></nav><br><br>
          Calle #712, Col. *****, Guadalajara, Jalisco, Mèxico<br>
          Telefonos: (33) 12345678<br>
          info@correo.com
        </div>
        <ul class="minimenu">
          <li><nav><strong>EMPRESA</strong></nav></li><br>
          <li><a href="empresa.php">Nosotros</a></li>
          <li><a href="garantia.php">Garantia</a></li>
          <li><a href="condiciones.php">Condiciones de envio</a></li>
          <li><a href="preguntas.php">Preguntas Frecuentes</a></li>
          <li><a href="aviso.php">Aviso de Privacidad</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div> <!- wrapper->
 
    </body>
</html>