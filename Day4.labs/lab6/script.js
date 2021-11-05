//create a global variable to be get the value of key pressing inside
var mo;
// add event in the whole page when you start pressing the key on keyboard ASCII function will be called
document.addEventListener("keydown", AscII);

function AscII(v) {
  mo = v;
  console.log(v);
  //keyCode is a property returns the unicode of character which represents an actual key on the keyboard
  if (v.shiftKey)
    alert("you pressed Shift key and its ASCII code is : " + v.keyCode);
  else if (v.altKey)
    alert("you pressed Alt key and its ASCII code is : " + v.keyCode);
  else if (v.ctrlKey)
    alert("you pressed Ctrl key and its ASCII code is : " + v.keyCode);
  else alert("The ASCII code is : " + v.keyCode);
}

//(what is the diff between keydown, keyup and keypress):

// var myInput = document.getElementById("input");

// بعد ما كتبت الحرف وانتا بتشيل ايدك يقوم يعمل الإيفنت
// يعني ممكن تفضل حاطط ايدك ع الحرف ومش هيعمل الإيفنت لحد ما تشيل إيدك
// myInput.onkeyup = function(){
//     alert("You are pressed the key now")
// };

// قبل ما أوصل إني أدوس بيعمل الإيفنت ع طول
// myInput.onkeydown = function(){
//     alert("You are pressed the key now")
// };

// // وانتا لسه بتكتب الحرف هيطلع الإيفنت ف حتى مش هيظهرلك اللي انتا كتبته لحد ما تخلص الأليرت
// myInput.onkeypress = function(){
//     alert("You are pressed the key now")
// };
