var objUser=[
    {
        username: "Sonu",
        password: "Singh"
    },
    {
        username: "Sachin",
        password: "Singh1"
    },
    {
        username: "Golu",
        password: "Singh23"
    }
]


function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0; i<objUser.length; i++){ //get the Length of user
        if(username === objUser[i].username && password === objUser[i].password){ // match username and password
            console.log(username + "is Loged In !0");
            return; // break the condition
        }
    }
    console.log("incorrect Username or Password");
}