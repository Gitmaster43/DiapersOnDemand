

//___________________________________________________________________________________________________________
// LINEITEMCLASS

//create an class for lineItem to define the attributes the lineItem can have.
class LineItem {
    constructor (itemId, currentUserId, type, size, numberADay, price,){    //blueprint; many objects
        this.itemId = itemId; 
        this.currentUserId = currentUserId; // this: reference to an object, accessing a property
        this.diaperType = type;
        this.diaperSize = size;
        this.diapersADay = numberADay;
        this.diaperPrice = price;
        
        // Remove-button, stringify's the rest of the attributes so that we can access them and remove them later.
        this.button = "<input type='button' class='removeFromList' name='remove from list'  data-object='" + JSON.stringify(this) + "' value='Remove'></input>";
     
    }
    
    // Method for calculating the total price of the lineItem.
    cartLinePrice () { // in a class functions are called methods
        var cartLinePrice = this.diapersADay * this.diaperPrice;
 
        return cartLinePrice;
    }


    //Creating a method that creates a table row with data from the pushed lineItem
    createHTML(){
        return "<tr><td>"+ this.diaperType
        + "</td><td>" + this.diaperSize 
        + "</td><td>" + this.diaperPrice 
        + "</td><td>" + this.diapersADay 
        + "</td><td>" + this.cartLinePrice()
        + "</td><td>" + this.button 
        + "</td></tr>" 
    }

} 


