<?php
// including common php page for including common code for every page
include('common.php');

// calling this function to print the page header
outputHeader("Astroblast -- Game");
// calling this function to print the page navigation 
outputBannerNavigation("Game");

// printing the content of this game page 
echo '
<!--Page Content-->
        <div class="gamehead">
            <h2>ASTROBLAST</h2>
        </div>
        <!--Its the button to restart the game-->
        <div>
            <button class="restartbtn" type="reset" onclick="game()">START</button>
            <h5 id="score" >Score :</h5>
        </div>
        <br><br>
        <div id="board">
            <div id="ship"></div>
        </div>
        <script src="../JS/game.js">    
        </script>
        <br><br>

        <!--JS for checking the if the user is logged in or not if not the user will play as guest -->
        <script>
            window.onload = checkLogin;//Check to see if user is logged in already

            let usrRegister;

            function checkLogin(){
                if(sessionStorage.loggedInUsrName !== undefined){
                    //Extract details of logged in user
                    usrRegister = JSON.parse(localStorage[sessionStorage.loggedInUsrName]);
                    
                    //Greeting the user with their name 
                    document.getElementById("greet").textContent = "WELCOME " + usrRegister.firstName;
                    
                }
                else{
                    // document.getElementById("greet").innerHTML = "WELCOME GUEST";   
                    document.getElementById("greet").innerHTML = "WELCOME GUEST!!";   
                }
            }

        </script>';
?>

<?php
// printing the footer
outputFooter();
?>