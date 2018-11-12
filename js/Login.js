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

// declare the variable 'login', "attempt and "resultSpan" and connect it to the button in Registration.html.
 var login = document.getElementById("login");
 var attempt = 3;
 var resultSpan = document.getElementById("loginResult");
 
 // Function to go through the User Data to match Username/Password
  function getInfo() {
   
    var username = document.getElementById("loggedUser").value
    var password = document.getElementById("loggedPassword").value
  
  // Loop that goes through the User Data to idetify right or wrong Username/Password
    for (var i = 0; i < users.length; i++) {
        
        if (username == users[i].username && password == users[i].password) 
            {console.log (username + " is logged in!");
 
//   //Push username from logged in User in the local storage 
          localStorage.setItem("loggedInUser", users[i].lastname);
  
// //   redirect to new html side for logged in users 
window.location = "ProductPage.html"; 
  
//   //Set authenticatedUserId to userId to enable to change aunthenticatedUserId = null into new value
          aunthenticatedUserId = users[i].userId;
          console.log (aunthenticatedUserId)
          }   
  }
 // Disabling fields after 3 attempts.
  if( attempt == 0){    
      document.getElementById("loggedUser").disabled = true;
      document.getElementById("loggedPassword").disabled = true;
      document.getElementById("login").disabled = true; 
    return false;
  } else {

    attempt--;
    resultSpan.innerText = "You've entered a wrong username or password. You have left "+attempt+" attempt(s)."
  }
}

// if the user presses Enter while in the password box or Username box, it should trigger a click on the login button

var enter = function(e) {
  if (e.keyCode == 13) { //Always remember brackets. If you want more than one thing in a if-statement: brackets.
    getInfo();
    //console.log("running");
    return false;}
  }
  
  document.getElementById("loggedUser").addEventListener("keyup", enter);
  document.getElementById("loggedPassword").addEventListener("keyup", enter);
  
  login.onclick = getInfo

// The function that gets information from the users array and checks if it fits.
// Using "async" in order to make it 'await (milliseconds)' before the redirection <-- TODO: Google what is async
// function loggingIn() {

//   // Declaring the variables username and password, and connect them to the buttons in index.html.
//   var inputUsername = document.getElementById("loggedUser")
//   var inputPassword = document.getElementById("loggedPassword")
  
//   if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
//     // We set the resultspan with a new text and return false to get out of this function
//     resultSpan.innerText = "You need to enter a username and password in order to use our system";
//     return false;
//   }
  
//     // Creating a for-loop to loop through the users array.
//     for(i = 0; i < users.length; i++) {
  
//         // Declaring a user for easy use.
//         var user = new User(users[i].firstname, users[i].lastname,users[i].username, users[i].email, users[i].password, users[i].phonenumber, users[i].dateofbirth, users[i].streetname, users[i].postalnumber, users[i].city);            
  
//         //Copied from Henriks login example
//         // We use a try-catch for the hash-password function, since something could go wrong.
//         try {
  
//             // We try to create a variable with the hashed version of the inputPassword
//             var hashedInputPassword = user.hashPassword(inputPassword.value);
            
//             //console.log(hashedInputPassword);
//         } catch (error) {
  
          
  
//             // We console log any error that might have been thrown
//             console.log(error);                                     //for what reason? If there is a error, what can use that information to? 
//         }
//           
  

// //Trigger Login button by clicking Enter
// document.getElementById("loggedUser").addEventListener("keyup", function(event) {
//   event.preventDefault();
//   if (event.keyCode == 13)
//       login.onclick();
// });
// document.getElementById("loggedPassword").addEventListener("keyup", function(event) {
//   event.preventDefault();
//   if (event.keyCode == 13)
//       login.onclick();
// });



  
  

