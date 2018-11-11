
//create class "product" - within dropdown bar of size, number of diapers, priceCalc

class product {
    constructor (diaperSize, diaperPrice, diaperDescription, diaperType) {
        this.diaperSize = diaperSize;
        this.diaperPrice = diaperPrice; // Add a function here, or just the two parameters?
        this.diaperDescription = diaperDescription;
        this.diaperType = diaperType;
    }

}


//create an class for lineItem to define the attributes the lineItem can have.
class lineItem {
    constructor (diaperType, diaperSize, diaperPrice, diapersADay, count){
        this.diaperType = diaperType;
        this.diaperSize = diaperSize;
        this.diaperPrice = diaperPrice; // Price calculation here??
        this.diapersADay = diapersADay;
        this.price = count;
    }
    //Add a price-calculation function?

    createHTML(){
        return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + this.button + "</td></tr>";
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
    
// Push the values of the dropdown lists into the localStorage
lineItems.push(new lineItem(diaperType, diaperSize, diapersADay));
    console.log(lineItems);
    localStorage.setItem('lineItems', JSON.stringify(lineItems));
});




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


