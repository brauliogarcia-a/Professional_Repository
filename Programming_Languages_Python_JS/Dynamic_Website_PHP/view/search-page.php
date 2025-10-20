<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Search Page | PHP Motors</title>
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
        <h1>Search Page</h1>
      <div id="search-bar">
          <form method="post" action="/phpmotors/search/">
             <label>   
             <input type="text" placeholder="Search.." name="keyword">
             <button type="submit" name="submit" value="Search">&#x1F50D;</button>
             <input type="hidden" name="action" value="search">
          </form>
      </div>
      <?php 
          // to display the messages
          include "../common/session_message.php";
      ?> 
      <div id="results-display">
        <?php if(isset($total_results_display)){ echo $total_results_display; }?>
        <?php if(isset($results_display)){ echo $results_display; }?>
        <?php if(isset($display_pagination)){ echo $display_pagination; }?>
      </div>
      </div> <!-- end of content wrapper -->
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
  </body>
</html>