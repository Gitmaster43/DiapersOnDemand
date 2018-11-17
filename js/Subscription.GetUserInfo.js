var users = JSON.parse(localStorage.getItem("users"));   

function createHTML() {
    return "<li class='userInfo'><img width='200px' src=" + this.firstname + ">" +
    "<h1>"+ this.lastname + "</h1>" +
    // "<p>" + this.description + "</p>" +
    // "<p>Price: " + this.price + "</p>" +
    // this.buttonCart +
    "</li>"
}

    

//   print() { 
//         return "<tr><td> <img height='65px' src='" + this.firstname + "'></td><td>" + this.lastname + "</td><td>" + this.username + "</td><td>" + this.email + "</td></tr>";
//     }

    
// }



    //   print() {
    //     console.log(this.firstname + ' ' + this.lastname + ' ')
    //   }


    function printUserInformation() {
        var html = ''
              for(i=0; i<this.users.length; i++){
                  html += this.users[i].print()
              }
          
          }


function displayUserInformation() {
   

    var html = '<tr><td>First Name</td><td>Last Name</td><td>Username</td><td>Password</td></tr>'

        for (i=0; i < users.length; i++){
            if(users[i].userId == localStorage.getItem('loggedInUser')){
               
                // var activeUser = users[i]
                console.log(users[i]);
                console.log(localStorage.getItem('loggedInUser'));
        }
       
            // html += activeUser.printUserInformation();
               
        }

        // document.getElementById('userInfo').innerHTML 
        
    }

    displayUserInformation();


    

    // printUserInformation();

    