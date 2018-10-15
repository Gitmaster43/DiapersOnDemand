

// submit.onclick = function(){
// //   console.log("Button is clicked");
// // };

// Create a simple function 

// Creates an array that has the hardcoded users(objects).
var objPeople = [

    {
        
        username: 'Joe',
        password: '1234'
    },
    {
    username: 'matt',
    password: 'acedemy'

     },

     {
         username: 'chris',
         password: 'forever'
     }
]

// declare the variable 'submit' and connect it to the button in index.html.
var submit = document.getElementById('submit');

// The function that gets information from the objPeople array and checks if it fits.
function getInfo() {
    // Declaring the variables username and password, and connect them to the buttons in index.html.
    var username = document.getElementById("username").value
    var password = document.getElementById("pwd").value

    // Setting the maximum number of attempts to log in.
    var attempt = 3; 

    // Creating a for-loop to loop through the objPeople array.
    for(i = 1; i < objPeople.length; i++) {

        // if username and password matches in objPeople, the user is logged in.
        if (username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in!!!")
            alert ("Login was successful"); 
            window.location.href = "html/LoginPage.html";  //redirecting to another page
            return; 
        }
    
        // else, decrement the attempts and alert the user that he has fewer attempts left
        // user only have 3 attempts
        else {
            attempt--; // If wrong, it just continues to count downwards. <-------------- 
            alert ("You will die! "+ attempt +" attempts left");
            
        }
      if (attempt == 0) 
            alert ("You have spent all your attempts. Please try again later") ;
            
                
    console.log("incorrect username or password") }
    
}   
function enter(e){
    console.log("running");
    if (e.keyCode == 13) { // 13 is code for the key 'enter'
        getInfo();
        return false;}

}
// if the user presses Enter while in the password box, it should trigger a click on the login button
document.getElementById("pwd").addEventListener('keypress', enter);



 

// Make the password visible
// Declare the variables andconnect them to the password-button and eye-button
var pwd = document.getElementById("pwd");
var eye = document.getElementById("eye");

// add a listener on the eye that responds to clicks and execute the function togglePass
eye.addEventListener("click",togglePass);

// 
function togglePass(){

    eye.classList.toggle("active");

    (pwd.type == "password") ? pwd.type = "text" :
    pwd.type = "password";

    
}



submit.onclick = getInfo
// a lot of blank spaces 