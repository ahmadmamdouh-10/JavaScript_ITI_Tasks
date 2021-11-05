function person(firstName, lastName, age) {
  this.firstName = prompt("Please enter a first name", "");
  while (this.firstName == null || this.firstName == "") {
    this.firstName = prompt("Invalid input. Please enter a first name", "");
  }

  this.lastName = prompt("Please enter a last name", "");
  while (this.lastName == null || this.lastName == "") {
    this.lastName = prompt("Invalid input. Please enter a last name", "");
  }

  this.age = prompt("Please enter an age", "");
  this.age = parseInt(this.age);
  while (
    this.age == null ||
    isNaN(this.age) ||
    this.age < 10 ||
    this.age > 60
  ) {
    this.age = prompt("Not a valid input. Please enter an age", "");
    this.age = parseInt(this.age);
  }
}

var count = prompt("Please Enter the num. of students:");
for (var x = 0; x < count; x++) {
  var people = [new person()];

  var table = document.getElementById("people");
  for (var i = 0; i < people.length; i++) {
    table.innerHTML +=
      "<tr><td>" +
      people[i].firstName +
      "</td><td>" +
      people[i].lastName +
      "</td><td>" +
      people[i].age +
      "</td></tr>";
  }
}

var table = document.querySelector("table");
table.style.display ="block";






// function person(firstName, lastName, age) {
//   var count = prompt("Please Enter the num. of students:");
//   for (var x = 1; x <= count; x++) {
//     this.firstName = prompt("Please enter a first name", "");
//     while (this.firstName == null || this.firstName == "") {
//       this.firstName = prompt("Invalid input. Please enter a first name", "");
//     }

//     this.lastName = prompt("Please enter a last name", "");
//     while (this.lastName == null || this.lastName == "") {
//       this.lastName = prompt("Invalid input. Please enter a last name", "");
//     }

//     this.age = prompt("Please enter an age", "");
//     this.age = parseInt(this.age);
//     while (this.age == null || isNaN(this.age) || this.age < 0) {
//       this.age = prompt("Not a valid input. Please enter an age", "");
//       this.age = parseInt(this.age);
//     }
//   }
// }

// var personDetail = new person();

// document.writeln("<table>");
// document.writeln(" <tr>");
// document.writeln("  <th>First Name</th>");
// document.writeln("  <th>Last Name</th>");
// document.writeln("  <th>Age</th>");
// document.writeln(" </tr>");

// for (var z = 0; z < 1; z++) {
//   document.writeln(" <tr>");
//   document.writeln("  <td>" + personDetail.firstName + "</td>");
//   document.writeln("  <td>" + personDetail.lastName + "</td>");
//   document.writeln("  <td>" + personDetail.age + "</td>");
//   document.writeln(" </tr>");
// }

// document.writeln("</table>");
