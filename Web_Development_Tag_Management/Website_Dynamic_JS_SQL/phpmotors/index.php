<?php
//THE PHP INDEX FILE IS THE CONTROLLER

// get the DB connection file
require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/library/connections.php';
// get the model for use as needed
require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/model/main-model.php';
// get the functions file
require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/library/functions.php';

// Get the array of classifications
$classifications = getClassifications();

// Build a navigation bar using the $classifications array
$navList = navigation($classifications);

// the following code check if there is a value pair. we could send data through a form or a link.
// This switch works only for the default view
$action = filter_input(INPUT_POST, 'action');
 if ($action == NULL){
  $action = filter_input(INPUT_GET, 'action');
 }

// Check if the firstname cookie exists, get its value
if(isset($_COOKIE['firstname'])){
  $cookieFirstname = filter_input(INPUT_COOKIE, 'firstname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
 }

 // switch examines the value of the action variable
 switch ($action){
    default:
      include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/home.php';
      break;
}

?>