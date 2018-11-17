var users = JSON.parse(localStorage.getItem("users"));   

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

    



    

createHTML() {
    return "<li class='userInfo'><img width='200px' src=" + this.firstname + ">" +
    "<h1>"+ this.lastname + "</h1>" +
    // "<p>" + this.description + "</p>" +
    // "<p>Price: " + this.price + "</p>" +
    // this.buttonCart +
    "</li>"
}

    

  print() { 
        return "<tr><td> <img height='65px' src='" + this.firstname + "'></td><td>" + this.lastname + "</td><td>" + this.username + "</td><td>" + this.email + "</td></tr>";
    }



    
}



    //   print() {
    //     console.log(this.firstname + ' ' + this.lastname + ' ')
    //   }

function displayUserInformation() {
   

    var html = '<tr><td>First Name</td><td>Last Name</td><td>Username</td><td>Password</td></tr>'

        for (i=0; i < users.length; i++){
            if(users[i].userId == localStorage.getItem('loggedInUser')){
               
                var activeUser = users[i]
                console.log(activeUser);
        }
            html += activeUser.printUserInformation();
               
        }

    
        
        document.getElementById('userTable').innerHTML = html
    }

    displayUserInformation();

    function printUserInformation() {
        var html = ''
              for(i=0; i<this.users.length; i++){
                  html += this.users[i].print()
              }
          
          }

    // printUserInformation();

    