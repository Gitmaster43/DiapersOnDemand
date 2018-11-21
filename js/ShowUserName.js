// Only show Username if user is logged in


function showUserName () {
var showUserName = document.getElementById("showUserName");

username = localStorage.getItem("loggedInUserName")
showUserName.textContent = `${username}`

}

showUserName ();

function hideUserName () {

    var hideUserName = document.getElementById("hideUserName");
    username = localStorage.getItem("loggedInUserName")
    hideUserName.textContent = `${username}`

}


hideUserName ();



