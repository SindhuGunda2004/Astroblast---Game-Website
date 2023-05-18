<?php
// including common php page for including common code for every page
include('common.php');

// calling this function to print the page header
outputHeader("Astroblast -- Home");
// calling this function to print the page navigation 
outputBannerNavigation("Home");

// printing the content of this home page 
echo '
<script>
    window.onload = checkLogin;//Check to see if user is logged in already

    function checkLogin(){
        if(sessionStorage.loggedInUsrEmail !== undefined){
            //Extract details of logged in user
            usrRegister = JSON.parse(localStorage[sessionStorage.loggedInUsrEmail]);
            
            //Greeting the user with their name 
            document.getElementById("greet").innerHTML = usrRegister.firstName + " logged in.";
            // document.getElementsByClassName("logreglinks").
        }
    }
</script>
<div>
    <div class="asteroidtwo">
        <img src="../Images/asteroid.png" height="5%" width="30%">
    </div>
    <!--Game name-->
    <div>
        <h1 class="gamename">ASTRO</h1>
        <h1 class="gamenametwo">BLAST</h1>
    </div>
    <!--Link to play-->
    <div>
        <a class="playlink" href="../PHP/game.php">Click to play</a>
    </div>
    <br><br>
    <div class="asteroid">
        <img src="../Images/asteroid.png" height="5%" width="30%">
    </div>
</div> 
<br><br><br><br>';
?>
     
<?php
outputFooter();
?>