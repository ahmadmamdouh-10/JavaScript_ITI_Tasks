var im=document.getElementById("header");

im.setAttribute("style","text-align:right");
var copy=im.cloneNode(true);
copy.setAttribute("style","text-align:left");
var body = document.childNodes[0].childNodes[2];
var list= document.getElementById("nav");
list.setAttribute("style", "list-style-type: circle; list-style-position:inside;");
body.appendChild(copy);