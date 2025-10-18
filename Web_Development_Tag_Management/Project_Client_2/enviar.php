                                <?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$como = $_POST['como'];
$tipo = $_POST['tipo'];

$header = 'From: ' . $correo . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Hola me llamo " . $nombre . "
y mi telefono es " . $telefono . " \r\n";
$mensaje .= "tambien les dejo mi correo: " . $correo . " \r\n";
$mensaje .= "el tipo de evento que deseo es: " . $tipo . " \r\n";
$mensaje .= "y me contacte con ustedes por: " . $como . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'info@acasaeventosybanquetes.com';
$asunto = 'Prospecto enviado desde la pagina web';
mail($para, $asunto, utf8_decode($mensaje), $header);


echo 'Mensaje enviado correctamente, Nos pondremos en contacto contigo en un lapso de 10 minutos, Gracias.';
?>
                            