<?php
// including common php page for including common code for every page
include('common.php');

// calling this function to print the page header
outputHeader("Astroblast -- Login");
// calling this function to print the page navigation 
outputBannerNavigation("Login");

// printing the content of this login page 
echo '
<!--Page Content-->
        <!--Login form-->
        <form class="login-form" onsubmit="return false;">
            <div class="login-header">
                <h2>LOGIN</h2s>
            </div>
            <!--Form inputs-->
            <div class="login-body">
                <div class="login-input">
                    <label>EMAIL</label>
                    <input id="uname" type="email" placholder="Enter your email" required>
                    <br><br>
                    <label>PASSWORD</label>
                    <input id="pass" type="password" placholder="Enter your password" required>
                </div>
            </div>
            <!--Login button-->
            <div class="login-footer">
                <button class="lbtn" onclick="login()">LOGIN</button>
            </div>
        </form>
        
        <br><br><br><br><br><br><br><br><br><br>

        <script src="../JS/login.js">
        </script>
        
        <!--Page Footer-->';
?>

<?php
outputFooter();
?>