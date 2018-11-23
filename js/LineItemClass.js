


//create an class for lineItem to define the attributes the lineItem can have.
class LineItem {
    constructor (itemId, currentUserId, type, size, numberADay, price, /* cartlinePrice */){    
        this.itemId = itemId;
        this.currentUserId = currentUserId;
        this.diaperType = type;
        this.diaperSize = size;
        this.diapersADay = numberADay;
        this.diaperPrice = price;
        /* this.cartLinePrice = cartlinePrice; */
        //this.diaperPrice = price;
        this.button = "<input type='button' class='removeFromList' name='remove from list' data-object='" + JSON.stringify(this) + "' value='Remove'></input>";
     //  this.totalDiaperPrice = totalDiaperPrice(); //Can we have a price-function here? Or on the one above? 
    }
    
    cartLinePrice () {
        var cartLinePrice = this.diapersADay * this.diaperPrice;
 
        return cartLinePrice;
    }



    //Creating a function that creates a table row with data from the lineItem
    createHTML(){
        return "<tr><td>"+ this.diaperType 
        + "</td><td>" + this.diaperSize 
        + "</td><td>" + this.diaperPrice 
        + "</td><td>" + this.diapersADay 
        + "</td><td>" + this.cartLinePrice()
        + "</td><td>" + this.button 
        + "</td></tr>" //Button to remove the item from the list
    }


    


} 


