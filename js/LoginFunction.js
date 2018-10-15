

// submit.onclick = function(){
// //   console.log("Button is clicked");
// // };

// Create a simple function 

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

var submit = document.getElementById('submit');


function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("pwd").value

    var attempt = 3; 

    for(i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in!!!")
            alert ("Login was successfull");
            window.location.href = "2index.html";  //redirecting to another page
            return; 
        }
    
        else {
            attempt --; // Stops at 2. does not work. <-------------- 
            alert ("You will die! "+ attempt +" attempt left");
            if (attempt == 0)
            return; 
        }
    break
    }
    console.log("incorrect username or password")
}

//Make it visible
var pwd = document.getElementById("pwd");
var eye = document.getElementById("eye");

eye.addEventListener("click",togglePass);

function togglePass(){

    eye.classList.toggle("active");

    (pwd.type == "password") ? pwd.type = "text" :
    pwd.type = "password";

    
}



submit.onclick = getInfo
// a lot of blank spaces 