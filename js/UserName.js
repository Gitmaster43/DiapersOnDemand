// Shows Username on index in the left corner when Users logs in //
function showUserName() {

    // Defines variable showUserName. Gets information by id "showUserName" from index.html
    var showUserName = document.getElementById("showUserName");

    // We are getting the username from localStorage
    username = localStorage.getItem("loggedInUserName")
    // We are showing the logged in UserName indicated by the $ sign 
    showUserName.textContent = `${username}`

}

// Calling the function
showUserName();

// UserName disappears when Users logsout //
function hideUserName() {

    var hideUserName = document.getElementById("hideUserName");
    username = localStorage.getItem("loggedInUserName")
    hideUserName.textContent = `${username}`
    

}
// Calling the function
hideUserName();


// Redirect Users to Subscription when he clicks on his Username // 

// Function is triggerd by onclick which is defined in index.html
function redirctSubscription () {

    window.location = "Subscription.html"; 

}

