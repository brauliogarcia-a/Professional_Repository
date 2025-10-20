<?php
// This is the file that the teacher provided. is the same as my index.php file 
// but with a switch that decide to show the login or registration

// get the DB connection files
  require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/library/connections.php';
// get the model for use as needed
  require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/model/main-model.php';
// get the functions file
  require_once '../library/functions.php';
// get the accounts model
  require_once '../model/categories-model.php';
// get the accounts model
  require_once '../model/vehicle-model.php';

// Get the array of classifications
$classifications = getClassifications();

// Build a navigation bar using the $classifications array
$navList = navigation($classifications);

// the following code check if there is a value pair. we could send data through a form or a link.
// This switch works only for the default view
  $action = filter_input(INPUT_POST, 'action');
  if ($action === null) {
    $action = filter_input(INPUT_GET, 'action');
  }

// Check if the firstname cookie exists, get its value
if(isset($_COOKIE['firstname'])){
  $cookieFirstname = filter_input(INPUT_COOKIE, 'firstname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
 }


// the following code check if there is a value pair. we could send data through a form or a link.
// This switch works only for the login or registration pages
  switch ($action) {
    case 'add-classification':
      include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/add-classification.php';
      break;
    case 'add-vehicle-page':
      include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/add-vehicle.php';
      break;
    case 'vehicle-management':
      include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/vehicle-management.php';
      break;
    case 'add-cat':
        // Filter and store the data
          $classificationName = trim(filter_input(INPUT_POST, 'classificationName', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        
        // Check for missing data
        if(empty($classificationName)){
          //changed message for session
          $_SESSION['message'] = '<p>Please provide information for all empty form fields.</p>';
          include '../view/add-classification.php';
          exit;
        }
        
        // Send the data to the model
        $regOutcomeCat = regCat($classificationName);
        
        // Check and report the result
        if($regOutcomeCat === 1){
          //changed message for session
          $_SESSION['message'] = "<p>Thanks for submitting your category.</p>";
          header("Location: index.php?action=vehicle-management");
          exit;
        } else {
          //changed message for session
          $_SESSION['message'] = "<p>Sorry, but the registration failed. Please try again.</p>";
          include '../view/add-classification.php';
          exit;
        }
        break;    

    case 'add-vehicle':
        // Filter and store the data
          $invMake = trim(filter_input(INPUT_POST, 'invMake', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $invModel = trim(filter_input(INPUT_POST, 'invModel', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $invDescription = trim(filter_input(INPUT_POST, 'invDescription', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $invPrice = trim(filter_input(INPUT_POST, 'invPrice', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $invMiles = trim(filter_input(INPUT_POST, 'invMiles', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $invYear = trim(filter_input(INPUT_POST, 'invYear', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $invColor = trim(filter_input(INPUT_POST, 'invColor', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $classification = trim(filter_input(INPUT_POST, 'classificationId', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        
        // Check for missing data
        if(empty($invMake) || empty($invModel) || empty($invDescription) || empty($invPrice) || empty($invYear) || empty($invMiles) || empty($invColor) || empty($classification)){
          //changed message for session
          $_SESSION['message'] = '<p>Please provide information for all empty form fields.</p>';
          include '../view/add-vehicle.php';
          exit;
        }
        
        // Send the data to the model
        $regOutcomeCar = regVeh($invMake, $invModel, $invDescription, $invPrice, $invYear, $invMiles, $invColor, $classification);
        
        // Check and report the result
        if($regOutcomeCar === 1){
          //changed message for session
          $_SESSION['message'] = "<p>Thanks for registering.</p>";
          header("Location: index.php?action=vehicle-management");
          exit;
        } else {
          //changed message for session
          $_SESSION['message'] = "<p>Sorry, but the registration failed. Please try again.</p>";
          include '../view/add-vehicle.php';
          exit;
        }
        break;    
    
    case 'mod':
        //capture the second name value pair
        $invId = filter_input(INPUT_GET, 'invId', FILTER_VALIDATE_INT);
        $invInfo = getInvItemInfo($invId);
        if(($invInfo)>0){
          $_SESSION['message'] = 'Sorry, no vehicle information could be found.';
        }
        include '../view/vehicle-update.php';
        exit;
        break;
        
    case 'getInventoryItems': 
        /* * ********************************** 
        * Get vehicles by classificationId 
        * Used for starting Update & Delete process 
        * ********************************** */ 
        // Get the classificationId 
        $classificationId = filter_input(INPUT_GET, 'classificationId', FILTER_SANITIZE_NUMBER_INT); 
        // Fetch the vehicles by classificationId from the DB 
        $inventoryArray = getInventoryByClassification($classificationId); 
        // Convert the array to a JSON object and send it back 
        echo json_encode($inventoryArray); 
        break;

    case 'update-vehicle':
        // Filter and store the data
        $invMake = trim(filter_input(INPUT_POST, 'invMake', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $invModel = trim(filter_input(INPUT_POST, 'invModel', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $invDescription = trim(filter_input(INPUT_POST, 'invDescription', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $invImage = trim(filter_input(INPUT_POST, 'invImage', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $invThumbnail = trim(filter_input(INPUT_POST, 'invThumbnail', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $invPrice = trim(filter_input(INPUT_POST, 'invPrice', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $invYear = trim(filter_input(INPUT_POST, 'invYear', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $invMiles = trim(filter_input(INPUT_POST, 'invMiles', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $invColor = trim(filter_input(INPUT_POST, 'invColor', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $classification = trim(filter_input(INPUT_POST, 'classificationId', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $invId = filter_input(INPUT_POST, 'invId', FILTER_SANITIZE_NUMBER_INT);
      
        // Check for missing data
        if(empty($invMake) || empty($invModel) || empty($invDescription) || empty($invPrice) || empty($invYear) || empty($invMiles) || empty($invColor) || empty($classification)){
          //changed message for session
          $_SESSION['message'] = '<p>Please complete all information for the updated item! Double check the classification of the item.</p>';
          include '../view/vehicle-update.php';
          exit;
        }
      
        // Send the data to the model
        $updateResult = updateVehicle($invId, $invMake, $invModel, $invDescription, $invPrice, $invYear, $invMiles, $invColor, $classification);
      
        // Check and report the result
        if($updateResult){
          //changed message for session
          $_SESSION['message'] = "<p>Congratulations, the $invMake $invModel was succesfully added.</p>";
          header("Location: index.php?action=vehicle-management");
          exit;
        } else {
          //changed message for session
          $_SESSION['message'] = "<p>Error, The new vehicle was not added.</p>";
          include '../view/vehicle-update.php';
          exit;
        }
        break; 

    case 'del':
          $invId = filter_input(INPUT_GET, 'invId', FILTER_VALIDATE_INT);
          $invInfo = getInvItemInfo($invId);
          if($invInfo>0){
            $_SESSION['message'] = 'Sorry, no vehicle information could be found.';
          }
          include '../view/vehicle-delete.php';
          exit;
        break;  

    case 'deleteVehicle':
          $invMake = filter_input(INPUT_POST, 'invMake', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
          $invModel = filter_input(INPUT_POST, 'invModel', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
          $invId = filter_input(INPUT_POST, 'invId', FILTER_SANITIZE_NUMBER_INT);
          
          $deleteResult = deleteVehicle($invId);
          if ($deleteResult) {
            $_SESSION['message'] = "<p class='notice'>Congratulations the, $invMake $invModel was	successfully deleted.</p>";
            $_SESSION['message'] = $message;
            header('location: /phpmotors/vehicles/');
            exit;
          } else {
            $_SESSION['message'] = "<p class='notice'>Error: $invMake $invModel was not
          deleted.</p>";
            $_SESSION['message'] = $message;
            header('location: /phpmotors/vehicles/');
            exit;
          }
        break;  

    case 'classification':
          //Get the value of the second parameter in the URL 
          $classificationName = filter_input(INPUT_GET, 'classificationName', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
          //create a variable to store the array of vehicles we hope will be returned from the vehicles model
          $vehicles = getVehiclesByClassification($classificationName);
          if(!count($vehicles)){
            $_SESSION['message'] = "<p class='notice'>Sorry, no $classificationName could be found.</p>";
          } else {
            $vehicleDisplay = buildVehiclesDisplay($vehicles);
          }
          include '../view/classification.php';
        break;
    
    case 'vehicle-detail':
          $invId = filter_input(INPUT_GET, 'invId', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
          $invVehicle = getVehicleInventory($invId);
          $vehiclesThumb = getVehicleThumb($invId);
          if(!count($invVehicle)){
            $_SESSION['message'] = "<p class='notice'>Sorry, no $invId could be found.</p>";
          } else {
            $vehicleDetailsDisplay = buildVehicleDetails($invVehicle);
            $vehicleDetailsThumb = buildThumbs($vehiclesThumb);
          }
          include '../view/vehicle-detail.php';
          break;

    default:

        $classificationList = buildClassificationList($classifications);

        include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/vehicle-management.php';
        break;
  }
  ?>