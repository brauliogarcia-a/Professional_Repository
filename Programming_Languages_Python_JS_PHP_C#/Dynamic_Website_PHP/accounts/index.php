<?php
// This is the file that the teacher provided. is the same as my index.php file 
// but with a switch that decide to show the login or registration

// get the DB connection file
  require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/library/connections.php';
// get the model for use as needed
  require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/model/main-model.php';
// get the functions file
  require_once '../library/functions.php';
// get the accounts model
  require_once '../model/accounts-model.php';

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
    case 'login-page':
      include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/login.php';
      break;
    case 'registration':
      include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/registration.php';
      break;
    case 'client-update': 
      include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/client-update.php';
      break;
    case 'admin-page':
      include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/admin.php';
      break;     
    case 'register':
        // Filter and store the data
          $clientFirstname = trim(filter_input(INPUT_POST, 'clientFirstname', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $clientLastname = trim(filter_input(INPUT_POST, 'clientLastname', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $clientEmail = trim(filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_EMAIL));
          $clientPassword = trim(filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $clientEmail = checkEmail($clientEmail);
          $checkPassword = checkPassword($clientPassword);
          
          // call the check email function from the accounts model
          $existingEmail = checkExistingEmail($clientEmail);

        // Check for existing email address in the table
          if($existingEmail){
           //changed message for session
           $_SESSION['message'] = '<p class="notice">That email address already exists. Do you want to login instead?</p>';
           include '../view/login.php';
           exit;
          }  
       
        // Check for missing data
        if(empty($clientFirstname) || empty($clientLastname) || empty($clientEmail) || empty($checkPassword)){
          //changed message for session
          $_SESSION['message'] = '<p>Please provide information for all empty form fields.</p>';
          include '../view/registration.php';
          exit;
        }
        
        //Hash checked password
        $hashedPassword = password_hash($clientPassword, PASSWORD_DEFAULT);

        // Send the data to the model
        $regOutcome = regClient($clientFirstname, $clientLastname, $clientEmail, $hashedPassword);
        
        // Check and report the result
        if($regOutcome === 1){
          setcookie ('firstname', $clientFirstname, strtotime('+1 year'), '/');
          $_SESSION['message'] = "Thanks for registering $clientFirstname. Please use your email and password to login.";
          //include '../view/login.php';
          header('Location: /phpmotors/accounts/?action=login-page');
          exit;
        } else {
          //changed message for session
          $_SESSION['message'] = "<p>Sorry $clientFirstname, but the registration failed. Please try again.</p>";
          include '../view/registration.php';
          exit;
        }
        break; 
        
      case 'login':
        $clientEmail = filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_EMAIL);
        $clientEmail = checkEmail($clientEmail);
        $clientPassword = filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $passwordCheck = checkPassword($clientPassword);
        
        // Run basic checks, return if errors
        if (empty($clientEmail) || empty($passwordCheck)) {
         //changed message for session
         $_SESSION['message'] = '<p class="notice">Please provide a valid email address and password.</p>';
         //include '../view/login.php';
         header('Location: /phpmotors/accounts/?action=login-page');
         exit;
        }
          
        // A valid password exists, proceed with the login process
        // Query the client data based on the email address
        $clientData = getClient($clientEmail);
        // Compare the password just submitted against
        // the hashed password for the matching client
        $hashCheck = password_verify($clientPassword, $clientData['clientPassword']);
        //Sup3rU$er
        // If the hashes don't match create an error
        // and return to the login view
        if(!$hashCheck) {
          //changed message for session
          $_SESSION['message'] = '<p class="notice">Please check your password and try again.</p>';
          include '../view/login.php';
          exit;
        }
        //set client level cookie
        $clientLevel = $clientData['clientLevel'];
        setcookie ('clientlevel', $clientLevel, strtotime('+1 year'), '/');
        // set loggedin coockie
        $clientLoggeding = TRUE;
        setcookie ('loggedin', $clientLoggeding, strtotime('+1 year'), '/');
        // A valid user exists, log them in
        $_SESSION['loggedin'] = TRUE;
        // Remove the password from the array
        // the array_pop function removes the last
        // element from an array
        array_pop($clientData);
        // Store the array into the session - session
        $_SESSION['clientData'] = $clientData;
        // Send them to the admin view
        include '../view/admin.php';
        exit;

      case 'logout':
        session_destroy();
        header('Location: /phpmotors/accounts/?action=login-page');
        exit;

      case 'getClientInfo': 
          /* * ********************************** 
          * Get clients by clientId 
          * Used for starting Update & Delete process 
          * ********************************** */ 
          // Get the clientId
          $clientId = filter_input(INPUT_GET, 'clientId', FILTER_SANITIZE_NUMBER_INT); 
          // Fetch the vehicles by clientId from the DB 
          $clientArray = getClientInfo($clientId); 
          // Convert the array to a JSON object and send it back 
          echo json_encode($clientArray); 
          break;

      case 'update-client':
          // Filter and store the data
          $clientFirstname = trim(filter_input(INPUT_POST, 'clientFirstname', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $clientLastname = trim(filter_input(INPUT_POST, 'clientLastname', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $clientEmail = trim(filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
          $clientEmail = checkEmail($clientEmail);
          $clientId = filter_input(INPUT_POST, 'clientId', FILTER_SANITIZE_NUMBER_INT);
        
          // Check for missing data
          if(empty($clientFirstname) || empty($clientLastname) || empty($clientEmail)){
            //changed message for session
            $_SESSION['message'] = '<p>Please complete all information for the updated item! Double check the client information.</p>';
            include '../view/client-update.php';
            exit;
          }
          
          // Send the data to the model
          $updateClient = updateClient($clientFirstname, $clientLastname, $clientEmail, $clientId);
        
          // Check and report the result
          if($updateClient){
            //changed message for session
            $_SESSION['message'] = "<p>Congratulations,$clientFirstname, your information was succesfully added.</p>";
            //get the new data from the DB
            $clientData = getClient($clientEmail);
            //Remove the password from the info
            array_pop($clientData);
            //Store the newest info into a session variable
            $_SESSION['clientData'] = $clientData;
            //Refresh the page completly to show the newest data
            header("Location: index.php?action=admin-page");
            exit;
          } else {
            //changed message for session
            $_SESSION['message'] = "<p>Error, The client information was not added.</p>";
            include '../view/client-update.php';
            exit;
          }
          break;   

      case 'update-password':
            // Filter and store the data
            $clientPassword = filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            $checkPassword = checkPassword($clientPassword);
            $clientId = filter_input(INPUT_POST, 'clientId', FILTER_SANITIZE_NUMBER_INT);
          
            // Check for missing data
            if(empty($checkPassword)){
              //changed message for session
              $_SESSION['message'] = '<p>Please complete all information for the updated item! Double check the client information.</p>';
              include '../view/client-update.php';
              exit;
            }
  
            //Hash checked password
            $hashedPassword = password_hash($clientPassword, PASSWORD_DEFAULT);
            
            // Send the data to the model
            $updatePassword = updatePassword($hashedPassword,$clientId);
          
            // Check and report the result
            if($updatePassword){
              //changed message for session
              $_SESSION['message'] = "<p>Congratulations, your password was succesfully added.</p>";
              header("Location: index.php?action=admin-page");
              exit;
            } else {
              //changed message for session
              $_SESSION['message'] = "<p>Error, The client information was not added.</p>";
              include '../view/client-update.php';
              exit;
            }
            break; 

    default:
        //include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/admin.php';  
        include '../view/admin.php';
        break;
  }
  ?>