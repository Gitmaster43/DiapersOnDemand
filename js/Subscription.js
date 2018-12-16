
//______________________________________________________________________________________________________
// Bind users from localStorage to a variable
var users = JSON.parse(localStorage.getItem("users"));   

//______________________________________________________________________________________________________
// DISPLAY USER INFORMATION

// We are creating a function which depicts the loggedInUser's personal inforamtion in a table
function displayUserInformation() {
   
   // We are looping through all our registered users and pick the loggedInUser by comparing it with his unique userID
        for (i=0; i < users.length; i++){
            if(users[i].userId == localStorage.getItem('loggedInUser')){

               // We are storing this information in the variable activeUser
                var activeUser = users[i]

                // Calling the function "showTable" with the information of the activeUser (=loggedInUser)
                showTable(activeUser);

            }          
        }     
    }


//_______________________________________________________________________________________________________
// FUNCTION FOR SHOWING THE TABLE

// We are creating the function for our Table in which the loggedInUser's information will be shown
function showTable(user) {

    // //Create Table reference
    // var dvTable = document.getElementById('userInfo'); // Nothing: we don't need it bruv
    // dvTable.innerHTML = "";
    
    //Create Table
    var table = document.createElement("TABLE");
    table.border=1;

    //Init Header Row
    var columns = [];
    columns.push("Username","Firstname","Lastname","Email");
    var row = table.insertRow(-1);//-1: indicates it is the last row, index

    //Fill out Header Row
    for (var i =0; i<columns.length; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = columns[i];
        row.appendChild(headerCell);
    }

    //User Row
        row = table.insertRow(-1);

        var cell1 = row.insertCell(-1);
        cell1.innerHTML = user['username'];
        var cell2 = row.insertCell(-1);
        cell2.innerHTML = user['firstname'];
        var cell3 = row.insertCell(-1);
        cell3.innerHTML = user['lastname'];
        var cell4 = row.insertCell(-1);
        cell4.innerHTML = user['email'];
       
    userInfo.appendChild(table); // could also write dvTable
}

// Calling the function in order to execute it 
    displayUserInformation();


//__________________________________________________________________________________________________
// FUNCTION FOR EDITING THE LOGGED IN USER

// Initiating a function called "editUser". It is triggerd by a onclick in Subscription.html
function editUser () {
    
    // Loop through all users
     for (i=0; i < users.length; i++){
         
         // Identifiying the loggedInUser by matching it with his unique userId
         // the Loop stops when it found the loggedInUser in the array with our registered users
          if(users[i].userId == localStorage.getItem('loggedInUser')){
             
             // When we have found the loggedInUser in our registered users array, we asign that user with new information
             users[i].username = document.getElementById('userName').value
             users[i].firstname = document.getElementById('firstName').value
             users[i].lastname = document.getElementById('lastName').value
             users[i].email = document.getElementById('email').value
             
             // Only in order to change the name in the top left corner to the changed userName
             changeUserName = document.getElementById('userName').value
         }   
    
     // Requirement for the user to type in something in the box in order to change it.            
     } if (document.getElementById('userName').value == "", 
           document.getElementById('firstName').value == "" ,
           document.getElementById('lastName').value == "",
           document.getElementById('email').value == "") 
         {
 
             alert("Type in your information");
             return;
         
         }
 
     // Saves the new  user information in the localstorage
     localStorage.setItem("users", JSON.stringify(users));
     localStorage.setItem("loggedInUserName", changeUserName);
 
     alert("Your User Information has been changed!");
 
     // Triggers the function (declared in Subscription.GetUserInfo) which updates the information in the table
     displayUserInformation();
   
     window.location.reload(); 
 }


//_________________________________________________________________________________________________________
// SHOW USER CART INFO
// 

// Declaring html as a empty string.
var html = "";

// Loop through the lineItems
for (i=0; i < users.length; i++ ){
    if(users[i].userId == localStorage.getItem('loggedInUser')){
       
        console.log(users[i].shoppingCart);
        //Bind a variable to a new lineItem, with the attributes we want. These neeeed to be in the same order as the class constructor
        var cartLine = users[i].shoppingCart;
        console.log(cartLine);
        for (j = 0; j < cartLine.length; j++){

            //Defines the lines in the cart with a new LineItem. Since we have translated the info into JSON, we have to define it in the Class again when getting it back.
            var lines =  new LineItem (cartLine[i].itemId, cartLine[i].currentUserId, cartLine[i].diaperType, cartLine[i].diaperSize, cartLine[i].diapersADay, cartLine[i].diaperPrice, cartLine[i].cartlinePrice);
            console.log(lines)
            //Then we add the lines variable that we created above to the html-string and call the function.
            html += lines.createHTML(); 
        }
    }
}

// Get the table from the product.html, and push the html string to the page HTML table. 
table = document.getElementById('tableCart');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;

/* 
__________________________________________________________________________________________________________
THE REMOVE BUTTON(S):

*/

// Bind the HTML-buttons to a variable.
var removeFromCartButtons = document.getElementsByClassName('removeFromList');

// Loop through the buttons and find the clicked
for (var i = 0; i < removeFromCartButtons.length; i++) {
    removeFromCartButtons[i].addEventListener("click", function(e){

        // Loop through the lineItems
     for (j=0; j < users.length; j++ ){
        if(users[j].userId == localStorage.getItem('loggedInUser')){
        // Do the removal of the item through a splice. This function could probably be standardized.
          
        var index = users[j].shoppingCart.findIndex(function(item) {
            return item.itemId == JSON.parse(e.target.dataset.object).itemId //JSON.parse: object we clicked on 
        })
        
        users[j].shoppingCart.splice(index, 1)
        
        
        localStorage.setItem("users", JSON.stringify(users));
        alert("Item has been removed from cart");
        
        //automatically refresh after click
        onClick = ManualRefresh()

        }
     }

    })

}

function ManualRefresh(){
    window.location.reload();
}

    

