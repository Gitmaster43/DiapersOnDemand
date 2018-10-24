// Password (line 3-62): Depicts if the user matches the password requirements

// Defining the variables 
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
} 


// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) { 
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) { 
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) { 
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// Confirm password function (line 68-78)

// I created the variable "check" in HTML with an onkey-function at password and confirm password
// Now I create the check function to check if the string of the passwords are the same by using an if statement 
var check = function() {
  if (document.getElementById("psw").value == document.getElementById("confirmPsw").value) {
    // if the string of both passwords are correct --> it shows the message "matching" in green
    // message2: it is created as span at the confirm-password in HTML
    document.getElementById("message2").style.color = "green";
    document.getElementById("message2").innerHTML = "√ matching";
  } else {
    document.getElementById("message2").style.color = "red";
    document.getElementById("message2").innerHTML = "X not matching";
  } 
  
}


// if passwords don't match, the user can not proceed

var resultSpan = document.getElementById("creationResult");
var match = function() {

  // if the string of the passwords don't match (indicated by !=), it will depict the alert "Passwords don't match"
  // Otherwise it will depict the message "Creation was successfull"
  if  (document.getElementById("psw").value != document.getElementById("confirmPsw").value) {
  alert ("Passwords don't match");
  } else {
    resultSpan.innerText = "Creation was successful"
  }
} 





// By clicking enter, you will automatically click "Create"
var enter = function(e) {
    
  if (e.keyCode == 13) { //Always remember brackets. If you want more than one thing in a if-statement: brackets.
    

    // Get all users from local storage

    // Create new user object

    // Add object to users array

    // Use JSON stringify

    // Save new list

    console.log("running");
   return false;}
}

// add an eventlistener for keypress on the enter button. function above.
// It only listens to the passwordbox, but can listen to anything if we use "document"
// document.getElementById("pws").addEventListener("keyup", enter);


// By clicking the login-button the "modal" appears

// Get the modal
var modal = document.getElementById('id01');

// Show the numer of times a button was clicked
if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}
document.getElementById("result") +
localStorage.clickcount + " time(s).";

//Local storage (domain specific)

//Defining the object userData with its properties 
var userData = {
  firstName: "Johannes",
  lastName: "Reisinger",
  userName: "Joe",
  email: "reisingerjohannes@icloud.com",
  confirmEmail: "reisingerjohannes@icloud.com",
  password: "SbagW&imI6",
  confirmPassword: "SbagW&imI6",
  phoneNumber: "+4552529095",
  birthday: "04.10.1994",
  streetName: "Krimsvej 1B, 12tv",
  postCode: "2300",
  city: "Copenhagen"  
},
localData;

// turning our userData into a JSON string and then set it into local storage

//first parameter in the parantheses is the name (unique; is in local storage)
// Storing multiple types of information into a single local storage key value
// In order for local storage to store the information it needs to be stored as a string: JSON objects are strings of texts
localStorage.setItem( "userData", JSON.stringify( userData ));

// When we want to get item out we want to parse it back into a native JavaScript object
localData = JSON.parse( localStorage.getItem("userData"));

// console.log(localData);
console.log(userData);