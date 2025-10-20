<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Register Page | PHP Motors</title>
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
        <h1>Register</h1>
        <?php 
          // to display the messages
          include "../common/session_message.php";
        ?> 
        <form method="post" action="/phpmotors/accounts/index.php">
        <label for="fname">First name:</label><br>
          <input type="text" id="fname" name="clientFirstname" <?php if(isset($clientFirstname)){echo "value='$clientFirstname'";} ?> required><br><br>
        <label for="lname">Last name:</label><br>
          <input type="text" id="lname" name="clientLastname" <?php if(isset($clientLastname)){echo "value='$clientLastname'";} ?> required><br><br>
        <label for="email">Email Address:</label><br>
          <input type="email" id="email" name="clientEmail" <?php if(isset($clientEmail)){echo "value='$clientEmail'";} ?> required><br><br>
        <label for="password">Password:</label><br>
          <span>Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character</span><br><br>
          <input type="password" id="password" name="clientPassword" required pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"><br><br>

          <input type="submit" name="submit" id="regbtn" value="Register">
          <!-- Add the action name - value pair -->
          <input type="hidden" name="action" value="register">
        </form>         
      </div>
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
  </body>
</html>