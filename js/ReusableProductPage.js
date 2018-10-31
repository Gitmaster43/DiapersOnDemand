
//create class "product" - within dropdown bar of size, number of diapers, priceCalc

//creates function for dropdown for diaperSize
function diaperSize() {
    var diaperSize=document.getElementById(diaperSize);
}

//create an empty array, because default cart is empty
class lineItem {
    constructor (name, size, price, count){
        this.name = name
        this.size = size
        this.price = price
        this.price = count
    }
}


//Job of the function: create a new item and add it to the cart
function addItemToCart(name, size, price, count) {
    var item = new Item(name, size, price, count);
    lineItem.push(item) //-> add new item
}

addItemToCart("reuseable", 2, 20, 4);
console.log(cart);
addItemToCart("recycable", 2, 30, 50);
console.log(cart);