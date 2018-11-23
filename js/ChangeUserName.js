

// username = localStorage.getItem("loggedInUserName")


// localStorage.setItem("loggedInUserName", JSON.stringify(users[i].username));


var users = JSON.parse(localStorage.getItem("users"));

// We are initiating a function called "editUser". It is triggerd by a onclick in Subscription.html
function changeUserName() {
    
        console.log("ola")
            
            // When we have found the loggedInUser in our registered users array, we asign that user with new information
            users[i].username = document.getElementById('userName').value


               // Saves the new  user information in the localstorage
            localStorage.setItem("loggedInUserName", users[i].username);
        }   
    
 changeUserName (); 

