// We are declaring a new variable containing all the registered users from the local storage
var users = JSON.parse(localStorage.getItem("users"));

// We are initiating a function called "editUser". It is triggerd by a onclick in Subscription.html
function editUser () {
    

   // We are looping through all our users
    for (i=0; i < users.length; i++){

        // We are identifiying the loggedInUser by matching it with his unique userId
        // the Loop stops when it found the loggedInUser in the array with our registered users
         if(users[i].userId == localStorage.getItem('loggedInUser')){
            
            // When we have found the loggedInUser in our registered users array, we asign that user with new information
            users[i].username = document.getElementById('userName').value
            users[i].firstname = document.getElementById('firstName').value
            users[i].lastname = document.getElementById('lastName').value
            users[i].email = document.getElementById('email').value
        }   
    } 
    // Saves the new  user information in the localstorage
    localStorage.setItem("users", JSON.stringify(users));
    // localStorage.setItem("loggedInUserName", users[i].username);

    alert("Your User Information has been changed!");

    // Triggers the function (declared in Subscription.GetUserInfo) which updates the information in the table
    displayUserInformation()
    
    window.location = "index.html"; 
}
