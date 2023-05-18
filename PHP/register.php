<?php
// including common php page for including common code for every page
include('common.php');

// calling this function to print the page header
outputHeader("Astroblast -- Register");
// calling this function to print the page navigation 
outputBannerNavigation("Register");

// printing the content of this register page 
echo '
        <form class="signup-form">
            <div class="form-header">
               <h2>REGISTER</h2>
            </div>
            <!--Name inputs-->
            <div class="form-body">
                <div class="row">
                    <div class="input-group">
                        <label>FIRST NAME </label>
                        <input id="fname" type="text" placholder="Enter your first name">
                    </div>
                    <div class="input-group">
                        <label>LAST NAME</label>
                        <input id="lname" type="text" placholder="Enter your last name">
                    </div>
                </div>
                <!--DOB input choosen from a calender-->
            <div class="row">
                <div class="input-group">
                    <label>DOB </label>
                    <input id="dob" type="date" placholder="Enter your DOB">
                </div>
            </div>
                <div class="input-group">
                    <label>EMAIL</label>
                    <input id="email" type="email" placholder="Enter your email">
                </div>
                <!--Gender to be chosen-->
                <div class="input-group">
                    <label for="">GENDER</label>
                    <div class="radio-group">
                        <div>
                            <label for="male">
                                <input type="radio" name="gender" id="male">
                                MALE
                            </label>
                        </div>
                        <div>
                            <label for="female">
                                <input type="radio" name="gender" id="female">
                                FEMALE
                            </label>
                        </div>
                    </div>
                    <!--Password input-->
                <div class="input-group">
                    <label>PASSWORD</label>
                    <input id="pass" type="password" placholder="Enter your password">
                </div>
                <div class="input-group">
                    <label>CONFIRM PASSWORD</label>
                    <input id="cpass" type="password" placholder="Enter your password again">
                </div>
                </div>
            </div>
            <!--Register button will submit the form-->
            <div class="form-footer">
                <button class="btn" type="submit">REGISTER</button>
            </div>
        </form>
        <br><br><br><br>';
?>

<?php
outputFooter();
?>