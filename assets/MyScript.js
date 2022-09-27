
var fName = String;
var lName = String;


function myThankYou() {

    window.alert("Thank you for trying my contact form!");

}

function mySend(){
    fName = document.getElementById("fname").value;
    lName = document.getElementById("lname").value;
    if(fName=='' | lName == ''){
        window.alert("You need a valid first and last name to save.");
   // } else if(lName==''){
   //      window.alert("You need a valid first and last name to save.");
    } else{
        window.alert("You have saved the contact " + fName +" "+ lName);
    }
    
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("pnum").value = '';
}

