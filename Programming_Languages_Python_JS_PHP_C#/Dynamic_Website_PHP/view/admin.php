<?php
//This check if the level of permission is correct to display the visual
if ($_SESSION['loggedin'] = 0) {
 header('location: /phpmotors/');
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Admin Page | PHP Motors</title>
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
      <div id="contentL">
        <h1>My Account Page</h1>
        <?php
          //call the variables to populate the fields
          $clientFirstname = $_SESSION['clientData']['clientFirstname'];
          $clientLastname = $_SESSION['clientData']['clientLastname'];
          $clientEmail = $_SESSION['clientData']['clientEmail'];
          $clientId = $_SESSION['clientData']['clientId']; 
        ?>
        <?php 
          // to display the messages
          include "../common/session_message.php";
        ?> 
        <h2>Welcome <?php echo $clientFirstname . " " . $clientLastname ?></h2>
        <p>Your first name is: <?php echo $clientFirstname?></p>
        <p>Your last name is: <?php echo $clientLastname?></p>
        <p>Your email is: <?php echo $clientEmail?></p>
        <h3>Account Management</h3>
        <p>Use this link to update account information.</p>
        <div id="link_level"><a href="/phpmotors/accounts/index.php?action=client-update">Update Account Information</a></div>
        <?php 
          $level = $_SESSION['clientData']['clientLevel'];
          if ( $level >= 2){
            echo "<h3>Inventory Management</h3>";
            echo "<p>Use this link to manage the inventory. add or delete data.</p>";
            echo "<div id=link_level><a href=/phpmotors/vehicles/index.php>Vehicle Management</a></div><br>";
            echo "<div id=link_level><a href=/phpmotors/uploads/index.php>Image Management</a></div>";
          }
        ?>
      </div>
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
  </body>
</html>