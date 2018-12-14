
/*
_____________________________________________________________________________________________________________
CLASS OF USER, WITH METHODS:
Adding class of users, with defined user characteristics
*/

class User {

    // The constructor defines the values that each object can have, and makes us able to make more objects
    constructor (firstName, lastName, userName, email, password, phoneNumber, dateOfBirth, streetName, postalNumber, city, userId) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.username = userName;
        this.email = email;
        this.password = this.hashPassword(password);
        this.phonenumber = phoneNumber;
        this.dateofbirth = dateOfBirth;
        this.streetname = streetName;
        this.postalnumber = postalNumber;
        this.city = city;
        this.userId = userId;
        this.shoppingCart = [];
    }
  
     // Method copied from Henriks login-example. 
    hashPassword(rawPassword){
  
      var a = 1, c = 0, h, o;
      if (rawPassword) {
 
        a = 0;
        for (h = rawPassword.length - 1; h >= 0; h--) {
          o = rawPassword.charCodeAt(h);
          a = (a << 6 & 268435455) + o + (o << 14);
          c = a & 266338304;
          a = c !== 0 ? a ^ c >> 21 : a;
        }
      } 
      return String(a); 
    }

}


