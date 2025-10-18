                                <?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];

$header = 'From: ' . $correo . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",
su telefono es " . $telefono . " \r\n";
$mensaje .= "Su e-mail es: " . $correo . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'ventas@mueblesparastetica.com';
$asunto = 'Nuevo Contacto de la pagina web';
mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'Mensaje enviado correctamente';
?>
                            