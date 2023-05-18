window.onload = checkLogin;//Check to see if user is logged in already

let usrRegister;
let users = [];
var rank = [];
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

    // this for loop access all the data in the local storage 
    for(let i = 0; i<localStorage.length;i++){
        // .key function iterates over the local storage keys  
        let key = localStorage.key(i);
        // gets the value set for each key
        let value = localStorage.getItem(key);
        var myuser = JSON.parse(value);
        // users array stores score 
        users[i] = myuser.score;
        // rank array stores player name along with score of the player in the local storage 
        rank[i] = myuser.firstName + " " + myuser.score;
    }

    // sorts the scores in decending order
    // this for loop, loops through user array from index 1
    for (let i = 1; i < users.length; i++) {
        let current = users[i];
        let curr = rank[i];
        let j = i - 1;
        // looping through the same array but with index 0 
        while(j >= 0 && current < users[j]) {
            // comapring values in the array and sorting them
            users[j+1] = users[j];
            rank[j+1] = rank[j];
            j--;
        }
        users[j+1] = current;
        rank[j+1] = curr;
    }
    // saerches first name with all the letter from a-z and A-Z globally 
    // the g represents global search
    // checking the rank array by index of user array if length-1 for the first position name  
    let firstName = rank[users.length-1].match(/[a-zA-Z]+/g);
    // searches numbers with one more digits globally and  
    let firstScore = rank[users.length-1].match(/\d+/g);
    document.getElementById("firstName").textContent = firstName[0];
    document.getElementById("firstScore").textContent = firstScore[0];
    
    let secondName = rank[users.length-2].match(/[a-zA-Z]+/g);
    let secondScore = rank[users.length-2].match(/\d+/g);
    document.getElementById("secondName").textContent = secondName[0];
    document.getElementById("secondScore").textContent = secondScore[0];
    
    let thirdName = rank[users.length-3].match(/[a-zA-Z]+/g);
    let thirdScore = rank[users.length-3].match(/\d+/g);
    document.getElementById("thirdName").textContent = thirdName[0];
    document.getElementById("thirdScore").textContent = thirdScore[0];
    
    let fourthName = rank[users.length-4].match(/[a-zA-Z]+/g);
    let fourthScore = rank[users.length-4].match(/\d+/g);
    document.getElementById("fourthName").textContent = fourthName[0];
    document.getElementById("fourthScore").textContent = fourthScore[0];
    
    let fifthName = rank[users.length-5].match(/[a-zA-Z]+/g);
    let fifthScore = rank[users.length-5].match(/\d+/g);
    document.getElementById("fifthName").textContent = fifthName[0];
    document.getElementById("fifthScore").textContent = fifthScore[0];
}

