//___________________________________________________________________________________________________________
// BIND LINEITEMS TO THE LOCALSTORAGE, OR INITIALIZE AN EMPTY ARRAY

// Defining the localStorage for the lineItems, so that we can store it. If there are nothing in the localStorage, we initialize and empty array. This is so that we can add things to the array
var lineItems = localStorage.getItem("lineItems") === null ? [] : JSON.parse(localStorage.getItem("lineItems"));

// Binding the users to a variable
var users = JSON.parse(localStorage.getItem('users')) 

/* 
_______________________________________________________________________________________________________________________________
WHEN CLICKING THE ADD TO CART BUTTON, WE ADD IT TO THE ARRAY LINEITEMS, AND THEN LOCALSTORAGE

*/

// Setting the currentUserId to the loggedInUser, or setting it as No User.
var currentUserId = localStorage.getItem("loggedInUser") === null ? '"No User"' : localStorage.getItem("loggedInUser");


// We get the button to add items to cart and get the values from the other inputs when that button is clicked
document.getElementById("addItemToCart").addEventListener("click", function(){
    
    // Bind all the inputs from the user and get the value from the input. 
    var diaperType = document.getElementById("chooseDiaper").value;
    var diaperSize = document.getElementById("diaperSize").value;
    var diapersADay = document.getElementById("diapersADay").value;
        
    // Add an itemId with a random number to have an Id for use later on.
    // Takes the randomized string of 36 letters and returns the 9 letters with and from the second index. The underscore means that it is only for internal use. 
    var itemId = '_' + Math.random().toString(36).substr(2, 9); 

    // Set an if-statement to get the price of the diapers
    if (diaperType === 'Reusable') {
        var diaperPrice = 40;
    } else if (diaperType === 'Recyclable') {
        var diaperPrice = 30;
    }

    // Push the values of the dropdown lists into the localStorage
    lineItems.push(new LineItem(itemId, currentUserId, diaperType, diaperSize, diapersADay, diaperPrice));
    
    localStorage.setItem('lineItems', JSON.stringify(lineItems)); 
});

/* 
_____________________________________________________________________________________________________________________________________
ADDING WHAT IS IN THE LINEITEM-ARRAY TO THE CART IN PRODUCTPAGE.html
for every object in the array lineItems, the function creatHTML is called and use the subscription array for showing it in HTML.
*/

// Declaring html as a empty string.
var html = "";

// Loop through the lineItems
for (i=0; i < lineItems.length; i++ ){

    //Bind a variable to a new lineItem, with the attributes we want. These neeeed to be in the same order as the class constructor
    //Since we have translated the info into JSON, and then translated back, we have to define it in the Class again when getting it.
    var cartLine = new LineItem (lineItems[i].itemId, lineItems[i].currentUserId, lineItems[i].diaperType, lineItems[i].diaperSize, lineItems[i].diapersADay, lineItems[i].diaperPrice, lineItems[i].cartlinePrice, );

    //Then we add the cartline that we created above to the html-string and call the function.
    html += cartLine.createHTML(); 
   
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

    // Do the removal of the item through a splice. 
        
    // Find the index of the item that we want with an "findIndex" callback function
    var index = lineItems.findIndex(function(item) {

        // The findIndex-fundtion goes over the itemId's and return the index of the item.itemId that is equal to the itemId in the local storage.
        return item.itemId == JSON.parse(e.target.dataset.object).itemId
    })

    // Splice the item that is the index, and only that.
    lineItems.splice(index, 1)
    
    // Set the remaining items in the localStorage.
    localStorage.setItem("lineItems", JSON.stringify(lineItems));
    alert("Item has been removed from cart");
    
    //automatically refresh after click
    onClick = ManualRefresh()


    })  

}

function ManualRefresh(){
    window.location.reload();
}


/* 
_______________________________________________________________________________________________________________________
THE PURCHASE BUTTON

*/

var purchaseButton = document.getElementById("purchaseButton")


//When clicking the purchase-button
purchaseButton.addEventListener("click", function(){

    // If user is not logged in, it has to logIn. 
    if (currentUserId === '"No User"'){
        alert("Please log in")
        return false;
    }

    // Take the current user and push the lineItems to his shoppingCart.
    for (i = 0; i < users.length; i++) {

        if(users[i].userId == currentUserId) {
            users[i].shoppingCart = cartLine
            
        }
    }

    // Take the contents of the current lineItems and push to the users shoppingCart array
    localStorage.setItem('users', JSON.stringify(users));

    // Lastly, redirect to the subscriptionpage where the user can see their purchase.
   window.location = "Subscription.html"

})
