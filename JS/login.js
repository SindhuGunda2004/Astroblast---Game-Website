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


function login(){
    console.log("Login Starts");
    //Getting email address
    let email = document.getElementById("uname").value;
    
    //User does not have an account
    if(localStorage[email] === undefined){
        console.log("Login fail");
        //Inform user that they do not have an account
        alert("Email not recognized. Do you have an account?");
        //Does nothing 
        return; 
    }
    //User has an account
    else{ 
        //Convert to object
        usrRegister = JSON.parse(localStorage[email]);
        
        let password = document.getElementById("pass").value;
        //Successful login
        if(password === usrRegister.password){
            alert("User Logged In");
            sessionStorage.loggedInUsrName = usrRegister.email;
            checkLogin();
            return; 
        }
        else{
            alert("Password not correct. Please try again.");
        }
    }
}