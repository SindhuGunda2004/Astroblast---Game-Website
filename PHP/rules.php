<?php
// including common php page for including common code for every page
include('common.php');

// calling this function to print the page header
outputHeader("Astroblast -- Rules");
// calling this function to print the page navigation 
outputBannerNavigation("Rules");

// printing the content of this rules page 
echo '
<br><br><br><br>

        <!--Page Heading-->
        <div class="ruleshead">
            <h2>RULES</h2>
        </div>
        <!--Page Content-->
        <div class="rulespic">
            <img src="../Images/rules.png" height="60%" width="100%">
        </div>
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
                    document.getElementById("greet").innerHTML = "WELCOME GUEST!!";   
                }
            }

        </script>';
?>

<?php
outputFooter();
?>