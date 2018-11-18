/*
Problem1: When adding to cart, the values is not stored in localStorage with the key we have defined, the values is only shown as a key.
*/


// Defining the localStorage for the lineItems, so that we can store it
var lineItems = JSON.parse(localStorage.getItem("lineItems"));


// If there are nothing in the localStorage, we initialize and empty array. This is so that we can add things to the array
if(lineItems === null){
    var lineItems = [];
}

// TODO: Can we make this into a function? Or do it inside the Class lineItem? Would that be wise?


// We get the button to add items to cart and get the values from the other inputs when that button is clicked
document.getElementById("addItemToCart").addEventListener("click", function(){
    diaperType = document.getElementById("chooseDiaper").value;
    diaperSize = document.getElementById("diaperSize").value;
    diapersADay = document.getElementById("diapersADay").value;
// totalDiaperPrice = totalDiaperPrice();
    
    
// Push the values of the dropdown lists into the localStorage
lineItems.push(new lineItem(diaperType, diaperSize, diapersADay,));
    
    localStorage.setItem('lineItems', JSON.stringify(lineItems));
});


// Creating an array to have in the table
var subscription = [];



//for every object in the array lineItems, the function creatHTML is called and use the subscription array for showing it in HTML.
var html = "";

// Loop through the lineItems
for (i=0; i < lineItems.length; i++ ){

    //Bind a line in the cart to a new lineItem, with the attributes we want. These neeeed to be in the same order as the class constructor
    var cartLine = new lineItem (lineItems[i].diaperType, lineItems[i].diaperSize, lineItems[i].diapersADay, lineItems[i].diaperPrice,);

    //Then we add the cartline that we created above to the html-string.
    html += cartLine.createHTML(subscription); 
}


// Then we get the table from the HTML and bind the html-string from above to it. 
table = document.getElementById('tableCart');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;


 

console.log(lineItems);


/*
Problem2: When adding to the cart, we're getting the price of diapers from "ProductClass.js" in the "LineItem.js", and it only gets the price 
from the first item in products-array and we then push that price to the cart. When we then add a second item to the cart, it takes the 
second price from products-array. If we would want to add a third product, we only get the error that there is no more Prices to take from.

Problem3: The diaperType is only Recyclable when you add it to the cart (Could be related to the one above)
*/



//Have a unique ID of a user, and a unique ID of the product - Or lineItem?

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

    
    
//console.log (diaperPrice);






/* //Making a function that calculates the price of the order
function priceCalc(price){
    var price = products.productPrice * lineItems.numberADay;
    console.log(price);
}  */




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

// Stolen from Isabella, not sure why it doesn't work.

/* var buttons = document.getElementsByClassName('removeFromList');

// On click, wish is removed from the list by updating the lineItems variable which is then updated in the local storage
for (u=0; u < buttons.length; u++){
    buttons[u].addEventListener('click', function(e){
        var name = JSON.parse(this.dataset.object).name;
        lineItems = lineItems.filter(function (item) {
            if(item.id[0].userName == loggedIn[0].userName) {
                return item.name !== name;
            } else {
                return item
            }
        
        });
        
        var listString = JSON.stringify(lineItems);
        localStorage.setItem('lineItems', listString);

        //automatically refresh after click
        onClick=ManualRefresh()
        function ManualRefresh(){
            window.location.reload();
        }

        // Save list to localstorage, but remember to parse it to json first
        console.log(this);
    }); 

    
   
}; */


