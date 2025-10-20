<?php 
  //This code help to display the drop down menu of categories. is just a concatenation of info from the DB into a single input.  
  $classInput = '<select name="classificationId">';
  foreach ($classifications as $class){
      $classInput .= "<option value='$class[classificationId]'";
      if(isset($classification)){
          if($class['classificationId'] == $classification){
                $classInput .= ' selected ';
              }
          } elseif(isset($invInfo['classificationId'])){
            if($class['classificationId'] === $invInfo['classificationId']){
              $classInput .= ' selected ';
             }
          }
      $classInput .= ">$class[classificationName]</option>";
  }
$classInput .= '</select>';

//This check if the level of permission is correct to display the visual
if ($_SESSION['loggedin'] = 0) {
  header('location: /phpmotors/');
 }
?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>
      <?php if(isset($invInfo['invMake']) && isset($invInfo['invModel'])){ 
	         echo "Modify $invInfo[invMake] $invInfo[invModel]";
          } 
	         elseif(isset($invMake) && isset($invModel)){ 
		        echo "Modify $invMake $invModel"; }?> | PHP Motors</title>

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
        <?php if(isset($invInfo['invMake']) && isset($invInfo['invModel'])){ 
                 echo "Modify $invInfo[invMake] $invInfo[invModel]";} 
              elseif(isset($invMake) && isset($invModel)) { 
                 echo "Modify$invMake $invModel"; }?>
        </h1>
        <?php 
          // to display the messages
          include "../common/session_message.php";
        ?> 
        <form method="post" action="/phpmotors/vehicles/index.php">
          <!-- the first if php code in the inputs make the values sticky. the elseif show the available info from the DB -->
          <label for="classificationId">Classification<br><br>
            <?php echo $classInput; ?>
          </label><br><br> 
          <label for="make">Make</label><br>
            <input type="text" id="make" name="invMake" <?php if(isset($invMake)){echo "value='$invMake'";} elseif(isset($invInfo['invMake'])) {echo "value='$invInfo[invMake]'"; }?> required><br><br>
          <label for="model">Model</label><br>
            <input type="text" id="model" name="invModel" <?php if(isset($invModel)){echo "value='$invModel'";} elseif(isset($invInfo['invModel'])) {echo "value='$invInfo[invModel]'"; }?> required><br><br>
          <label for="description">Description</label><br>
            <textarea id="description" name="invDescription" rows="4" cols="39" required><?php if(isset($invDescription)){echo $invDescription;} elseif(isset($invInfo['invDescription'])) {echo $invInfo['invDescription']; }?></textarea><br><br>
          <label for="price">Price</label><br>
            <input type="number" id="price" name="invPrice" <?php if(isset($invPrice)){echo "value='$invPrice'";} elseif(isset($invInfo['invPrice'])) {echo "value='$invInfo[invPrice]'"; }?> required><br><br>  
          <label for="year">Year</label><br>
            <input type="text" id="year" name="invYear" <?php if(isset($invYear)){echo "value='$invYear'";} elseif(isset($invInfo['invYear'])) {echo "value='$invInfo[invYear]'"; }?> required><br><br>           
          <label for="miles">Miles</label><br>
            <input type="number" id="stock" name="invMiles" <?php if(isset($invMiles)){echo "value='$invMiles'";} elseif(isset($invInfo['invMiles'])) {echo "value='$invInfo[invMiles]'"; }?> required><br><br>  
          <label for="color">Color</label><br>
          <input type="text" id="color" name="invColor" <?php if(isset($invColor)){echo "value='$invColor'";} elseif(isset($invInfo['invColor'])) {echo "value='$invInfo[invColor]'"; }?> required><br><br>  
          
          <input type="submit" name="submit" id="regbtn" value="Update Vehicle">
          <!-- First hidden input - Add the action name - value pair points to the case in the index controller file -->
          <input type="hidden" name="action" value="update-vehicle">
          <!-- This second hidden inpit -->
          <input type="hidden" name="invId" value="<?php if(isset($invInfo['invId'])){ echo $invInfo['invId'];} elseif(isset($invId)){ echo $invId; }?>">
        </form>         
      </div>
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
  </body>
</html>