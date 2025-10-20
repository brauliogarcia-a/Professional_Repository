<header>
    <div id="part_1">  
            <img src="/phpmotors/images/site/logo.png" alt="the php motor logo">
            
            <?php 
                if(isset($_SESSION['loggedin'])){
                  $clientFirstname = $_SESSION['clientData']['clientFirstname'];
                  echo "<div id=account2><a href='/phpmotors/accounts/index.php?action=admin-page'>$clientFirstname</a> | <a href='/phpmotors/accounts/index.php?action=logout'>Logout</a></div>";
                  echo '
                  <div class="search2">
                    <form method="post" action="/phpmotors/search/">
                      <label>
                      <input type="text" placeholder="Search.." name="keyword">
                      <button type="submit" name="submit" value="Search">&#x1F50D;</button>
                      <input type="hidden" name="action" value="search">
                    </form>
                  </div> <!-- end of search-->
                  ';
               }else{
                 echo "<div id=account><p><a href='/phpmotors/accounts/index.php?action=login-page'>My Account</a></p></div>";   
                 echo '
                 <div class="search">
                   <form method="post" action="/phpmotors/search/">
                     <label>  
                     <input type="text" placeholder="Search.." name="keyword">
                     <button type="submit" name="submit" value="Search">&#x1F50D;</button>
                     <input type="hidden" name="action" value="search">
                   </form>
                 </div> <!-- end of search-->
                 ';
               }
            ?>       
    </div> <!-- end of part1-->
</header>