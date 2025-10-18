<?php
date_default_timezone_set('America/Mexico_City');

require_once('php/ProductoDAO.php');

if( isset($_GET['action']) )
{
  if($_GET['action'] == 'buscarprod')
  {
    $productoDAO = new ProductoDAO();
    $productos = $productoDAO->getProductoPorCodigo( $_GET['codigo'] );
  }
}
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Avante Productos</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="img/avanti2.png">
        <link rel="stylesheet" href="css/styleProductos.css">
        <link href='http://fonts.googleapis.com/css?family=Calligraffitti' rel='stylesheet' type='text/css'>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" type="text/css">
        <script type="text/javascript">
     
    	function cambiar (nombre) {
    		document.getElementById('matrix').src = nombre;
    	}
     
    	</script> 
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
           <div class="linkAzul">
              <li><a href="index.php">Inicio</a></li>
              <li><a href="<?php echo 'productosporcategoria.php?criterio='.$productos[0]['id']; ?>">
                <?php 
                  if(isset($productos[0]['nom']))
                    echo $productos[0]['nom'] ?>
                </a></li>
              <li>Modelo 
                <?php 
                  if(isset($productos[0]['nombre']))
                  echo $productos[0]['nombre'] ?>
              </li>
           </div>
          <img  id="matrix" class="bannerImg" src="<?php if(isset($productos[0]['imagen1'])) echo $productos[0]['imagen1'] ?>"> 
       </div>

       <div class="imagenes">
        <?php
          if(isset($productos[0]['imagen2'])){
            if($productos[0]['imagen2'] != ""){
        ?>
         <div class="primera">
           <a href="javascript:cambiar('<?php echo $productos[0]['imagen1']; ?>')">
               <img src="<?php echo $productos[0]['imagen1'] ?>" width="325" height="225">
           </a>
         </div>
         <?php
            }
          }
          if(isset($productos[0]['imagen3'])){
            if($productos[0]['imagen3'] != ""){
         ?>
         <div class="segunda">
           <a href="javascript:cambiar('<?php echo $productos[0]['imagen2']; ?>')">
               <img src="<?php echo $productos[0]['imagen2'] ?>" width="325" height="225">
           </a>
         </div>
         <?php
            }
          }
          if(isset($productos[0]['imagen4'])){
            if($productos[0]['imagen4'] != ""){
         ?>
         <div class="tercera">
           <a href="javascript:cambiar('<?php echo $productos[0]['imagen3']; ?>')">
              <img src="<?php echo $productos[0]['imagen3'] ?>" width="325" height="225">
           </a>
         </div>
         <?php
            }
          }
          if(isset($productos[0]['imagen5'])){
            if($productos[0]['imagen5'] != ""){
         ?>
         <div class="cuarta">
           <a href="javascript:cambiar('<?php echo $productos[0]['imagen4']; ?>')">
             <img src="<?php echo $productos[0]['imagen4'] ?>" width="325" height="225">
           </a>
         </div>
         <?php
            }
          }
         ?>
       </div>
       
       <div class="texto"></div>

       <div class="lateral">
           
           <div class="uno">
                 <div class="nombre"><div class="nombreText">Modelo <?php if(isset($productos[0]['nombre'])) echo $productos[0]['nombre'] ?></div></div>
                 <div class="serie"><div class="serieText"><?php if(isset($productos[0]['codigo'])) echo $productos[0]['codigo'] ?></div></div>
                 <div class="descripcion"><div class="descripcionText"><?php if(isset($productos[0]['descripcion'])) echo $productos[0]['descripcion'] ?></div></div>
                 <div class="precio"><div class="precioText">$ <?php if(isset($productos[0]['precio'])) echo number_format($productos[0]['precio'],2,".",","); ?></div>
                 <label>Cantidad:
                 <select name= "Precio">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                 </select>
                 </label>
                 </div>
                 <div class="cantidad"></div>
           </div>

          <div class="paypal"></div>
          <div class="empaque"><div class="empaqueText">EL EMPAQUE PROTEGE EL PRODUCTO AL 100% Y<br>GARANTIZA LA LLEGADA DE SU MERCANCIA EN<br>PERFECTO ESTADO</div></div>
          <div class="ficha"><div class="fichaText">AGREGAR AL CARRITO</div></div>

        </div> <!- lateral->

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