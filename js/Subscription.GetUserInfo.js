
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

    //Create Table reference
    var dvTable = document.getElementById('userInfo');
    dvTable.innerHTML = "";
    
    //Create Table
    var table = document.createElement("TABLE");
    table.border=1;

    //Init Header Row
    var columns = [];
    columns.push("Username","Firstname","Lastname","Email");
    var row = table.insertRow(-1);

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
       
    userInfo.appendChild(table);
}

// Calling the function in order to execute it 
    displayUserInformation();


//_________________________________________________________________________________________________________
// SHOW USER CART INFO
// 

// Declaring html as a empty string.
var html = "";

// Loop through the lineItems
for (i=0; i < users.length; i++ ){
    if(users[i].userId == localStorage.getItem('loggedInUser')){

        //Bind a variable to a new lineItem, with the attributes we want. These neeeed to be in the same order as the class constructor
        var cartLine = users[i].shoppingCart;
        console.log(cartLine);
        for (j = 0; j < cartLine.length; j++){

            //Defines the lines in the cart with a new LineItem. Since we have translated the info into JSON, we have to define it in the Class again when getting it back.
            var lines =  new LineItem (cartLine[i].itemId, cartLine[i].currentUserId, cartLine[i].diaperType, cartLine[i].diaperSize, cartLine[i].diapersADay, cartLine[i].diaperPrice, cartLine[i].cartlinePrice, );
            
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


    // Do the removal of the item through a splice. This function could probably be standardized.
        
    var index = lines.findIndex(function(item) {
        return item.itemId == JSON.parse(e.target.dataset.object).itemId
    })
   
    lines.splice(index, 1)
    
    localStorage.setItem("users", JSON.stringify(lines));
    alert("Item has been removed from cart");
    
    //automatically refresh after click
    onClick = ManualRefresh()


    })  

}

function ManualRefresh(){
    window.location.reload();
}

    

