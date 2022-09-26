
var fName = String;
var lName = String;


function myThankYou() {

    window.alert("Thank you for trying my contact form!");

}

function mySend(){
    fName = document.getElementById("fname").value;
    lName = document.getElementById("lname").value;
    window.alert("You have saved the contact " + fName +" "+ lName);
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("pnum").value = '';
}

