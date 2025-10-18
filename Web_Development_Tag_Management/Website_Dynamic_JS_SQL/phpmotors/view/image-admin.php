<?php
if (isset($_SESSION['message'])) {
  $message = $_SESSION['message'];
 }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Image Admin | PHP Motors</title>
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
        <h1>Image Management Here</h1>
        <p>Choose one of the options below:</p>
        <h2>Add New Vehicle Image</h2>
        <?php 
          // to display the messages
          include "../common/session_message.php";
        ?> 
        <!-- The form to update the image -->
        <form action="/phpmotors/uploads/" method="post" enctype="multipart/form-data">
        <label for="invItem">Vehicle</label><br><br>
          <?php echo $prodSelect; ?>
          <fieldset id="formUpload"><br><br>
            <label>Is this the main image for the vehicle?</label><br>
            <label for="priYes" class="pImage">Yes</label><br>
            <input type="radio" name="imgPrimary" id="priYes" class="pImage" value="1"><br>
            <label for="priNo" class="pImage">No</label><br>
            <input type="radio" name="imgPrimary" id="priNo" class="pImage" checked value="0">
          </fieldset><br><br>
        <label>Upload Image:</label>
        <input type="file" name="file1"><br><br>
        <input type="submit" class="regbtn" value="Upload"><br><br>
        <input type="hidden" name="action" value="upload">
        </form>
        <hr>
        <h2>Existing Images</h2>
        <p class="notice">If deleting an image, delete the thumbnail too and vice versa.</p>
        <?php
        if (isset($imageDisplay)) {
          echo $imageDisplay;
        } ?>
      </div>
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
  </body>
  <?php unset($_SESSION['message']); ?>
</html>