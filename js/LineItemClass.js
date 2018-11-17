

// Create a box in HTML that shows the price per diaper, which changes with which type the user chooses in the first dropdown


//create an class for lineItem to define the attributes the lineItem can have.
class lineItem {
    constructor (type, size, numberADay, price, removeButton ){
        this.diaperType = type;
        this.diaperPrice = products[i].productPrice
        this.diaperSize = size;
        this.diapersADay = numberADay;
        //this.diaperPrice = price;
        this.button = "<input type='button' class='removeFromList' name='remove from list' data-object='" + JSON.stringify(this) + "' value='Remove'></input>";
        this.totalDiaperPrice = []; //Can we have a price-function here? Or on the one above?
    }
    
    
    
    //Creating a function that creates a table row with data from the lineItem
    createHTML(subscription){
        return "<tr><td>"+ this.diaperType + "</td><td>" + this.diaperPrice + "</td><td>" + this.diaperSize + "</td><td>" 
        + this.diapersADay + "</td><td>" + this.diaperPrice + "</td><td>" + this.button + "</td></tr>" //Button to remove the item from the list
    }

} 

