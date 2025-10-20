<?php 
  //This code help to display the drop down menu of categories. is just a concatenation of info from the DB into a single input.
  $classInput = '<select name="classificationId">';
  foreach ($classifications as $class){
      $classInput .= "<option value='$class[classificationId]'";
      if(isset($classification)){
          if($class['classificationId'] == $classification){
                $classInput .= ' selected ';
              }
          }
      $classInput .= ">$class[classificationName]</option>";
  }
$classInput .= '</select>';
?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Add Vehicle Page | PHP Motors</title>
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
        <h1>Add Vehicle</h1>
        <?php 
          // to display the messages
          include "../common/session_message.php";
        ?> 
        <form method="post" action="/phpmotors/vehicles/index.php">
        <label for="classificationId">Classification<br><br>
          <?php echo $classInput; ?>
        </label><br><br> 
        <label for="make">Make</label><br>
          <input type="text" id="make" name="invMake" <?php if(isset($invMake)){echo "value='$invMake'";} ?> required><br><br>
        <label for="model">Model</label><br>
          <input type="text" id="model" name="invModel" <?php if(isset($invModel)){echo "value='$invModel'";} ?> required><br><br>
        <label for="description">Description</label><br>
          <textarea id="description" name="invDescription" rows="4" cols="39" <?php if(isset($invDescription)){echo "value='$invDescription'";} ?> required></textarea><br><br>
        <label for="price">Price</label><br>
          <input type="number" id="price" name="invPrice" <?php if(isset($invPrice)){echo "value='$invPrice'";} ?> required><br><br>  
        <label for="stock">Year</label><br>
          <input type="number" id="year" name="invYear" <?php if(isset($invYear)){echo "value='$invYear'";} ?> required><br><br>  
        <label for="stock">Miles</label><br>
          <input type="number" id="stock" name="invMiles" <?php if(isset($invMiles)){echo "value='$invMiles'";} ?> required><br><br>  
        <label for="color">Color</label><br>
          <input type="text" id="color" name="invColor" <?php if(isset($invColor)){echo "value='$invColor'";} ?> required><br><br>  
          
          <input type="submit" name="submit" id="regbtn" value="Add Vehicle">
          <!-- Add the action name - value pair -->
          <input type="hidden" name="action" value="add-vehicle">
        </form>         
      </div>
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
  </body>
</html>