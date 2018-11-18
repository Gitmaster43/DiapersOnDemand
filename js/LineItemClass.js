

// Create a box in HTML that shows the price per diaper, which changes with which type the user chooses in the first dropdown
/* 
function totalDiaperPrice(){
    
    //Loop through the products
    for (i=0; i > products.length; i++)
    
        if 

      this.diaperPrice = this.productPrice * this.numberADay;
    
     return this.diaperPrice;
}
 */
console.log(this.diaperPrice);
//console.log(this.products[i].productPrice);

//create an class for lineItem to define the attributes the lineItem can have.
class lineItem {
    constructor (type, size, numberADay){
        this.diaperType = type;
        this.diaperSize = size;
        this.diapersADay = numberADay;
        this.diaperPrice = products[i].productPrice;
       
        //this.diaperPrice = price;
        this.button = "<input type='button' class='removeFromList' name='remove from list' data-object='" + JSON.stringify(this) + "' value='Remove'></input>";
       // this.totalDiaperPrice = totalDiaperPrice(); //Can we have a price-function here? Or on the one above? 
    }
    
    
   
    
    //Creating a function that creates a table row with data from the lineItem
    createHTML(subscription){
        return "<tr><td>"+ this.diaperType 
        + "</td><td>" + this.diaperSize 
        + "</td><td>" + this.diaperPrice 
        + "</td><td>" + this.diapersADay 
        + "</td><td>" + this.totalDiaperPrice 
        + "</td><td>" + this.button 
        + "</td></tr>" //Button to remove the item from the list
    }

} 


// Defining the localStorage for the lineItems, so that we can store it
var lineItems = JSON.parse(localStorage.getItem("lineItems"));


// If there are nothing in the localStorage, we initialize and empty array. This is so that we can add things to the array
if(lineItems === null){
    var lineItems = [];
} 