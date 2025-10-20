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
    <title>Client Update Page | PHP Motors</title>
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
        <h1>Manage Account</h1>
        <h2>Update Account</h2>
        <?php 
          // to display the messages
          include "../common/session_message.php";
          //call the variables to populate the fields
          $clientFirstname = $_SESSION['clientData']['clientFirstname'];
          $clientLastname = $_SESSION['clientData']['clientLastname'];
          $clientEmail = $_SESSION['clientData']['clientEmail'];
          $clientId = $_SESSION['clientData']['clientId'];
         ?>
        <form method="post" action="/phpmotors/accounts/index.php">
          <!-- the first if php code in the inputs make the values sticky. the elseif show the available info from the DB -->
          <label for="clientFirstname">First Name</label><br>
            <input type="text" id="clientFirstName" name="clientFirstname" <?php if(isset($clientFirstname)){echo "value='$clientFirstname'";} ?> required><br><br>
          <label for="clientLastname">Last Name</label><br>
            <input type="text" id="clientLastname" name="clientLastname" <?php if(isset($clientLastname)){echo "value='$clientLastname'";} ?> required><br><br>
          <label for="clientEmail">Email Address:</label><br>           
            <input type="email" id="clientEmail" name="clientEmail" <?php if(isset($clientEmail)){echo "value='$clientEmail'";} ?> required><br><br>   
          <!-- Submit button and inputs. Add the action name - value pair and hiddne inputs-->          
          <input type="submit" name="submit" id="regbtn" value="Update Info">  
          <input type="hidden" name="action" value="update-client">
          <input type="hidden" name="clientId"<?php if(isset($clientId)){ echo "value='$clientId'";}?>>
        </form> 

        <form method="post" action="/phpmotors/accounts/index.php">
          <h3>Update Password</h3>
          <span>Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character</span><br><br>                     
          <span>Your original password will be changed.</span><br><br>
          <label for="clientPassword">Password:</label><br> 
          <input type="password" id="clientPassword" name="clientPassword" pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"><br><br>
          <!-- Submit button and inputs. Add the action name - value pair and hiddne inputs-->
          <input type="submit" name="submit" id="regbtn" value="Update Password">
          <input type="hidden" name="action" value="update-password">
          <input type="hidden" name="clientId"<?php if(isset($clientId)){ echo  "value='$clientId'";}?>>
        </form>         
      </div>
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
  </body>
</html>