<?php
//This check if the level of permission is correct to display the visual
if ($_SESSION['clientData']['clientLevel'] < 2) {
 header('location: /phpmotors/');
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Vehicle Management Page | PHP Motors</title>
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
      <div id="contentM">
        <?php
          // to display the messages
          include "../common/session_message.php";  
        ?>         
        <h1>Vehicle Management Page</h1>
        <h2>Add a New Classification or a Vehicle</h2> 
        <p><a href="/phpmotors/vehicles/index.php?action=add-classification">Add Classification Page Link</a></p>
        <p><a href="/phpmotors/vehicles/index.php?action=add-vehicle">Add Vehicle Page Link</a></p>
        <?php
          // to display the title based on a selection
          if (isset($classificationList)) { 
          echo '<h2>Vehicles By Classification</h2>'; 
          echo '<p>Choose a classification to see those vehicles</p>'; 
          echo $classificationList; 
          }
        ?>
        <!-- avoid JS message disrrupt the UI -->
        <noscript>
        <p><strong>JavaScript Must Be Enabled to Use this Page.</strong></p>
        </noscript>
        <table id="inventoryDisplay"></table>
      </div>
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
    <script src="../js/inventory.js"></script>
  </body>
</html>
<?php unset($_SESSION['message']); ?>