
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
    constructor (diaperSize, diaperPrice, diapersADay, count){
        this.diaperSize = diaperSize;
        this.diaperPrice = diaperPrice // Price calculation here??
        this.diapersADay = diapersADay
        this.price = count
    }
    //Add a price-calculation function?

    createHTML (){
        return 
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
    diaperSize = document.getElementById("diaperSize").value;
    diaperType = document.getElementById("typeOfDiaper").value;
    diapersADay = document.getElementById("diapersADay").value;
    
// Push the values of the dropdown lists into the localStorage
lineItems.push(new lineItem(diaperSize, diaperType, diapersADay));
    console.log(lineItems);
    localStorage.setItem('lineItems', JSON.stringify(lineItems));
});



/* TODO: 
    1. Create something that gets the content of the localStorage and shows it as a cart
    2. Create something that can remove things from localStorage
    
*/


/* //Job of the function: create a new item and add it to the cart
function addItemToCart(name, size, price, count) {
    var item = new Item(name, size, price, count);
    lineItem.push(item) //-> add new item
}

addItemToCart("reuseable", 2, 20, 4);
console.log(cart);
addItemToCart("recycable", 2, 30, 50);
console.log(cart); */