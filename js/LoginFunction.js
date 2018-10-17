

// submit.onclick = function(){
// //   console.log("Button is clicked");
// // };

// Create a simple function 


// 1. Adding class of users, with defined user characteristics
// 2. Changing code below.

class User {

    // The constructor defines the values that each object can have, and makes us able to make more objects
    constructor (firstName, lastName, userName, email, password, phoneNumber, dateOfBirth, streetName, postalNumber, city) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.username = userName;
        this.email = email;
        this.password = password /*  .hashPassword(password)*/;
        this.phonenumber = phoneNumber;
        this.dateofbirth = dateOfBirth;
        this.streetname = streetName;
        this.postalnumber = postalNumber;
        this.city = city;
    }
}

// 3. Create the hashPassword(password) function

// 4. initialize empty user array
var users = [];

// 5. push users to the array
users.push(new User("Johannes","Reisinger","Joe","reisingerjohannes@icloud.com","1234","004795008845","07051994","Something 14","2000","Frederiksberg"));


// declare the variable 'submit' and connect it to the button in LoginPage.html.
var submit = document.getElementById('submit');

// The function that gets information from the objPeople array and checks if it fits.
function getInfo() {
    // Declaring the variables username and password, and connect them to the buttons in index.html.
    var username = document.getElementById("username").value
    var password = document.getElementById("pwd").value

    // Setting the maximum number of attempts to log in.
    var attempt = 3; 

    // Creating a for-loop to loop through the objPeople array.
    for(i = 0; i < users.length; i++) {

        // if username and password matches in objPeople, the user is logged in.
        if (username == users[i].username && password == users[i].password) {
            console.log(username + " is logged in!!!")
            alert ("Login was successful"); 
            window.location.href = "LoggedinPage.html";  //redirecting to another page
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