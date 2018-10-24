

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


// TODO: Create the hashPassword(password) function -->> Does hashing really work??
/* 
hashPassword(rawPassword) {
    var a = 1,
        c = 0,
        h,
        o;
    if (rawPassword) {
      a = 0;
      /*jshint plusplus:false bitwise:false <<-- Have no idea what this means *//*
      for (h = rawPassword.length - 1; h >= 0; h--) {
        o = rawPassword.charCodeAt(h);
        a = (a << 6 & 268435455) + o + (o << 14);
        c = a & 266338304;
        a = c !== 0 ? a ^ c >> 21 : a;
      }
    } else {
      // If the password is not valid, we'll throw and error we're able to catch
      throw new Error("The password supplied is not valid");
    }
    return String(a);
  }
} */


// initialize empty user array
var users = [];

// push user to the array
users.push(new User("Johannes","Reisinger","Joe","reisingerjohannes@icloud.com","1234","004795008845","07051994","Something 14","2000","Frederiksberg"));


// declare the variable 'submit' and connect it to the button in LoginPage.html.
var submit = document.getElementById('submit');

// Setting the maximum number of attempts to log in.
var attempt = 3;

// Binding the resultspan to a textfield in html-file.
var resultSpan = document.getElementById('loginResult')

// The function that gets information from the users array and checks if it fits.
// Using "async" in order to make it 'await (milliseconds)' before the redirection
async function getInfo() {

    // Declaring the variables username and password, and connect them to the buttons in index.html.
    var inputUsername = document.getElementById("username")
    var inputPassword = document.getElementById("pwd")


    // Creating a for-loop to loop through the users array.
    for(i = 0; i < users.length; i++) {

        // if username and password matches in users, the user is logged in.
        if (inputUsername.value == users[i].username && inputPassword.value == users[i].password) {
            console.log(username + " is logged in!!!")
            resultSpan.innerText = "Login was successful"; 
            await sleep(2000);
            window.location.href = "LoggedinPage.html";  //redirecting to another page
            return; 
        }
    
        // else, decrement the attempts and alert the user that he has fewer attempts left
        // user only have 3 attempts
        // TODO: Trying to get the counter to stop at 0
        else {
            attempt --; 
            alert ("You will die! "+ attempt +" attempt left");
            
        }
    
        
        if (attempt == 0) {
        // Since the user has tried three times, we let the user know that he's been banned
        resultSpan.innerText = "You've entered the wrong username and password three times. You've been banned from our system";

        // You have tried too many times, you are now redirected to forgotten password?
        // Or just redirect the user to the forgotten password site?

        // Disable the two input fields and the button in order for the user to not make any trouble
        inputUsername.disabled = true;
        inputPassword.disabled = true;
        submit.disabled = true;
        
        // Return false to stop us from doing anything further.
        return false;
        } 
        else {
        // Since we did not find a match, we know that the user has typed a wrong password and username
        resultSpan.innerText = "You've entered a username or password that does not match our stored credentials";

        console.log("incorrect username or password")

        // Return false, since we do not have anything more to do
        return false;
    };
    
}
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

// if the user presses Enter while in the password box, it should trigger a click on the login button
// add an eventlistener for keypress on the enter button. function above.
// It only listens to the passwordbox, but can listen to anything if we use "document"
document.getElementById("pwd").addEventListener("keyup", enter);


submit.onclick = getInfo
// a lot of blank spaces 