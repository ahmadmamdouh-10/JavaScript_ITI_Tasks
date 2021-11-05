// var colors = ['blue', 'green', 'yellow', 'orange','green' , 'brown', 'red'];
// var newDiv;

var mydiv = document.getElementById("mydiv");
mydiv.addEventListener("click", function () {
  newDiv = mydiv.cloneNode(true);
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var newColor = "rgb(" + red + "," + green + "," + blue + ")";

  newDiv.style.backgroundColor = newColor;

  document.body.append(newDiv);
});
