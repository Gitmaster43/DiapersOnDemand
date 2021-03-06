//_______________________________________________________________________________________________________
// EITHER GET USERS FROM LOCALSTORAGE OR INITIALIZE ARRAY AND PUSH HARDCODED USERS TO LOCALSTORAGE  

if(users === null){ 
    // initialize empty user array 
    var users = [];                                                   

    // Push user to the array
    users.push(new User("Johannes","Reisinger","Joe","reisingerjohannes@icloud.com","1234","004795008845","07051994","Something 14","2000","Frederiksberg", ""));
    
    users.push(new User("Anders","Vartdal","Andy","anva18ae@student.cbs.dk","1234","","07051994","Something 14","2000","Frederiksberg", ""));

    //Set them to LocalStorage
    localStorage.setItem('users', JSON.stringify(users));

  } else {
    var users = JSON.parse(localStorage.getItem("users")); // else, we get the users from local storage.
  }


//_______________________________________________________________________________________________________________
// FUNCTION FOR REGISTERING USER

// Here we get the elements by the ID, and say that the click should get the value from all the registration-boxes
document.getElementById("submit").addEventListener("click", function(){   // Get information from placeholders in html 
  firstName = document.getElementById("regFirstName").value;
  lastName = document.getElementById("regLastName").value;
  userName = document.getElementById("regUserName").value;
  email = document.getElementById("regEmail").value;
  confirmEmail = document.getElementById("regConfirmEmail").value;
  password = document.getElementById("regPassword").value;
  confirmPassword = document.getElementById("regConfirmPassword").value;
  phoneNumber = document.getElementById("regPhoneNumber").value;
  dateOfBirth = document.getElementById("regDateOfBirth").value;
  streetName = document.getElementById("regStreetName").value;
  postalNumber = document.getElementById("regPostalNumber").value;
  city = document.getElementById("regCity").value;
  userId = '_' + Math.random().toString(36).substr(2, 9);

// _ internal use 

  //FIRSTNAME and LASTNAME MUST BE ADDED BY USER
  //If there are no upper/lower case letters in the placeholder, stop user

  nameReq = /[a-zA-Z -]/;

  if (nameReq.test(firstName)) {

  } else {
    alert("You have a firstname, right? Type it in!")
    return false
  };


  if (nameReq.test(lastName)) {

  } else {
    alert("You have a lastname, right? Type it in!")
    return false
  };


  //USERNAME DOES NOT EXIST ALREADY

  //loops through the already existing users, and check if the username input already exist. If it does, user is stopped
  for (var i = 0; i < users.length; i++) {
    if (users[i].username == userName) {
      alert("Username already exists");
      return false;               
    }
  };
    
  

  //EMAIL AND CONFIRM EMAIL MUST BE EQUAL TO EACHOTHER BEFORE CONTINUING

  if (email == confirmEmail){

  } else {
    alert("Emails does not match")
    return false 
  };


  emailreq = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailreq.test(email)) {
    
  } else {
    alert("Email does not meet requirments")
    return false
  };


  //PASSWORDS MUST BE EQUAL TO EACHOTHER BEFORE CONTINUEING 

  if (password == confirmPassword){

  } else {
    alert("Passwords does not match")
    return false 
  };

 
  //PASSWORD MEETS REQUIREMENTS WHEN CREATING USER

  passwordreq = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  // Checks if password matches criteria of variable pwd. Test checks if the string in () matches the regEx
  if (passwordreq.test(password)) {
    
  } else {
    alert("Password does not meet requirements")
    return false
  };


  // Push the new user to the array.
  users.push(new User(firstName, lastName, userName, email, password, phoneNumber, dateOfBirth, streetName, postalNumber, city, userId));
    console.log(users);                         //what is this for? It does not show in console.

    //New is a operator that does four things:
    //Creates a new object which inherits and calls the constructor function, with specified arguments

    //Local storage (domain specific): hardcoded version 
    // turning our users into a JSON string and then set it into local storage
    // first parameter in the parantheses is the name (unique; is in local storage)
    // Storing multiple types of information into a single local storage key value
    // In order for local storage to store the information it needs to be stored as a string: JSON objects are strings of texts   
    //we save the array "users" after we have stringified it, in the localstorage under the key "users" 
    localStorage.setItem('users', JSON.stringify(users)); //And then we save this array as a string under the key users 
    
    window.location = "../Index.html";
}); 


//_______________________________________________________________________________________________________________
// PASSWORD REQUIREMENTS


// Defining the variables 
var myInput = document.getElementById("regPassword");
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


//SHOWS REQUIREMENTS NEXT TO THE PLACEHOLDERS

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/; 
  if(myInput.value.match(lowerCaseLetters)) { 
    letter.classList.remove("invalid");       
    letter.classList.add("valid");           
  } else { // delete: changes from green back to red because we change the class
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

// g modifier: used to perform a global match --> finds all matches and does not stop after our first requirement

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/;
  if(myInput.value.match(upperCaseLetters)) { 
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/;
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

//__________________________________________________________________________________________________________________
// CONFIRM PASSWORD FUNCTION

// Created the variable "check" in HTML with an onkey-function at password and confirm password
// Now create the check function to check if the string of the passwords are the same by using an if statement 
var check = function() {
  if (document.getElementById("regPassword").value == document.getElementById("regConfirmPassword").value) {
    // if the string of both passwords are correct --> it shows the message "matching" in green
    // message2: it is created as span at the confirm-password in HTML
    document.getElementById("message2").style.color = "green";
    document.getElementById("message2").innerHTML = "√ matching";
  } else {
    document.getElementById("message2").style.color = "red"; 
    document.getElementById("message2").innerHTML = "X not matching"; 
  }  
}
 
