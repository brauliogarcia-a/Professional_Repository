<?php
//This index controller is for the search

// get the DB connection files
  require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/library/connections.php';
// get the model for use as needed
  require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/model/main-model.php';
// get the functions file
  require_once '../library/functions.php';
// get the categories model
  require_once '../model/categories-model.php';
// get the vehicle model
  require_once '../model/vehicle-model.php';
// get the search model
  require_once '../model/search-model.php';

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

switch($action){
  case 'search':
    $keyword = trim(filter_input(INPUT_POST, 'keyword', FILTER_SANITIZE_STRING)) ?: trim(filter_input(INPUT_GET, 'keyword', FILTER_SANITIZE_STRING));
    // Check for missing data
    if(empty($keyword)){
      //changed message for session
      $_SESSION['message'] = '<p>No keyword Was Submitted.</p>';
      include '../view/search-page.php';
      exit;
    }  

    //page is always pulled from the pagination links, so no need to look at the INPUT_POST
    $page = filter_input(INPUT_GET, 'page', FILTER_SANITIZE_NUMBER_INT);
    if(empty($page)) {
     $page = 1;
    }

    //Query the database to populate the list of results based on the used keyword
    $keywordSearched = getSearchData($keyword);
    //get the total number of results
    $total_results = getTotalResults($keyword);

    if($total_results < 1){
      $_SESSION['message'] = "<p class='notice'>Sorry, the keyword could not be found.</p>";
    }elseif($total_results > 10){
      //Build the html for the number of total results
      $total_results_display = buildTotalResults($total_results);
      //THE PARAMETER HER SHOULD BE DIFFERENT
      //Query the database to populate the list of results based on the pagination
      $keywordSearched2 = getSearchData2($total_results,$keyword,$page);
      $results_display = buildResultsDisplay($keywordSearched2);
      //Build the html for the pagination
      $display_pagination = buildPagination($total_results,$keyword);
    }else{
      //Build the html for the number of total results
      $total_results_display = buildTotalResults($total_results);
      //Build the html for the list of results
      $results_display = buildResultsDisplay($keywordSearched);
    }
    include '../view/search-page.php';
    break;
  default:
    include '../view/search-page.php';
  break;
}

 ?>
