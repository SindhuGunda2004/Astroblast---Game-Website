<?php
// this function prints the header part of the page like title styles and stylesheet link 
function outputHeader ($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo "<style>@import url('https://fonts.cdnfonts.com/css/spacetype');</style>";
    echo '<title>' . $title . '</title>';
    echo '<link href="../CSS/stylessheet.css" type="text/css" rel="stylesheet">';
    echo '</head>';
    echo '<body>';
}

// this function prints the navigation tabs on every page 
function outputBannerNavigation($pageName){
    echo '<header>';
    echo '<div class="logo" >
    <img src="../Images/logo.png" height="10%" width="10%">
    </div>';    
    echo '<nav><ul>';

    // array with the tab names 
    $linkNames = array("Home", "Game", "Rules", "Leaderboard", "Login", "Register");
    // array with the php files 
    $linkAddress = array("index.php", "game.php", "rules.php", "leaderboard.php", "login.php", "register.php");

    // for loop to link tab name with its respective php file 
    for ($x = 0; $x < count($linkNames)-2; $x++){
        echo ' <li> <a ';
        if($linkNames[$x] == $pageName){
            echo 'class="selected" ';
        }
        echo 'href="' . $linkAddress[$x] . '">' . $linkNames[$x] . '</a></li>';
    }

    // login and register links 
    echo '<li><a class="logreglinks" href="login.php">Login</a></li>
    <li><a class="logreglinkstwo" href="register.php">Register</a></li>';
    echo '</ul>';
    echo '</nav>';
    echo '</header>';
    // Greeting the user
    echo '<div>
    <p class="greet" id="greet">Welcome Guest!!</p>
    </div> ';
    echo '<br><br><br><br>';
}

// this function prints footer of every page 
function outputFooter(){
    // this is page footer that contains copyright and email for suggestions and feedback
    echo '<footer >
    <p>
        EMAIL US AT <u style="font-family: arial ;">astroblast@gmail.com</u>  FOR MORE SUGGESTIONS AND FEEDBACK <br>
        COPYRIGHT  ©  ASTROBLAST 2022
    </p>
    </footer>';
    echo '</body>';
    echo '</html>';
}
?>