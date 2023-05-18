function register(){

    // creating a usr register object to store all the details of a new user
    var usrRegister = {};

    // getting all the elements by IDs and checking their value
    usrRegister.firstName = document.getElementById("fname").value;
    usrRegister.lastName = document.getElementById("lname").value;
    usrRegister.dob = document.getElementById("dob").value;
    usrRegister.email = document.getElementById("email").value;
    usrRegister.password = document.getElementById("pass").value;
    usrRegister.conPass = document.getElementById("cpass").value;
    usrRegister.gender = document.getElementsByName("gender").value;
    usrRegister.score = 0;

    // stroring user inputted password into a variable 
    var rpass = usrRegister.password;

    // this function is to determine the strength of the password 
    function passwordStrength(){

        // this object has the special characters, letters everything that is necessary for a strong password
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        // comparing user inputted password with the condition for strong password
        if (mediumRegex.test(rpass) == true){
            return true; 
        }
        else{
            return false; 
        }
    }


    // this function chceks if the user has inputted a valid email
    function validateEmail() {

        // variable to store emailID
        var emailID = usrRegister.email;
        // getting posotion of @ from user input 
        atpos = emailID.indexOf("@");
        // getting position of . from the user input 
        dotpos = emailID.lastIndexOf(".");
        
        // checking if @ and . is there in the email and if there is it in a valid position
        if (atpos < 1 || ( dotpos - atpos < 2 )) {

            // if the condition evaluates to false then alert pops up 
            alert("Please enter correct email ID");
            usrRegister.email.focus() ;
            return false;
        }
        return( true );
    }
    
    // checking if the user has entered first name 
    if (usrRegister.firstName == "") {
        alert("First name field cannot be empty");
        usrRegister.firstName.focus() ;
        return false;
    }

    // checking if the user has entered last name
    else if (usrRegister.lastName == ""){
        alert("Last name field cannot be empty");
        usrRegister.lastName.focus() ;
        return false;
    }

    // checking if the user has entered date of birth
    else if (usrRegister.dob == ""){
        alert("Date of Birth field cannot be empty");
        usrRegister.dob.focus() ;
        return false;
    }

    // checking if the user has entered email and if user has entered a valid email
    else if (usrRegister.email == "" || validateEmail() == false){
        alert("Email field cannot be empty");
        usrRegister.email.focus() ;
        return false;       
    }

    // checking if the user has entered a password
    else if (usrRegister.password == ""){
        alert("Password field cannot be empty");
        usrRegister.password.focus() ;
        return false;
    }

    // checking if the user has entered confirm passowrd field as well 
    else if (usrRegister.conPass == ""){
        alert("Confirm Password field cannot be empty");
        usrRegister.conPass.focus() ;
        return false;
    }

    // checking if the user has entered same passowrd in both the fields that is password and confirm password 
    else if (usrRegister.password != usrRegister.conPass){
        alert("Your password is not matching");
        return false;
    }

    // checking if the user has entered same password in both the fields and also the password is strong 
    else if ((usrRegister.password == usrRegister.conPass) && passwordStrength() == false){
        alert("Please type a strong password");
        return false; 
    }

    // if all the conditions are satisfied then the user is stored in the local storage
    else{
        localStorage[usrRegister.email] = JSON.stringify(usrRegister);
        alert("User Registred");
        // sessionStorage.setItem("loggedInUsrName",usrRegister.firstName );
        return true;
    }
};