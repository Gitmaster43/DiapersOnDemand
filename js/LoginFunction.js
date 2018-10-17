

// submit.onclick = function(){
// //   console.log("Button is clicked");
// // };

// Create a simple function 


// Adding class of users, with defined user characteristics

class User {

    // The constructor defines the values that each object can have, and makes us able to make more objects
    constructor (firstName, lastName, userName, email, password, phoneNumber, dateOfBirth, streetName, postalNumber, city) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.username = userName;
        this.email = email;
        this.password = password /*.hashPassword(password)*/;
        this.phonenumber = phoneNumber;
        this.dateofbirth = dateOfBirth;
        this.streetname = streetName;
        this.postalnumber = postalNumber;
        this.city = city;
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
// TODO: Create the hashPassword(password) function

// initialize empty user array
var users = [];

// 5. push users to the array
users.push(new User("Johannes","Reisinger","Joe","reisingerjohannes@icloud.com","1234","004795008845","07051994","Something 14","2000","Frederiksberg"));


// declare the variable 'submit' and connect it to the button in LoginPage.html.
var submit = document.getElementById('submit');

// Setting the maximum number of attempts to log in.
var attempt = 3;

var resultSpan = document.getElementById('loginResult')

// The function that gets information from the users array and checks if it fits.
// Using "async" in order to make it 'await (milliseconds)' before the redirection
async function getInfo() {
    // Declaring the variables username and password, and connect them to the buttons in index.html.
    var username = document.getElementById("username").value
    var password = document.getElementById("pwd").value


    // Creating a for-loop to loop through the users array.
    for(i = 0; i < users.length; i++) {

        // if username and password matches in users, the user is logged in.
        if (username == users[i].username && password == users[i].password) {
            console.log(username + " is logged in!!!")
            resultSpan.innerText = "Login was successful"; 
            await sleep(3000);
            window.location.href = "LoggedinPage.html";  //redirecting to another page
            return; 
        }
    
        // else, decrement the attempts and alert the user that he has fewer attempts left
        // user only have 3 attempts
        else {
            attempt --; 
            alert ("You will die! "+ attempt +" attempt left");
            
            return; 
        }
    
    } 
    
    
    console.log("incorrect username or password")
}

if (attempt == 0) {
    alert("You are now blocked from the system");
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

// Make a function that clicks the submit button when you press enter in the pwd box.
 
var enter = function(e) {
    
   if (e.keyCode == 13) { //Always remember brackets. If you want more than one thing in a if-statement: brackets.
    getInfo();
    console.log("running");
    return false;}
}

// add an eventlistener for keypress on the enter button. function above.
// It only listens to the passwordbox, but can listen to anything if we use "document"
document.getElementById("pwd").addEventListener("keyup", enter);


submit.onclick = getInfo
// a lot of blank spaces 