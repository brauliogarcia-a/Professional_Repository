<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Avante Contacto</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="img/avanti2.png">
        <link rel="stylesheet" href="css/styleContacto.css">
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
              
            <div class="ContainerTextoBanner"><div class="TextoBanner">Contacto</div></div>
            <div class="line"></div>
            <img id="banner1" src="img/bannerEmpresa.png"/> 
        </div> <! fin de banner>
          
           <div class="linkAzul">
              <li><a href="index.php">Inicio</a></li>
              <li><a href="contacto.php">Contacto</a></li>
           </div>
      
          <div>
            <div class="acerca"><div class="acercaTexto"><br>Oficinas Corporativas</div></div>
            <div class="lateral">
              <br>Hidalgo # 712<br>
              Col. Centro, cp. 44000<br>
              Guadalajara, Jalisco, México<br>
              Teléfonos<br><br>
              01 (33) 1202-9025<br>
              01 (33) 1955-4487<br>
              01 (33) 1955-8889<br><br>
              Correo electrónico:<br>
              info@avantemueblesdebelleza.com<br><br>
              Nuestro horario de atención:<br>
              Lunes a Viernes de 10 - 7 pm<br>
              Sábados de 10 - 2 pm<br><br><br><br><br><br>
              <span>Forma de Contacto</span><br><br><br>
              Su opinión es muy importante<br>
              para nosotros, si desea información<br>
              por favor llene el formulario de<br>
              contacto.

            </div>
            <div class="mapa"><img class="mapaI" src="img/mapa.jpg"></div>
            <div class="formulario">
              <form name="contacto" action="enviar.php" method="POST">
                <div class="nombreD"><label>Nombre<br><input class="nombre" name="nombre" type="text"></label></div>
                <div class="correoD"><label>Correo<br><input class="correo" name="correo" type="email"></label></div>
                <div class="telefonoD"><label>Telefono<br><input class="telefono" name="telefono" type="tel"></label></div>
                <div class="mensajeD"><label>Mensaje<br><textarea class="mensaje" name="mensaje"></textarea></label></div>
                <button class="enviar">Enviar</button> 
              </form>
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