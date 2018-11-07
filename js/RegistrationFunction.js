
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
      this.userId = 0;
  }

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



// Define users as "users" and get them from the local storage.
var users = JSON.parse(localStorage.getItem("users")); 

if(users === null){ // if there are nothing within the localstorage, the variable "users" will be initialized 
    // initialize empty user array 
    var users = [];

    // push user to the array
    users.push(new User("Johannes","Reisinger","Joe","reisingerjohannes@icloud.com","1234","004795008845","07051994","Something 14","2000","Frederiksberg", "1"));

    users.push(new User("Anders","Vartdal","Andy","anva18ae@student.cbs.dk","1234","","07051994","Something 14","2000","Frederiksberg", "2"));
}



//TODO: Finalize the enter-function, with a link to the different lines below.

// add an eventlistener for keypress on the enter button. function above.
// It only listens to the passwordbox, but can listen to anything if we use "document"
// document.getElementById("pws").addEventListener("keyup", enter);

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


// Show the number of times a button was clicked
if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}
document.getElementById("result") +
localStorage.clickcount + " time(s).";


//Local storage (domain specific): hardcoded version 

// turning our users into a JSON string and then set it into local storage

// first parameter in the parantheses is the name (unique; is in local storage)
// Storing multiple types of information into a single local storage key value
// In order for local storage to store the information it needs to be stored as a string: JSON objects are strings of texts

localStorage.setItem( "User", JSON.stringify( users ));

// When we want to get item out we want to parse it back into a native JavaScript object

localData = JSON.parse( localStorage.getItem("User"));

// console.log(localData);
console.log(users);


// By clicking the login-button the "modal" appears
// Get the modal
var modal = document.getElementById('id01');

 // declare the variable 'login' and connect it to the button in Registration.html.
 var login = document.getElementById('login');

 
//function registerUser() {
      
  // Get all users from the database
  
// Here we get the elements by the ID, and say that the click should get the value from all the registration-boxes
document.getElementById("submit").addEventListener("click", function(){
  firstName = document.getElementById("regFirstName").value;
  lastName = document.getElementById("regLastName").value;
  userName = document.getElementById("regUserName").value;
  email = document.getElementById("regEmail").value;
  password = document.getElementById("regPassword").value;
  phoneNumber = document.getElementById("regPhoneNumber").value;
  dateOfBirth = document.getElementById("regDateOfBirth").value;
  streetName = document.getElementById("regStreetName").value;
  postalNumber = document.getElementById("regPostalNumber").value;
  city = document.getElementById("regCity").value;


// Take the user data and push it to the Class

users.push(new User(firstName, lastName, userName, email, password, phoneNumber, dateOfBirth, streetName, postalNumber, city));
  console.log(users);
  localStorage.setItem('users', JSON.stringify(users));
  window.location = "../index.html";
}); 



// Declare a function that makes the login pause for some ms to show a message
// TODO: google to find what New, Promise and Resolve means
/* function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} */


/* 
  What does not work: 
  1. ERROR: "user.hashpassword is not a function" for some reason.
  2. It does not count downwards.
*/



// The function that gets information from the users array and checks if it fits.
// Using "async" in order to make it 'await (milliseconds)' before the redirection <-- TODO: Google what is async
function loggingIn() {

// Declaring the variables username and password, and connect them to the buttons in index.html.
var inputUsername = document.getElementById("usernamebox")
var inputPassword = document.getElementById("loginpasswordbox")

if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
  // We set the resultspan with a new text and return false to get out of this function
  resultSpan.innerText = "You need to enter a username and password in order to use our system";
  return false;
}

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
        // Setting the maximum number of attempts to log in.
        attempt = 3;

        // Binding the resultspan to a textfield in html-file.
        resultSpan = document.getElementById('loginResult');


      // if username and password matches in users, the user is logged in.
      if (user.username == inputUsername.value && user.password == hashedInputPassword) {

          console.log(username + " is logged in!!!")
          resultSpan.innerText = "Login was successful"; 
          //await sleep(2000);
          window.location.href = "C:\Users\Anders\OneDrive\Skule\CBS\IT\Progs\Project\DiapersOnDemand\Index.html";  //redirecting to the home-page
        // ../Index.html
          return; 
      }

          
      if (attempt == 0) {
      // Since the user has tried three times, we let the user know that he's been banned
      resultSpan.innerText = "You've entered the wrong username and password three times. You've been banned from our system";

      // TODO: Or to discuss:
      // You have tried too many times, you are now redirected to forgotten password?
      // Or just redirect the user to the forgotten password site?

      // Disable the two input fields and the button in order for the user to not make any trouble
      inputUsername.disabled = true;
      inputPassword.disabled = true;
      login.disabled = true;
      
      // Return false to stop us from doing anything further.
      return false;

      } 
      
      // else, decrement the attempts     
      else {
          attempt --; 
         
          resultSpan.innerText = "You've entered a username or password that does not match our stored credentials";

          console.log("incorrect username or password")

      // Return false, since we do not have anything more to do
      return false;
     };
  }
}

var enter = function(e) {

if (e.keyCode == 13) { //Always remember brackets. If you want more than one thing in a if-statement: brackets.
  loggingIn();
  //console.log("running");
  return false;}
}

// if the user presses Enter while in the password box, it should trigger a click on the login button
// add an eventlistener for keypress on the enter button. function above.
// It only listens to the passwordbox, but can listen to anything if we use "document"
document.getElementById("loginpasswordbox").addEventListener("keyup", enter);


login.onclick = loggingIn






// Password (line now to line+91): Depicts if the user matches the password requirements

// Defining the variables 
var myInput = document.getElementById("regPassword");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


// TODO: Set a function that checks if the user name is unique in the storage.


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

// Confirm password function (line now to +10)

// I created the variable "check" in HTML with an onkey-function at password and confirm password
// Now I create the check function to check if the string of the passwords are the same by using an if statement 
var check = function() {
  if (document.getElementById("regPassword").value == document.getElementById("regConfirmPassword").value) {
    // if the string of both passwords are correct --> it shows the message "matching" in green
    // message2: it is created as span at the confirm-password in HTML
    document.getElementById("message2").style.color = "green";
    document.getElementById("message2").innerHTML = "√ matching";
  } else {
    document.getElementById("message2").style.color = "red"; 
    document.getElementById("message2").innerHTML = "X not matching"; //TODO: this code ONLY shows if the passwords are not matching, this does not stop the user from proceeding
  } 
  
}

// if passwords don't match, the user will be stopped from creating              

var match = function() {

  // if the string of the passwords don't match (indicated by !=), it will depict the alert "Passwords don't match"
  // Otherwise it will depict the message "Creation was successfull"
  if  (document.getElementById("regPassword").value != document.getElementById("regConfirmPassword").value) {
  alert ("Passwords don't match");
  } 
} 

//TODO: Make this message pop up when the user creation is successful
var resultSpan = document.getElementById("creationResult");
resultSpan.innerText = "Creation was successful"
  

