

//create class "product" - within dropdown bar of size, number of diapers, priceCalc

class product {
    constructor (/* productID, */ productType, productPrice, productDescription) {
        
       /*  this.productID = productID; */
        this.productType = productType;
        this.productPrice = productPrice; 
        this.productDescription = productDescription; //Do we need a description?
        
    }

}

var products = [];


//Pushing the two products to the Class
products.push(new product("Reusable", 40,));
products.push(new product("Recyclable", 30,));

//Checking if the pushing of products actually worked.
//console.log(products);