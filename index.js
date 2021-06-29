var fristName = prompt("enter your frist name ")
var lastName = prompt("enter your last name ")

var fullname =(fristName + lastName);

var upcase = fullname.toUpperCase();

console.log("your total caracter name " + fullname.length);

document.write(upcase);

 var all = fullname.slice(0,5);
 document.write(all);
