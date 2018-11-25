// Could also write the defining of things in localStorage as:
var lineItems = localStorage.getItem("lineItems") !== null ? JSON.parse(localStorage.getItem("lineItems")) : [];

// Defining the localStorage for the lineItems, so that we can store it
var lineItems = JSON.parse(localStorage.getItem("lineItems"));
var users = JSON.parse(localStorage.getItem('users'))

// If there are nothing in the localStorage, we initialize and empty array. This is so that we can add things to the array
if(lineItems === null){
    var lineItems = [];
}

/* 
_______________________________________________________________________________________________________________________________
WHEN CLICKING THE ADD TO CART BUTTON, WE ADD IT TO THE ARRAY LINEITEMS, AND THEN LOCALSTORAGE

*/

// Setting the currentUserId to the loggedInUser, or setting it as No User.
var currentUserId = localStorage.getItem("loggedInUser") !== null ? JSON.parse(localStorage.getItem("loggedInUser")) : 'No User';



// We get the button to add items to cart and get the values from the other inputs when that button is clicked
document.getElementById("addItemToCart").addEventListener("click", function(){
    var diaperType = document.getElementById("chooseDiaper").value;
    var diaperSize = document.getElementById("diaperSize").value;
    var diapersADay = document.getElementById("diapersADay").value;
        
    var itemId = '_' + Math.random().toString(36).substr(2, 9); 


    // Could do a for-loop if we want to add more products and prices, but if we only have two it would make sense to only do it hardcoded.
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



console.log(lineItems);

/* 
_____________________________________________________________________________________________________________________________________
ADDING WHAT IS IN THE LINEITEM-ARRAY TO THE CART IN HTML
*/

//for every object in the array lineItems, the function creatHTML is called and use the subscription array for showing it in HTML.
var html = "";

// Loop through the lineItems
for (i=0; i < lineItems.length; i++ ){

    //Try to create an item in lineItems in stead for a new array, and add that to the html

    //Bind a line in the cart to a new lineItem, with the attributes we want. These neeeeed to be in the same order as the class constructor
    var cartLine = new LineItem (lineItems[i].itemId, lineItems[i].currentUserId, lineItems[i].diaperType, lineItems[i].diaperSize, lineItems[i].diapersADay, lineItems[i].diaperPrice, lineItems[i].cartlinePrice, );

    //Then we add the cartline that we created above to the html-string.
    html += cartLine.createHTML(); 
   
}


// Get the table from the product.html, and push the html string to the page HTML table. 
table = document.getElementById('tableCart');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;







`/ To do: 
1. Make the remove-button work. 
Comments from Bella: Instead of having a function that removes the lineItem, you have a function that filters the list to the ones you want to 
leave, and then override the current localStorage lineItems with these two. 
I.e. Two ways of doing it.
2. Create a purchase-button that sends you to subscription site (or a purchase site?) 
3. Make an if statement connected to the purchase button: If lineitem ID is "No User", you have to log in and this should change the currentUserId to the math.random thing
 
Registration todo:
1. User cannot create if the requirements is not met
2. Check if the user already exists
`

/* 
__________________________________________________________________________________________________________
THE REMOVE BUTTON:

*/

var removeFromCartButtons = document.getElementsByClassName('removeFromList');

// Loops through the buttons and find the clicked
for (var i = 0; i < removeFromCartButtons.length; i++) {
    removeFromCartButtons[i].addEventListener("click", function(e){

// Do the removal of the item through a splice. 
    // Find the index of clicked element
    //alert(i);

    var index = lineItems.findIndex(function(item) {
        return item.itemId == JSON.parse(e.target.dataset.object).itemId
    })
   
    //removeItem(lineItems, index)
    lineItems.splice(index, 1)
    
    localStorage.setItem("lineItems", JSON.stringify(lineItems));
    alert("Item has been removed from cart");
    
    //automatically refresh after click
    onClick = ManualRefresh()


    })  

}

/* removeItem(user, 0)

const removeItem = function (list, index) {
    list.splice(index,1)
} */

function ManualRefresh(){
    window.location.reload();
}


/* 
_______________________________________________________________________________________________________________________
THE PURCHASE BUTTON

1. Link to the button in HTML
2. If the user is not logged in, he cannot proceed.
3. Taking what is in the local storage and take it with you to subscription page?
4. redirect to subscription page

*/

var purchaseButton = document.getElementById("purchaseButton")


//When clicking the purchase-button
purchaseButton.addEventListener("click", function(){

    // If user is not logged in, it has to logIn. 
    if (currentUserId === "No User"){
        alert("Please log in")
        return false;
    }

    // Take the current user and push the lineItems to his shoppingCart.
    for (i=0; i<users.length;i++) {
        if(users[i].userId == currentUserId) {
            users[i].shoppingCart = lineItems
            console.log(users[i].shoppingCart)
        }
    }


    // Take the contents of the current lineItems and push to the users shoppingCart array
    

    // Lastly, redirect to the subscriptionpage where the user can see their purchase.
   window.location = "Subscription.html"

})



// Problem is, that i always is the last lineItem on the list.


//Need to calculate the price first, then can do the function under.


/* function calculateTotalCart() {
    var total = 0
    for(i=0; i < this.lineItems.length; i++) {
        total += this.lineItems[i].price
    }
    return "<tr><td>Total Amount:</td><td></td><td></td><td>" + total + "</td></tr>";
}
 

calculateTotalCart(); */






//Addeventlistener('input') makes it trigger every time the input changes
//Using the function ".includes" you can query on letters in a filter
// Setting the html = '' inside the loop, resets the table every time the eventlistener executes.

// How to add to cart: 

/* function addToCart () {
    // Binding the logged in user to a item, which needs a function to declare who is logged in.
    var loggedIn = localStorage.getItem('loggedIn');


    // Loop through the users to check if the logged in is a user, and then push what is in the cart to the class of the specific user.
    for(i=0; i < users.length; i++) {
        if(loggedIn.firstName == users[i].firstName) {
            users[i].cartLine.push(subscription);
        }
    }

}

//Trigger the function
addToCart(subscription[0]); */

//TODO: Create a price calculation for the diaperprices


// Take the value of Type, find the price in the object, and multiply it with the quantity of diapers
// Need a loop to loop through the list


//Questionable: Should we add to local storage while we add to cart, or after? 



//Notes from Marten Exercise
// In order to get an item from localstorage you just need getItem('key'), i.e. you just need the key of the object

// Use a forEach loop to iterate on the contents of the array, which you get into your code by the getItem () function

// Marten:
// Add a property of the user can be the shopping cart, which he can add or remove
// Or you could 
/* 
shoppingcart = {
    products: [],
    totalAmount:XX,
    amountOfProducts:XX,
} */
// Can have a class of shoppingCart and also have the properties within the object User.



/* // TODO: Create the remove button in HTML
// Bind the buttons to remove from cart to the removeCartItemsButtons object.
var removeCartItemsButtons = document.getElementById("removeFromCartButtons")

// Loop through the buttons and console log Clicked whenever a button in clicked. Can change this later.
for (var i = 0; i < removeCartItemsButtons.length; i++) {
    var button = removeCartItemsButtons[i];

    // Add an event-listener to look for the click on the button
    button.addEventListener("click", function(event) {
        // Bind the target of the event (aka. click)
        var buttonClicked = event.target;
        //Link the buttonClicked to the parent element (the div it is in, in HTML) and then to the parent element/div again with a remove function to take it away.
        buttonClicked.parentElement.parentElement.remove();
    })
}
 */






