<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Model <?php  
      $invModel = filter_input(INPUT_GET, 'invModel', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
      echo $invModel?> | PHP Motors, Inc.</title>
    <!-- device-width is the width of the screen in CSS pixels -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- screen is used for computer screens, tablets, smart-phones etc. -->
    <link href="/phpmotors/css/style.css" type="text/css" rel="stylesheet" media="screen">
    <!-- import fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="wrapper">
      <!-- header includes logo and my account link -->
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/header.php" ?>
      <!-- nav include the mega menu-->
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/nav.php" ?>
      <div id="contentDetails">
      <?php 
          // to display the messages
          include "../common/session_message.php";
      ?> 
      <?php if(isset($vehicleDetailsThumb)){ echo $vehicleDetailsThumb; }?>
      <?php if(isset($vehicleDetailsDisplay)){ echo $vehicleDetailsDisplay; }?>
      </div> <!-- end of content wrapper -->
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
      </div> <!-- end of content contentDetails -->
  </body>
</html>