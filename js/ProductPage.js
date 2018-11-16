// Create a  function that waits for the page to render before aaall the content has finished loading.

if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    //Run the page function of some sort?? Source: https://www.youtube.com/watch?v=YeFzkC2awTM at 41st minute
}


//create class "product" - within dropdown bar of size, number of diapers, priceCalc

class product {
    constructor (/* diaperSize ,*/productID, productType, productPrice, productDescription) {
        /* this.diaperSize = diaperSize; */
        this.productID = productID;
        this.productType = productType;
        this.productPrice = productPrice; 
        this.productDescription = productDescription;
        
    }

}

var products = [];


//Pushing the two products to the Class
products.push(new product(0, "Reusable", 40,));
products.push(new product(1, "Recyclable", 30,));

//Checking if the pushing of products actually worked.
//console.log(products);

// Create a box in HTML that shows the price per diaper, which changes with which type the user chooses in the first dropdown


//create an class for lineItem to define the attributes the lineItem can have.
class lineItem {
    constructor (type, size, numberADay, price  ){
        this.diaperType = type;
        this.diaperSize = size;
        this.diapersADay = numberADay;
        this.diaperPrice = price;
        
        this.totalDiaperPrice = []; //Can we have a price-function here? Or on the one above?
    }
    
    
    //Creating a function that creates a table row with data from the lineItem
    createHTML(subscription){
        return "<tr><td>"+ this.diaperType + "</td><td>" + this.diaperSize + "</td><td>" 
        + this.diapersADay + "</td><td>" + this.diaperPrice + "</td></tr>"; //<td>" + this.button + "</td>//Button to remove the item from the list
    }

} 

// Defining the localStorage for the lineItems, so that we can store it
var lineItems = JSON.parse(localStorage.getItem("lineItems"));

// If there are nothing in the localStorage, we initialize and empty array. This is so that we can add things to the array
if(lineItems === null){
    var lineItems = [];
}

// We get the button to add items to cart and get the values from the other inputs when that button is clicked
document.getElementById("addItemToCart").addEventListener("click", function(){
    diaperType = document.getElementById("typeOfDiaper").value;
    diaperSize = document.getElementById("diaperSize").value;
    diapersADay = document.getElementById("diapersADay").value;
    diaperPrice = totalDiaperPrice();
     
    
// Push the values of the dropdown lists into the localStorage
lineItems.push(new lineItem(diaperType, diaperSize, diapersADay, diaperPrice));
    console.log(lineItems);
    localStorage.setItem('lineItems', JSON.stringify(lineItems));
});

console.log(lineItems);

// Creating an array to have in the table
var subscription = [];


//for every object in the array the function creatHTML is called
var html = "";

for (i=0; i < lineItems.length; i++ ){
    var cartLine = new lineItem (lineItems[i].diaperType, lineItems[i].diaperSize, lineItems[i].diapersADay);
    html += cartLine.createHTML(subscription); 
}

// The table body will contain the html plus objects that were run by the createHTML function
table = document.getElementById('tableCart');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;

//Addeventlistener('input') makes it trigger every time the input changes
//Using the function ".include" you can query on letters in a filter
// Setting the html = '' inside the loop, resets the table every time the eventlistener executes.

// How to add to cart: 

function addToCart () {
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
addToCart(subscription[0]);

//TODO: Create a price calculation for the diaperprices


// Take the value of Type, find the price in the object, and multiply it with the quantity of diapers
// Need a loop to loop through the list


//Questionable: Should we add to local storage while we add to cart, or after? 

    
    
//console.log (diaperPrice);





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

//Have a unique ID of a user, and a unique ID of the product


/* TODO: 
    1. Create something that gets the content of the localStorage and shows it as a cart
    2. Create something that can remove things from localStorage
    
*/

