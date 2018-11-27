
//___________________________________________________________________________________________________
// Declaring a variable containing all the registered users from the local storage
var users = JSON.parse(localStorage.getItem("users"));


//__________________________________________________________________________________________________
// FUNCTION FOR EDITING THE LOGGED IN USER

// Initiating a function called "editUser". It is triggerd by a onclick in Subscription.html
function editUser () {
    
    // Loop through all users
     for (i=0; i < users.length; i++){
         
         // Identifiying the loggedInUser by matching it with his unique userId
         // the Loop stops when it found the loggedInUser in the array with our registered users
          if(users[i].userId == localStorage.getItem('loggedInUser')){
             
             // When we have found the loggedInUser in our registered users array, we asign that user with new information
             users[i].username = document.getElementById('userName').value
             users[i].firstname = document.getElementById('firstName').value
             users[i].lastname = document.getElementById('lastName').value
             users[i].email = document.getElementById('email').value
             
             // Only in order to change the name in the top left corner to the changed userName
             changeUserName = document.getElementById('userName').value
         }   
    
     // Requirement for the user to type in something in the box in order to change it.            
     } if (document.getElementById('userName').value == "", 
           document.getElementById('firstName').value == "" ,
           document.getElementById('lastName').value == "",
           document.getElementById('email').value =="") 
         {
 
             alert("Type in your information");
             return;
         
         }
 
     // Saves the new  user information in the localstorage
     localStorage.setItem("users", JSON.stringify(users));
     localStorage.setItem("loggedInUserName", changeUserName);
 
     alert("Your User Information has been changed!");
 
     // Triggers the function (declared in Subscription.GetUserInfo) which updates the information in the table
     displayUserInformation();
   
     window.location.reload; 
 }


