
// declaring variables and getting elements by their IDs
var ship = document.getElementById("ship");
var board = document.getElementById("board");
// variable for counting asteroids that are generated totally  
let totalAsteroids = 0;
// declaring bullet launch as false 
let bulletLaunch = false;
// creating a div for bullet to pass through 
var bullet = document.createElement("div");
// array to store asteroids that are shot 
let diedAsteroids = [];
let score = 0;
// declaring audio object with the audio source for bullet shoot  
let bullshoot = new Audio("../Extras/bullshoot.mp3");
// decalring audio objet with the audio source for asteroid explaosion
let explosion = new Audio("../Extras/explosion.mp3");
let usrRegister;
let playerHighScore; 

  //Check to see if user is logged in already
  window.onload = checkLogin;


  function checkLogin(){
      if(sessionStorage.loggedInUsrName !== undefined){
          //Extract details of logged in user
          usrRegister = JSON.parse(localStorage[sessionStorage.loggedInUsrName]);
          
          //Greeting the user with their name 
          document.getElementById("greet").innerHTML = "WELCOME " + usrRegister.firstName ;
          playerHighScore =  usrRegister.score; 
      }
      else{
          document.getElementById("greet").innerHTML = "WELCOME GUEST";   
          alert("Register to save your progress and appear on the leaderboard");
      }
  }

function game(){
  
  // storing player high score 
  
  // adding the event listener to track the mouse movement for the ship 
  board.addEventListener("mousemove", shipmove );

  // function for the movement of the spaceship
  function shipmove(e) {

    // position and movement of the ship on the board or game console
    ship.style.left = (e.pageX - 150) + 'px';

    // if the bullet launch is false then the position of the bullet should be the given position
    if(bulletLaunch==false){
        bullet.style.left = (e.pageX - 85.5) + 'px';
    }
  }

  // adding event listener for tracking mouse click 
  board.addEventListener("click", shipclick);

  // declaring for bullet motion and getting asteroid class
  let bulletMotion;

  // getting elements by class name 
  var ast = document.getElementsByClassName("ast");

  // this function releases the bullet when the mouse clicks 
  function shipclick(){

    // declaring bullet launch as true when mouse is clicked 
    bulletLaunch = true;
    bullshoot.play();
    // when the bullet launch is true the bullets added into the class list 
    bullet.classList.add("bullets");
    // and we are appending the bullets on to the board using appendChild 
    board.appendChild(bullet);
    // setting interval for the bullet speed 
    bulletMotion = setInterval(moveBullet, 20);
  }

  // declaring the bullet position as 0 first 
  let bulletPosition = 0

  // this function moves the bullet and detects collision 
  function moveBullet(){

    // if the vullet position is 100 then 
    if(bulletPosition == 100){

      // then here we redeclare that bullet launch is false 
      bulletLaunch = false;
      // then we remove the bullet that we appended on to the board 
      bullet.remove();
      // and then redeclare that the position of the bullet is 0 so that when we shoot again it will shoot from the spaceship 
      bulletPosition = 0;
      // and claering the bullet motion once it reaches position 100; 
      clearInterval(bulletMotion);
    }else{

      // if bullet didnt reach position 100 then it will still move 
      bullet.style.bottom = bulletPosition + "%";
    }

    // increasing the bullet position by 5 
    bulletPosition = bulletPosition + 5;
    
    // for loop to check whether the index of total asteroids is there in the shot asteroids array 
    for(let i = 0; i <= totalAsteroids; i++){

      // if it returns undefined then 
      if (diedAsteroids[i]==undefined){
        // getting asteroids class name and adding it with i to find out the number of asteroid generated
        var asts = document.getElementById("asteroid" + i);
        // getting the bullet position
        var bullPos = bullet.getBoundingClientRect();
        // getting the asteroid position
        var astPos = asts.getBoundingClientRect();
      

        // checking the collision with their left and top postion 
        // checking if they fall into the same range of the positio
        if(bullPos.left >= astPos.left && bullPos.left <= (astPos.left + 70) 
        && bullPos.top >= astPos.top && bullPos.top<= (astPos.top+70)){

          // if the condition evaluates to true then the index of that asteroids in added to the array of asteroids shot 
          diedAsteroids[i] = true;
          explosion.play();
          // score will be the length of the array of the asteroids shot 
          
          // resetting the bullet psotions and launch after collision and removing the bullet from the board 
          bulletLaunch = false;
          bulletPosition = 0;
          bullet.remove();
          // removing the asteroid from the board after collision of bullet and asteroid
          asts.remove();
          // clearing the bullet interval by preventing it from continuing its motion till position 100
          clearInterval(bulletMotion);
          // adding score for every asteroid hit 
          // user gets 5 points for each asteroid hit 
          score = score + 5;
          // this condition checks if the players current score is greater than their highest score stored in the local storage 
          if (playerHighScore < score){
            // if the players current score is higher than score in local storage then it will be changed 
            usrRegister.score = usrRegister.score + 5;
            document.getElementById("score").innerHTML = "Score : " + score;
            localStorage[usrRegister.email] = JSON.stringify(usrRegister);
          }
          else{
            document.getElementById("score").innerHTML = "Score : " + score;
          }
        } 
      }
      // if collision does not happen the bullet will continue till position 100 and then it will be removed from the board. 
      else{
        continue;
      } 
    }
  }

  // this function is to generate random asteroids 
  var asteroidsGenerator = setInterval(() => {

    // creating a div for asteroids to pass through 
    var asts = document.createElement("div");
    // addding asteroids in the classs list 
    asts.classList.add("ast");
    // giving the asteroids id with number 
    // naming each asteroid that is passed to the board 
    asts.id = "asteroid" + totalAsteroids;
    // as a asteroid appears the count increases 
    totalAsteroids = totalAsteroids + 1;
    
    //Just getting the left of the asteroid to place it in random position
    var astleft = parseInt(
      window.getComputedStyle(asts).getPropertyValue("left")
    );
    // generating value between 0 to 1130 to place the asteroid anywhere between the boundaries of the board.
    // 1130 = board width - asteroid width
    asts.style.left = Math.floor(Math.random() * 1130) + "px";
  
    // appending the asteroid to the board
    board.appendChild(asts);
  }, 1000);

  // this function moves the asteroids in a the interval 
  var moveasts = setInterval(() => {

    // getting the asteroids by the class name 
    var asts = document.getElementsByClassName("ast");
  
    // if the asteroid class is not defined 
    if (ast != undefined) {
      for (var i = 0; i < ast.length; i++) {
        //Now I am increasing the top of each asteroid so that the asteroids can move downwards
        var asts = ast[i]; //getting each asteroid
        var asttop = parseInt(
          window.getComputedStyle(asts).getPropertyValue("top")
        );
        //520 = boardheight - asteroid height + 25
        if (asttop >= 520) {
          alert("Game Over");
          clearInterval(moveasts);
          window.location.reload();
        }
  
        asts.style.top = asttop + 25 + "px";
      }
    }
  }, 1130);
}