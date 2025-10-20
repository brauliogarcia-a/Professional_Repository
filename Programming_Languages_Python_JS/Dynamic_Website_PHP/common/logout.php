<?php 
session_start();
session_destroy();
header('Location: /phpmotors/accounts/?action=logout');
exit;
?>