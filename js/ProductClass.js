
//_________________________________________________________________________________________________
// PRODUCTCLASS
//create class "product" - within dropdown bar of size, number of diapers, priceCalc

class Product {
    constructor (productID, productType, productPrice) {
        
        this.productID = productID;
        this.productType = productType;
        this.productPrice = productPrice; 

    }

}

var products = [];

//Pushing the two products to the Class
products.push(new Product(0, "Reusable", 40,));
products.push(new Product(1, "Recyclable", 30,));

