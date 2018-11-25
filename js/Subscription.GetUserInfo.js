
//______________________________________________________________________________________________________
// Bind users from localStorage to a variable
var users = JSON.parse(localStorage.getItem("users"));   

//______________________________________________________________________________________________________
// DISPLAY USER INFORMATION

// We are creating a function which depicts the loggedInUser's personal inforamtion in a table
function displayUserInformation() {
   
   // We are looping through all our registered users and pick the loggedInUser by comparing it with his unique userID
        for (i=0; i < users.length; i++){
            if(users[i].userId == localStorage.getItem('loggedInUser')){

               // We are storing this information in the variable activeUser
                var activeUser = users[i]

                // Calling the function "showTable" with the information of the activeUser (=loggedInUser)
                showTable(activeUser);

            }          
        }     
    }


//_______________________________________________________________________________________________________
// FUNCTION FOR SHOWING THE TABLE

// We are creating the function for our Table in which the loggedInUser's information will be shown
function showTable(user) {

    //Create Table reference
    var dvTable = document.getElementById('userInfo');
    dvTable.innerHTML = "";
    
    //Create Table
    var table = document.createElement("TABLE");
    table.border=1;

    //Init Header Row
    var columns = [];
    columns.push("Username","Firstname","Lastname","Email");
    var row = table.insertRow(-1);

    //Fill out Header Row
    for (var i =0; i<columns.length; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = columns[i];
        row.appendChild(headerCell);
    }

    //User Row
        row = table.insertRow(-1);

        var cell1 = row.insertCell(-1);
        cell1.innerHTML = user['username'];
        var cell2 = row.insertCell(-1);
        cell2.innerHTML = user['firstname'];
        var cell3 = row.insertCell(-1);
        cell3.innerHTML = user['lastname'];
        var cell4 = row.insertCell(-1);
        cell4.innerHTML = user['email'];
       
    userInfo.appendChild(table);
}

// Calling the function in order to execute it 
    displayUserInformation();




    

