// Shows Username on index.html in the left corner when Users logs in //
// Function is also executed when user logs out and therefore removes username from index.html automatically. 
// Reason: by clicking logout, loggedInUserName (line10) within local storage gets empty and overwrites the username with an empty string
function showUserName() {

    // Defines variable showUserName. Gets information by id "showUserName" from index.html
    var showUserName = document.getElementById("showUserName");

    // We are getting the username from localStorage
    username = localStorage.getItem("loggedInUserName")
    // We are showing the logged in UserName indicated by the $ sign 
    showUserName.textContent = username

}

// Calling the function
showUserName();

// Redirect Users to Subscription when he clicks on his Username // 

// Function is triggerd by onclick which is defined in index.html
function redirctSubscription () {

    window.location = "Subscription.html"; 
}

