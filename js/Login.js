

//______________________________________________________________________________________________________
// BIND USERS TO LOCALSTORAGE OR INITIALIZE EMPTY ARRAY AND PUSH USERS

// Define users as "users" and get them from the local storage.
var users = JSON.parse(localStorage.getItem("users")); 

if(users === null){ // if there are nothing within the localstorage, the variable "users" will be initialized 
    // initialize empty user array 
    var users = [];
     // push user to the array
    users.push(new User("Johannes","Reisinger","Joe","reisingerjohannes@icloud.com","1234","004795008845","07051994","Something 14","2000","Frederiksberg", "1"));
    users.push(new User("Anders","Vartdal","Andy","anva18ae@student.cbs.dk","1234","","07051994","Something 14","2000","Frederiksberg", "2"));
    localStorage.setItem('users', JSON.stringify(users));
}

//______________________________________________________________________________________________________________________
// DECLARE VARIABLES AND HASHPASSWORD FUNCTION

// declare the variable 'login', "attempt and "resultSpan" and connect it to the button in Registration.html.
var login = document.getElementById("login");
var attempt = 3;
var resultSpan = document.getElementById("loginResult");


// Insert the hashPassword function from Henriks example in order to hash the inputted password when the user logs in, to match with the stored hashed password.
function hashPassword(rawPassword){
var a = 1, c = 0, h, o;
if (rawPassword) {
  a = 0;
  
  // Loops through the password and replaces letters with numbers.
  for (h = rawPassword.length - 1; h >= 0; h--) {
    o = rawPassword.charCodeAt(h);
    a = (a << 6 & 268435455) + o + (o << 14);
    c = a & 266338304;
    a = c !== 0 ? a ^ c >> 21 : a;
  }
} 
return String(a); 
}


// Function to go through the User Data to match Username/Password
function logIn() {
   
  var username = document.getElementById("loginUserInput").value
  var password = document.getElementById("loginPasswordInput").value
  
// Loop that goes through the User Data to identify right or wrong Username/Password
  for (var i = 0; i < users.length; i++) {
      
      if (username == users[i].username && hashPassword(password) == users[i].password)  {

   //Push username and userId from logged in User in the local storage 
      localStorage.setItem("loggedInUser", users[i].userId);
      localStorage.setItem("loggedInUserName", users[i].username);

    // redirect to new html side for logged in users 
      if (window.location.host === "Index.html" || window.location.host === "Registration.html"){
        window.location = "Index.html";
      } else if (window.location.host === "Product.html") {
        window.location.reload;
      }
          
    }   
  }

  // Disabling fields after 3 attempts.
  if( attempt == 0){    
      document.getElementById("loginUserInput").disabled = true;
      document.getElementById("loginPasswordInput").disabled = true;
      document.getElementById("login").disabled = true; 
    return false;
  } else {

    attempt--;
    resultSpan.innerText = "You've entered a wrong username or password. You have left "+attempt+" attempt(s)."
  }
}


// if the user presses Enter while in the password box or Username box, it should trigger a click on the login button

var enter = function(e) {
  if (e.keyCode == 13) {
    // Run function logIn and return false.
    logIn();
    return false;
    }
  }
  
  document.getElementById("loginUserInput").addEventListener("keyup", enter);
  document.getElementById("loginPasswordInput").addEventListener("keyup", enter);
  
  login.onclick = logIn






  
  

