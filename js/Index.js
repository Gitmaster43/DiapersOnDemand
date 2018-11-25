

var currentUserId = localStorage.getItem("loggedInUser");
var noUser = '"No User"';


//function that clears the value within in the localStorage under the key "loggedInUser"
function logOut() {
    if (currentUserId!==noUser) {
        var currentUserId = "No User";
        localStorage.setItem('loggedInUser', JSON.stringify(currentUserId));
        alert("You are now logged out")
        document.getElementById("logout").disabled = true; 

        // Sets value of key loggedInUserName empty in localStorage
        // Automatically removes Username from index page
        localStorage.setItem("loggedInUserName", "");

        window.location = "index.html"; 
    }  
    return false;
    }


// __________________________________________________________________________ //
// Only see subscription button on index.html when user is logged in

var users = JSON.parse(localStorage.getItem("users"));

function displaySubscriptionButton() {
   

    for (i=0; i < users.length; i++){

 
        if (users[i].userId == localStorage.getItem('loggedInUser')) {
            document.getElementById('subscription').style.display = "block";
        } 
     }
       
}

displaySubscriptionButton();

