//_________________________________________________________________________________________________
// Retrieve the current userID from localStorage and bind it to a variable.

var currentUserId = localStorage.getItem("loggedInUser");
var noUser = '"No User"'; // Localstorage: we need double qotes to be in the string and to match 
console.log(Boolean(currentUserId!==noUser))
//___________________________________________________________________________________________________
// LOGOUT. Function that clears the value within in the localStorage under the key "loggedInUser"

function logOut() {
    if (currentUserId!==noUser) { //runs all the time although statement is false as line six 
        var currentUserId = "No User";

        localStorage.setItem('loggedInUser', JSON.stringify(currentUserId));
        alert("You are now logged out")
        document.getElementById("logout").disabled = true; // does not work

        // Sets value of key loggedInUserName empty in localStorage
        // Automatically removes Username from index page
        localStorage.setItem("loggedInUserName", "");

        window.location = "Index.html";

    }  
    
   
    return false;
  
    }


//______________________________________________________________________________________________________
// SHOW AND UN-SHOW LOGIN AND LOGOUT -buttons.


//______________________________________________________________________________________________________
// SUBSCRIPTIONBUTTON. By default not visible (HTML, style.display = "none"), and function below shows it if condtion is true. 

var users = JSON.parse(localStorage.getItem("users"));

function displaySubscriptionButton() {
   
    // Loop over the users
    for (i=0; i < users.length; i++){

        // Check if the userId is equal to the loggedInUser
        if (users[i].userId == localStorage.getItem('loggedInUser')) {

            // Get the element by Id, and set's the style to show a block if condition above is true.. 
            document.getElementById('subscription').style.display = "block";
        } 
     }
       
}

displaySubscriptionButton();

