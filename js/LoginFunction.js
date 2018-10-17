

// submit.onclick = function(){
// //   console.log("Button is clicked");
// // };

// Create a simple function 


// 1. Adding class of users, with defined user characteristics
// 2. Changing code below.

class User {

    // The constructor defines the values that each object can have, and makes us able to make more objects
    constructor (firstname, )
}

// Creates an array that has the hardcoded users(objects).
var objPeople = [

    {
        
        username: 'Joe',
        password: '1234'
    },
    {
    username: 'matt',
    password: 'acedemy'

     },

     {
         username: 'chris',
         password: 'forever'
     }
]

// declare the variable 'submit' and connect it to the button in index.html.
var submit = document.getElementById('submit');

// The function that gets information from the objPeople array and checks if it fits.
function getInfo() {
    // Declaring the variables username and password, and connect them to the buttons in index.html.
    var username = document.getElementById("username").value
    var password = document.getElementById("pwd").value

    // Setting the maximum number of attempts to log in.
    var attempt = 3; 

    // Creating a for-loop to loop through the objPeople array.
    for(i = 0; i < objPeople.length; i++) {

        // if username and password matches in objPeople, the user is logged in.
        if (username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in!!!")
            alert ("Login was successfull"); 
            window.location.href = "2index.html";  //redirecting to another page
            return; 
        }
    
        // else, decrement the attempts and alert the user that he has fewer attempts left
        // user only have 3 attempts
        else {
            attempt --; // Stops at 2. does not work. <-------------- 
            alert ("You will die! "+ attempt +" attempt left");
            if (attempt == 0)  
            return; 
        }
    break
    }
    console.log("incorrect username or password")
}

// Make the password visible
// Declare the variables andconnect them to the password-button and eye-button
var pwd = document.getElementById("pwd");
var eye = document.getElementById("eye");

// add a listener on the eye that responds to clicks and execute the function togglePass
eye.addEventListener("click",togglePass);

// 
function togglePass(){

    eye.classList.toggle("active");

    (pwd.type == "password") ? pwd.type = "text" :
    pwd.type = "password";

    
}



submit.onclick = getInfo
// a lot of blank spaces 