

var currentUserId = localStorage.getItem("loggedInUser");
var noUser = '"No User"';


//function that clears the value within in the localStorage under the key "loggedInUser"
function logOut() {
    if (currentUserId!==noUser) {
        var currentUserId = "No User";
        localStorage.setItem('loggedInUser', JSON.stringify(currentUserId));
        alert("You are now logged out")
        document.getElementById("logout").disabled = true; 

        
        localStorage.setItem("loggedInUserName", "");
        window.location = "index.html"; 
    }  
    return false;
    }


//idea, to get 
var usersInLocalStorage = JSON.parse(localStorage.getItem("users"));
// var currentUsersId = usersInLocalStorage[i].userId;

for (i = 0; i < usersInLocalStorage.length; i++) {
    if (usersInLocalStorage[i].userId == currentUserId){ //det er kun når denne statement er sand, det skal være muligt at logge af, ellers skal den sige "du er ikke logget på"
            // console.log("userID matches")
            
    }  
}

for (i = 0; i < usersInLocalStorage.length; i++) {
    if ((usersInLocalStorage[i].userId !== currentUserId)){
    // console.log("not logged in");
    break;
}
}
// console.log(currentUsersId); //this gives me the password of the user




// if (localStorage.getItem(LoggedInUser) == ) {
    
// // }