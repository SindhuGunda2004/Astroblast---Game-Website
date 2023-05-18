<?php
// including common php page for including common code for every page
include('common.php');

// calling this function to print the page header
outputHeader("Astroblast -- Leaderboard");
// calling this function to print the page navigation 
outputBannerNavigation("Leaderboard");

// printing the content of this leaderboard page 
echo '
<!--Page Heading-->
        <div class="lbhead">
            <h2>LEADERBOARD</h2>
        </div>
        <!--Page Content-->
        <div class="lb">
            <!--Table for leaderboard-->
            <table class="leaderboard">
                <tr>
                    <th>POSITION</th>
                    <th>PLAYER NAME</th>
                    <th>SCORE</th>
                </tr>
                <tr id="first">
                    <td id="firstPos"> 1st </td>
                    <td id="firstName"></td>
                    <td id="firstScore"></td>
                </tr>
                <tr id="second">
                    <td id="secondPos"> 2nd </td>
                    <td id="secondName"></td>
                    <td id="secondScore"></td>
                </tr>
                <tr id="third">
                    <td id="thirdPos"> 3rd </td>
                    <td id="thirdName"></td>
                    <td id="thirdScore"></td>
                </tr>
                <tr id="fourth">
                    <td id="fourthPos"> 4th </td>
                    <td id="fourthName"></td>
                    <td id="fourthScore"></td>
                </tr>
                <tr id="fifth">
                    <td id="fifthPos"> 5th </td>
                    <td id="fifthName"></td>
                    <td id="fifthScore"></td>
                </tr>
            </table>
        </div>
        <br><br><br><br><br>';
?>

<?php
outputFooter();
?>