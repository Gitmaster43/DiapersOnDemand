var activeUser = JSON.parse(localStorage.getItem("users"));


// localStorage.setItem('users', JSON.stringify(users));


function editUser () {
    
    activeUser.username = document.getElementById("userName").value;
    activeUser.firstname = document.getElementById("firstName").value;
    activeUser.lastname = document.getElementById("lastName").value;
    activeUser.email = document.getElementById("email").value;
    
    
   
    for (i=0; i < users.length; i++){
        if(users[i].userId == localStorage.getItem('loggedInUser')){
            
            users[i] = activeUser;


        } 
    
    localStorage.setItem("users", JSON.stringify(users));

    //store updated loggedInUser object in local storage, make sure keyName is always String! 
    //keyName --> you need it to recall it later!
    // localStorage.setItem("activeUser", JSON.stringify(activeUser));

    //Show message in result Span, to user can see that changes are saved.
    alert("Your changes have been saved!");

    

    // window.location="../Index.html";

}

}
