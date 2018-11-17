// Adding class of users, with defined user characteristics

class User {

    // The constructor defines the values that each object can have, and makes us able to make more objects
    constructor (firstName, lastName, userName, email, password, phoneNumber, dateOfBirth, streetName, postalNumber, city) {
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
    }
  
      // /* // Function copied from Henriks login-example. 
    hashPassword(rawPassword){
  
      
      var a = 1, c = 0, h, o;
      if (rawPassword) {
        a = 0;
        //jshint plusplus:false bitwise:false <<-- Have no idea what this means
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


  //LOCAL STORAGE of users:
// localStorage.clear();
// Define users as "users" and get them from the local storage.
var users = JSON.parse(localStorage.getItem("users"));                //firstly we check to see if there are any users in the local storage

if(users === null){ // if there are nothing within the localstorage, the variable "users" will be initialized 
    // initialize empty user array 
    var users = [];                                                   //If not, we create an empty array with users we can push later

    // Check code for our self, hardcoded users, push user to the array
    users.push(new User("Johannes","Reisinger","Joe","reisingerjohannes@icloud.com","1234","004795008845","07051994","Something 14","2000","Frederiksberg", "1"));
    
    users.push(new User("Anders","Vartdal","Andy","anva18ae@student.cbs.dk","1234","","07051994","Something 14","2000","Frederiksberg", "2"));

    localStorage.setItem('users', JSON.stringify(users));
  }

// When we want to get item out we want to parse it back into a native JavaScript object

//Console our users so that we can see what is in there.
console.log(users);