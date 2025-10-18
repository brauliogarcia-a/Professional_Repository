<?php /*
if($_SESSION['clientData']['clientLevel'] > 2){
 header('location: /phpmotors/');
 exit;
} */
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title><?php if(isset($invInfo['invMake'])){echo "Delete $invInfo[invMake] $invInfo[invModel]";} ?> | PHP Motors</title>
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
        <h1>
        <?php if(isset($invInfo['invMake'])){echo "Delete $invInfo[invMake] $invInfo[invModel]";} ?>
        </h1>
        <h3>Confirm Vehicle Deletion. The delete is permanent.</h3>
        <?php 
          // to display the messages
          include "../common/session_message.php";
        ?> 
        <form method="post" action="/phpmotors/vehicles/index.php">
        <fieldset>
          <label for="invMake">Vehicle Make</label><br>
            <input type="text" readonly name="invMake" id="invMake" <?php if(isset($invInfo['invMake'])) {echo "value='$invInfo[invMake]'"; }?>><br><br>
          <label for="invModel">Vehicle Model</label><br>
            <input type="text" readonly name="invModel" id="invModel" <?php if(isset($invInfo['invModel'])) {echo "value='$invInfo[invModel]'"; }?>><br><br>
          <label for="invDescription">Vehicle Description</label><br>
            <textarea name="invDescription" readonly id="invDescription" rows="4" cols="38"><?php if(isset($invInfo['invDescription'])) {echo $invInfo['invDescription']; }?></textarea><br><br>
          
          <input type="submit" name="submit" id="regbtn" value="Delete Vehicle">
          <!-- Add the action name - value pair -->
          <input type="hidden" name="action" value="deleteVehicle">
          <input type="hidden" name="invId" value="<?php if(isset($invInfo['invId'])){ echo $invInfo['invId'];} elseif(isset($invId)){ echo $invId; }?>">
        </form>         
      </div>
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
  </body>
</html>