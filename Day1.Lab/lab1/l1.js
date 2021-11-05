
var sum = 0;
var n;
while (sum < 100 && n != 0 && n !== null) {
    n = window.prompt("Enter Numbers");
    sum = sum + Number(n);
    
}
window.alert(sum);



/*
var message = window.prompt("Please enter Message:");

for (var i=0; i<6;i++){
    document.write("<h"+(i+1)+">"+message+"</h>"+(i+1)+">");
}
*/

/*
var firstname = window.prompt("Please Enter First Name");
while (isFinite(firstname)) {
    firstname = window.prompt("Please Enter First Name");
    
}

var lastname = window.prompt("Please Enter Last Name");
while (isFinite(lastname)) {
    lastname = window.prompt("Please Enter Last Name");
    
}
var phone = window.prompt("Please Enter phone number");
while (isNaN(phone)) {
    phone = window.prompt("Please Enter phone Number");
    
}

var color = window.prompt("Please choose a color from green or red or blue");
switch (color) {
    case "red":
    document.write("<h2 style='color:red'>welcome,"+firstname+" "+lastname+"</h2>");
    document.write("<h2 style='color:red'>your phone number is "+phone+"</h2>");
    break;

    case "r":
        document.write("<h2 style='color:red'>welcome,"+firstname+" "+lastname+"</h2>");
        document.write("<h2 style='color:red'>your phone number is "+phone+"</h2>");
        break;


    case "green":
    document.write("<h2 style='color:green'>welcome,"+firstname+" "+lastname+"</h2>");
    document.write("<h2 style='color:green'>your phone number is "+phone+"</h2>");
    break;

    case "g":
    document.write("<h2 style='color:green'>welcome,"+firstname+" "+lastname+"</h2>");
    document.write("<h2 style='color:green'>your phone number is "+phone+"</h2>");
    break;

    case "blue":
    document.write("<h2 style='color:blue'>welcome,"+firstname+" "+lastname+"</h2>");
    document.write("<h2 style='color:blue'>your phone number is "+phone+"</h2>");
    break;

    case "b":
        document.write("<h2 style='color:blue'>welcome,"+firstname+" "+lastname+"</h2>");
        document.write("<h2 style='color:blue'>your phone number is "+phone+"</h2>");
        break;
    
    
    default:
    window.alert("Not Valid Color, Im Sorry I will set it up default color(black)");
    document.write("<h2>welcome,"+firstname+" "+lastname+"</h2>");
    document.write("<h2>your phone number is "+phone+"</h2>");
    
    break;
}


*/