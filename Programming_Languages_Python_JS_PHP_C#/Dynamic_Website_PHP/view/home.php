<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Home Page | PHP Motors</title>
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
      <!-- This is the banner section. includes the H1 of the page -->
      <h1 id="bannerh1">Welcome to PHP Motors!</h1>
        <div id="banner">
            <img src="/phpmotors/images/vehicles/1982-dmc-delorean.jpg" alt="delorean back to the future">
            <div id="text-block">
                <h2>DMC Delorean</h2>
                <p>3 Cup holders</p>
                <p>Superman doors</p>
                <p>Fuzzy dice</p>
                <button>Own Today</button>
            </div>
        </div>
      <!-- Main is the content of the page -->
      <main>
      <h2>Delorean Upgrades</h2>        
      <div id="content_section">
          <div id="item_flexbox_2">
          <h2>DMC Delorean Revives</h2>
            <ul>
                <li>"So fast its almost like traveling in time." (4/5)</li>
                <li>"Coolest ride on the road." (4/5)</li>
                <li>"I'm feeling Marty McFly" (5/5)</li>
                <li>"The most futuristic ride of our day" (4.5/5)</li>
                <li>"80's livin and I love it!" (5/5)</li>
            </ul>
          </div> <!-- end of item_flexbox_2 -->

          <div id="item_flexbox_1">
            <div id="item_wrapper">
                <div id="img_1" class="bluebox">
                    <img src="/phpmotors/images/upgrades/flux-cap.png" alt="the flux capacitor">
                    <p><a href="#">Flux Capacitor</a></p>
                </div>
                <div id="img_2" class="bluebox">
                    <img src="/phpmotors/images/upgrades/flame.jpg" alt="cartoon flame">
                    <p><a href="#">Flame Decals</a></p>
                </div>
                <div id="img_3" class="bluebox">
                    <img src="/phpmotors/images/upgrades/bumper_sticker.jpg" alt="sticker for car">
                    <p><a href="#">Bumper Stickers</a></p>
                </div>
                <div id="img_4" class="bluebox">
                    <img src="/phpmotors/images/upgrades/hub-cap.jpg" alt="hub caps for cars">
                    <p><a href="#">Hub Caps</a></p>
                </div>
            </div> <!-- end of item_wrapper -->
          </div> <!-- end of item_flexbox_1 -->

        </div> <!-- end of content_section -->
      </main> <!-- end of main-->
      <?php include $_SERVER['DOCUMENT_ROOT'] . "/phpmotors/common/footer.php" ?>
    </div> <!-- end of wrapper -->
  </body>
</html>