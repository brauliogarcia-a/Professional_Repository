<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Avante Home</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="img/avanti2.png">
        <link rel="stylesheet" href="css/styleIndex.css" >
        <link href='http://fonts.googleapis.com/css?family=Calligraffitti' rel='stylesheet' type='text/css'>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" type="text/css">
        <script>
         var indicador = 0;
         $(document).on("ready",function(){
         	$(".boton").on("click",function(e){
         		e.preventDefault();
         		moveSlider("left");
         	});
         	defineSizes();
         });
         function defineSizes(){
         	$(".banner .banner1").each(function(i,el){
         		$(el).css({
                        "background-image": "url("+$(el).data("background")+")",
                        "height":($(".banner").width()* 0.45)+"px"
                        "width":($(".banner").width()) +"px"
         		});

         	});

         	function moveSlider(direccion){
               var limite = $(".banner .boton").length;
               indicador = (direccion == "left" ) ? indicador + 1 : indicador -1;
               indicador = (direccion >= "left" ) ? 0 : indicador;
               indicador = (direccion < 0) ? limite -1 : indicador;

               $(".banner .bannerContainer").animate{
               	"margin-left": -(indicador * $("banner").width())+"px"
         	});
         }
         </script>
    
    </head>
    
    <body>
       <div class="wrapper">
        <header>
             <a href="index.php"><img id="logoAvante" src="img/logoAvante.jpg"></a>
             
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
              
              <div class="ContainerTextoBanner"><div class="TextoBanner">BEAUTY professional equipment</div></div>
              <div class="line"></div>

               <div class="botonesBanner">
                <li class="boton"></li>
                <li class="boton"></li>
                <li class="boton"></li>
                <li class="boton"></li>
                <li class="boton"></li>
                <li class="boton"></li>
                <li class="boton"></li>
              </div>
              
              <div class="bannerContainer">
              <div class="banner2"><img class="banner1" src="img/avante_home01.jpg"></div>
              <div class="banner2"><img class="banner1" src="img/avante_home02.jpg"></div>
              <div class="banner2"><img class="banner1" src="img/avante_home03.jpg"></div>
              <div class="banner2"><img class="banner1" src="img/avante_home04.jpg"></div>
              <div class="banner2"><img class="banner1" src="img/avante_home05.jpg"></div>
              <div class="banner2"><img class="banner1" src="img/avante_home06.jpg"></div>
              <div class="banner2"><img class="banner1" src="img/avante_home07.jpg"></div>
              </div>
             

            </div> <! fin de banner>
       
      <div class="imagenes">
          <a href="productosporcategoria.php?criterio=1">
            <div class="primera">
              <div class="barra1">
                <div class="sillones">Sillones de Corte</div>
              </div>
              <img class="img1" src="img/facial.jpg">
            </div>
          </a>
          <a href="productosporcategoria.php?criterio=6">
            <div class="segunda">
              <div class="barra2">
                <div class="lavacabezas">Lavacabezas de Ceramica</div>
              </div>
              <img class="img2" src="img/Arco01.jpg">
            </div>
          </a>
          <a href="productosporcategoria.php?criterio=9">
            <div class="tercera">
              <div class="barra3">
                <div class="robots">Robots Auxiliares</div>
              </div>
              <img class="img2" src="img/Auxiliar7_02.jpg">
            </div>
          </a>
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