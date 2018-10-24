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


var match = function() {

  // if the string of the passwords don't match (indicated by !=), it will depict the alert "Passwords don't match"
  // Otherwise it will depict the message "Creation was successfull"
  if  (document.getElementById("psw").value != document.getElementById("confirmPsw").value) {
  alert ("Passwords don't match");
  } 
} 


var resultSpan = document.getElementById("creationResult");
resultSpan.innerText = "Creation was successful"
  



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

//Local storage (domain specific): hardcoded version 

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



// Adding class of users, with defined user characteristics

class User {

  // The constructor defines the values that each object can have, and makes us able to make more objects
  constructor (firstName, lastName, userName, email, password, phoneNumber, dateOfBirth, streetName, postalNumber, city) {
      this.firstname = firstName;
      this.lastname = lastName;
      this.username = userName;
      this.email = email;
      this.password = this.hashPassword(password);
      this.phonenumber = phoneNumber;
      this.dateofbirth = dateOfBirth;
      this.streetname = streetName;
      this.postalnumber = postalNumber;
      this.city = city;
  }


// TODO: implement the hashPassword(password) function <-- Doing
// Function copied from Henriks login-example. 
hashPassword(rawPassword){
  var a = 1, c = 0, h, o;
  if (rawPassword) {
    a = 0;
    //jshint plusplus:false bitwise:false <<-- Have no idea what this means
    for (h = rawPassword.length - 1; h >= 0; h--) {
      o = rawPassword.charCodeAt(h);
      a = (a << 6 & 268435455) + o + (o << 14);
      c = a & 266338304;
      a = c !== 0 ? a ^ c >> 21 : a;
    }
  } else {    
    // If the password is not valid, we'll throw an error we're able to catch
    throw new Error("The password supplied is not valid");
  }
  return String(a);
}
}

// Declare a function that makes the login pause for some ms to show a message
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// initialize empty user array
var users = [];

// push user to the array
users.push(new User("Johannes","Reisinger","Joe","reisingerjohannes@icloud.com","1234","004795008845","07051994","Something 14","2000","Frederiksberg"));


// declare the variable 'login' and connect it to the button in Registration.html.
var login = document.getElementById('login');

// Setting the maximum number of attempts to log in.
var attempt = 3;

// Binding the resultspan to a textfield in html-file.
var resultSpan = document.getElementById('loginResult')

// The function that gets information from the users array and checks if it fits.
// Using "async" in order to make it 'await (milliseconds)' before the redirection <-- What does async mean?
async function loggingIn() {

  // Declaring the variables username and password, and connect them to the buttons in index.html.
  var inputUsername = document.getElementById("usernamebox")
  var inputPassword = document.getElementById("loginpasswordbox")

 

  // Creating a for-loop to loop through the users array.
  for(i = 0; i < users.length; i++) {

      // Declaring a user for easy use.
      var user = users[i];

      //Copied from Henriks login example
      // We use a try-catch for the hash-password function, since something could go wrong.
      try {

          // We try to create a variable with the hashed version of the inputPassword
          var hashedInputPassword = user.hashPassword(inputPassword.value);
          console.log(hashedInputPassword);
      } catch (error) {

          // We console log any error that might have been thrown
          console.log(error);
      }

      // if username and password matches in users, the user is logged in.
      if (inputUsername.value == users[i].username && inputPassword.value == hashedInputPassword) {
          console.log(username + " is logged in!!!")
          resultSpan.innerText = "Login was successful"; 
          await sleep(2000);
          window.location.href = "index.html";  //redirecting to another page
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
      login.disabled = true;
      
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

/* 
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
 */
// Make a function that clicks the submit button when you press enter in the pwd box.

var enter = function(e) {
  
 if (e.keyCode == 13) { //Always remember brackets. If you want more than one thing in a if-statement: brackets.
  loggingIn();
  console.log("running");
  return false;}
}

// if the user presses Enter while in the password box, it should trigger a click on the login button
// add an eventlistener for keypress on the enter button. function above.
// It only listens to the passwordbox, but can listen to anything if we use "document"
document.getElementById("loginpasswordbox").addEventListener("keyup", enter);


login.onclick = loggingIn
// a lot of blank spaces 


/* Errors:
1. Cannot find the user Joe with password 1234 (but it does hash the password, and run the loginfunction)
2. Will not redirect to index, but goes to a page that is not found: Cannot GET /action_page.php?username=Joe&psw=1234
3. Does not wait with the sleep function
4. ?
*/




    

    //function () {
     //   Math.random().toString(36).substr(2, 9);
    //}
    // Create function that assigns random userID, then it becomes a method. Create method instead. math.random 0 - 1 multiply it by a million 
    // or detect number of users and add 1. 
   // }
 // } 

// Create array called users
var users = JSON.parse(localStorage.getItem("users"));

if(users === null){
  users = [];
  users.push(new User("CoolJoe", "1234", "Joe", "Reisinger", "Germany", "joe@email.de", 1));
  users.push(new User("CoolAnna", "1234", "Anna", "Reisinger", "Germany", "joe@email.de", 2));
}

// Create Function that pushes new user data in existing array 

// push new instance of Users into newly created array



// In order to authenticate logged in user we create a variable and assign null
var aunthenticatedUserId = null

// Define the buttons and span
var submit = document.getElementById('submit');
var forget = document.getElementById('forgotPassword');
var logout = document.getElementById("logout");
var register = document.getElementById ('registerUser');
var resultSpan = document.getElementById('loginResult');


// Variabel to define the amount of wrong attempts you have
var attempt = 3;
// Gregor´s try to use local storage 

// Function to go through the User Data to match Username/Password
function getInfo() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

 
// Loop that goes through the User Data to idetify right or wrong Username/Password
  for (let i = 0; i < users.length; i++) {
      if (username == users[i].username && password == users[i].password) {
        {console.log (username + " is logged in!");

//Push username from logged in User in the local storage 
        localStorage.setItem("loggedInUser", users[i].firstname);

//redirect to new html side for logged in users 
        window.location = "journeyOverview.html";

//Set authenticatedUserId to userId to enable to change aunthenticatedUserId = null into new value
        aunthenticatedUserId = users[i].userId;
        console.log (aunthenticatedUserId)
        }

// If Username or Password is not right than it counts down possibel attempts
  } 
}
// Disabling fields after 3 attempts.
if( attempt == 0){    
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;

//Return false to get out of function
return false;
} else {

//Drecrement amount of attemps and show in span "loginResult"
  attempt--;
  
  resultSpan.innerText = "You've entered a wrong username or password. You have left "+attempt+" attempt(s).";
  }    
}
function goToRegister () {
    window.location = "registrationForm.html";
  }

function forgotPassword () {

    window.location = "resetPassword.html";
  }

// Pushing new user into array Users and storing it using localStorage





// var testObject = {regUsername: 'John', 'two':2, 'three': 3 };

// Retrieve the object from storage

//document.getElementById("btnSignUp").addEventListener("click", 

document.getElementById("registerUser").addEventListener("click", function() {
    username = document.getElementById("regUsername").value;
    password = document.getElementById("regPassword").value;
    firstname = document.getElementById("regFirstname").value;
    surname = document.getElementById("regSurname").value;
    country = document.getElementById("regCountry").value;
    email = document.getElementById("regEmail").value;
    gender = document.getElementById("regGender").value; 
  
    users.push(new User(username, password, firstname, surname, country, email, gender));
    console.log(users);
    localStorage.setItem('users',JSON.stringify(users));
    window.location = "index.html";
      });