// We are getting the user's information 
var users = JSON.parse(localStorage.getItem("users"));   

function displayUserInformation() {
   
   
        for (i=0; i < users.length; i++){
            if(users[i].userId == localStorage.getItem('loggedInUser')){
               
                var activeUser = users[i]
                showTable(activeUser);
                console.log(users[i]['lastname']);
                console.log(localStorage.getItem('loggedInUser'));
            }          
        }     
    }

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

    displayUserInformation();




    

