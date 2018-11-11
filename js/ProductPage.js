
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
    constructor (type, size, price, numberADay, priceCalc){
        this.diaperType = type;
        this.diaperSize = size;
        this.diaperPrice = price;
        this.diapersADay = numberADay;
       // this.price = this.function(priceCalc); //Or is this the calculation?
    }
    
    

    
    //Creating a function that creates a table row with data from the lineItem?
    createHTML(){
        return "<tr><td>"+ this.diaperType + "</td><td>" + this.diaperSize + "</td><td>" + this.diaperPrice + "</td><td>" + this.button + "</td></tr>";
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
    diaperPrice = document.getElementById("price").value
    diapersADay = document.getElementById("diapersADay").value; 
    
// Push the values of the dropdown lists into the localStorage
lineItems.push(new lineItem(diaperType, diaperSize, diaperPrice, diapersADay));
    console.log(lineItems);
    localStorage.setItem('lineItems', JSON.stringify(lineItems));
});





//Making a function that calculates the price of the order
function priceCalc(price){
    var price = products.productPrice * lineItems.numberADay;
    console.log(price);
} 



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


