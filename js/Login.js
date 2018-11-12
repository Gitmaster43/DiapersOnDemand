// Define users as "users" and get them from the local storage.
var users = JSON.parse(localStorage.getItem("users")); 

if(users === null){ // if there are nothing within the localstorage, the variable "users" will be initialized 
    // initialize empty user array 
    var users = [];
     // push user to the array
    users.push(new User("Johannes","Reisinger","Joe","reisingerjohannes@icloud.com","1234","004795008845","07051994","Something 14","2000","Frederiksberg", "1"));
    // Login with Anders does not work though; no idea why --> Joe works
    users.push(new User("Anders","Vartdal","Andy","anva18ae@student.cbs.dk","1234","","07051994","Something 14","2000","Frederiksberg", "2"));
    localStorage.setItem('users', JSON.stringify(users));
}




 // declare the variable 'login' and connect it to the button in Registration.html.
 var login = document.getElementById("login");
 var attempt = 3;

 

// Function to go through the User Data to match Username/Password
  function getInfo() {
   
    var username = document.getElementById("loggedUser").value
  
    var password = document.getElementById("loggedPassword").value
   console.log(password, username);
  // Loop that goes through the User Data to idetify right or wrong Username/Password
    for (var i = 0; i < users.length; i++) {
        
   console.log(users[i]);
    
        if (username == users[i].username && password == users[i].password) 
            {console.log (username + " is logged in!");
 
//   //Push username from logged in User in the local storage 
          localStorage.setItem("loggedInUser", users[i].firstName);
  
// //   redirect to new html side for logged in users 
window.location = "http://127.0.0.1:5500/html/ProductPage.html";
  
//   //Set authenticatedUserId to userId to enable to change aunthenticatedUserId = null into new value
          aunthenticatedUserId = users[i].userId;
          console.log (aunthenticatedUserId)
          }
     
  }
 
  
  // resultspan = document.getElementById("loginResult");
  // Disabling fields after 3 attempts.
  if( attempt == 0){    
      document.getElementById("loggedUser").disabled = true;
      document.getElementById("regPassword").disabled = true;
      document.getElementById("login").disabled = true; 
      
    return false;
  } else {

    attempt--;
    console.log(attempt);
    // resultSpan.innerText = "You have entered a wrong password. You have left"+attempt+" attempt(s)"
    alert = "Fucked";
  }
}


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
//           // Setting the maximum number of attempts to log in.
//           attempt = 3;
  
//           // Binding the resultspan to a textfield in html-file.
//           resultSpan = document.getElementById('loginResult');
  
     
//         // if username and password matches in users, the user is logged in.
//         if (user.username == inputUsername.value && users[i].password == hashedInputPassword) {
  
//           //   console.log(username + " is logged in!!!")
//           //   resultSpan.innerText = "Login was successful"; 
//           //   //await sleep(2000);
//           //   window.location.href = "C:\Users\Anders\OneDrive\Skule\CBS\IT\Progs\Project\DiapersOnDemand\Index.html";  //redirecting to the home-page
//           // // ../Index.html
//             return; 
//         }
  
            
//         if (attempt == 0) {
//         // Since the user has tried three times, we let the user know that he's been banned
//         resultSpan.innerText = "You've entered the wrong username and password three times. You've been banned from our system";
  
//         // TODO: Or to discuss:
//         // You have tried too many times, you are now redirected to forgotten password?
//         // Or just redirect the user to the forgotten password site?
  
//         // Disable the two input fields and the button in order for the user to not make any trouble
//         inputUsername.disabled = true;
//         inputPassword.disabled = true;
//         login.disabled = true;
        
//         // Return false to stop us from doing anything further.                   //why do we need to return false? If the disable proeperty is true it disables
//         return false;
  
//         } 
        
//         // else, decrement the attempts     
//         else {
//             attempt --; 
           
//             resultSpan.innerText = "You've entered a username or password that does not match our stored credentials";
  
//             console.log("incorrect username or password");
  
//         // Return false, since we do not have anything more to do
//         return false;
//        };
//     }
//   }
  
//   var enter = function(e) {
  
//   if (e.keyCode == 13) { //Always remember brackets. If you want more than one thing in a if-statement: brackets.
//     loggingIn();
//     //console.log("running");
//     return false;}
//   }
  
  // if the user presses Enter while in the password box, it should trigger a click on the login button
  // add an eventlistener for keypress on the enter button. function above.
  // It only listens to the passwordbox, but can listen to anything if we use "document"
  document.getElementById("loggedPassword").addEventListener("keyup", enter);
  
  
  login.onclick = getInfo
  
  
