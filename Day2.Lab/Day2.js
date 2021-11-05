// //1.1
// function palindromeFun(_str) {
//   // convert the string into an array using the string.split() function
//   var arrValue = string.split(""); //

//   // use reverse() method to reverse the array values
//   var reveArrVal = arrValue.reverse();

//   // use join() method to group the array values into the string
//   var revString = reveArrVal.join("");

//   if (string == revString) {
//     // if string condition is equal to the revString
//     alert("It is a Palindrome string "); // print the Palindrome
//   } else {
//     alert(" It is not a Palindrome string"); // if the condition is not true.
//   }
// }
// // take a string from the user
// var string = prompt(
//   "Do you want me to consider sensitive case from you? if yes press (Y) if no press (N)"
// );
// switch (string) {
//   case "Y":
//   case "y":

//     var string = prompt(" Enter the string to check Palindrome ");
//     var value = palindromeFun(string); // call the function
//     break;

//     // var string = prompt(" Enter the string to check Palindrome ");
//     // var value = palindromeFun(string); // call the function
//     // break;

//   case "N":
//     var string = prompt(" Enter the string to check Palindrome ").toLowerCase();
//     var value = palindromeFun(string); // call the function
//     break;

//   case "n":
//     var string = prompt(" Enter the string to check Palindrome ").toLowerCase();
//     var value = palindromeFun(string); // call the function
//     break;

//   default:
//     window.alert(
//       "Not Valid Answer, Im Sorry I will set it up default with case sensitive"
//     );
//     var string = prompt(" Enter the string to check Palindrome ");
//     var value = palindromeFun(string); // call the function
//     break;
// }

// //1.2  ///review
// var string = prompt(" Enter the string to count the length ");
// alert("your strength length is = " + string.length);

//1.3

// var uName = prompt("Please Enter  Name");
// while (isFinite(uName)) {
//   uName = prompt("Please Enter  Name");
// }

// var phone_number = prompt("Please Enter phone number");
// while (isNaN(phone_number) || phone_number.length < 8) {
//   phone_number = prompt("Please Enter phone Number");
// }

// var mobile_phone = prompt("Please Enter Mobile Phone");
// while (isNaN(mobile_phone) || mobile_phone.length < 11) {
//   mobile_phone = prompt("Please Enter Mobile Phone");
// }

// var uEmail = prompt("Please Enter your Email");
// var reg = new RegExp(
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );
// while (!reg.test(uEmail)) {
//   uEmail = prompt("Please Enter a valid Email");
// }

// document.write("<h2 style='color:green'>Your Name is " + uName + "</h2>");
// document.write(
//   "<h2 style='color:green'>Your phone number is " + phone_number + "</h2>"
// );
// document.write(
//   "<h2 style='color:green'>Your mobile phone  is " + mobile_phone + "</h2>"
// );
// document.write("<h2 style='color:green'>Your Email is " + uEmail + "</h2>");

// //2.1
// var r = prompt("Please Enter the Radius:");

// while (isNaN(r)) {
//   r = prompt("Please Enter Valid Radius:");
// }
// alert(r * Math.PI);

// //2.2
// var root = prompt("Please Enter Number:");

// while (isNaN(root)) {
//   root = prompt("Please Enter Valid Number:");
// }
// alert(Math.sqrt(root));

// //3.1
// var arr = new Array(3);
// for (var i = 0; i < 3; i++) {
//   arr[i] = prompt("Please Enter a number in array:");
// }

// var sum = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
// alert("Sum=" + Number(sum));

// var multiply = Number(arr[0]) * Number(arr[1]) * Number(arr[2]);
// alert("Multiply=" + Number(multiply));

// var division = Number(arr[0]) / Number(arr[1]) / Number(arr[2]);
// alert("division=" + Number(division));

// //3.2
// var points = new Array(5);
// for (var i = 0; i < 5; i++) {
//   points[i] = prompt("Please Enter a number in array:");
// }
// // sort number in an array from higher to lower:
// points.sort(function (a, b) {
//   return b - a;
// });
// alert("ur values after being sorted descending: " + points);

// // sort number in an array from lower to higher:
// points.sort(function (a, b) {
//   return a - b;
// });
// alert("ur values after being sorted  ascending: " + points);

// // 4.1;
// function test(x, y) {
//   if (arguments.length === 2 && x && y) {
//     console.log(x, y);
//   } else {
//     throw "Please Enter Valid Parameters";
//   }
// }

// // OR;
// function test(x, y) {
//   if (!(arguments.length === 2 && x && y)) {
//     throw "Please Enter Valid Parameters";
//   }
//   console.log(x, y);
// }
// // test(1);

// //4.2
// function sum() {
//   var n = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     n += arguments[i];
//   }
//   return n;
// }

// console.log(sum(2, 3)); // 5
// console.log(sum(-10, 5)); // -5
// console.log(sum(10, 10, 20, 10)); // 50
// console.log(sum()); // 0

// // 4.3;
// var arr = new Array(1, 2, 3, 4, 5);
// console.log(arr);

// function reversing(arr) {
//   var new_arr = arr.reverse();
//   console.log(new_arr);
// }

// reversing(arr);
