//Single Line Comment

/*

Multi
Line
Comment

*/

//variable names can't start with number and are dynamic
var myVariable = 10;

//semicolon after each statement
alert("popup");
alert("popup2");

//strings can only be added to numbers, no other operations.
var name = 100 + "tophat"

//operators can all work with = e.g.
var num = 10;

num+=10; //would give 20
num-=10;//would give 0
num/=2; //would give 5
num*=2; // would give 20
num++; //returns the number THEN adds 1
++num; //adds 1 THEN returns the result
num === 10; //checks value and type
num !== 10; //not equal to value or DOCTYPE
num && name == 10; //logical AND
num || name == 10; //logical OR

document.write(num); //to write to screen directly after last write
console.log(num); // to write to console

var empty = ""
Boolean(empty) // will return false because it's empty

var booly = true; //lowercase for bools

if(booly){
    //will execute anything in here since booly is true above
} else if {
    //else if statements are written like this
} else {
    // else statements are like this
}

while (num ==10){
  //while loops are like This
  num = 5; //to avoid infinite loops
}

for (i = 1; i<=100; i+=10){
  //just like in C
  if (i == 5)
    continue; //ignore anything below and return to top of loop
  if (i == 7){

    break; //break the loop

  }
}

function getAverage (a,b){ //define function

  var average = (a+b)/2; /*local variable. N.B.
  if average were declared as a global and upadted here,
  the value would be updated to the global*/
  return average;
}
var fResult = getAverage(5,6); //this is a global variable
console.log("the average is: " +fResult); //append values like This

console.log(typeof(fResult));  //get var type

if(isNaN(fResult)){
  //returns false. "If Not a Number". fResult is a number.
}
if(!isNaN(fResult)){
  //returns true. "If Not Not a Number". fResult is a number.


var exString = 'I\'m an "interesting" string';
console.log(exString.length());//returns length
console.log(exString.toUpperCase()); //sets string to Upper
console.log(exString.toLowerCase()); //sets string to Upper
console.log(exString.indexOf("string")); /*returns index value of "string"
 in the string above. Returns -1 if string isn't found */

Boolean("ABC"<"abc"); //returns true. Capital letters are higher value

var str1 = "supercalifragilisticexpialidocious";
var str2 = str1.slice(5,8); //returns index values 5-8 i.e "cali".
var str2 = str1.slice(5);  //returns everything after super

var str3 = "water, earth, fire, wind";
var strArrag = st3.split(","); //just like python
var myArray = [];
var myArray1 = new Array(5); // array size 5
myArray[0] = "hi"; //to add to array

strArray.sort(); //sort
strArray.reverse(); //reverse array

//objects

var str4 = new String() //no need to declare like this for strings
var str4 = "hello" //is the same as above AND it initiates the value
myString.length()
myString.toLowerCase()

var myCar = new Object();
//myCar can have properties below with different attributes and names
myCar.maxSpeed = 50;
myCar.driver = "me";
myCar.drive = function(){ console.log("The car is now driving");};
myCar.drive(); //will print the statement above

//another object like above
var myCar2 = {maxSpeed: 150,
              driver:"you",
              drive: function(){ console.log("The car is now driving");}};

/*objects can be used to make data sets with given data i.e tracking cars
with all of their properties and adding new cars to the list*/
console.log(this); //logs the current function/object  etc.


var myDate = new Date(); //new current Date
var myDate = new Date(1990,11,2,24,00,30); //YYYY,MM,DD,HH,MM,SS format
console.console.log(myDate.getTime); /* time in milliseconds since 1st Jan 1970,
used to compare dates.  use .getDate etc to retreive dates/months etc*/

//DOM
//in html
var Divs = document.getElementsByClassName("content");
//divs will contain an array with all the "content" dives
var h2tag = Divs[2].getElementsByTagName("h2"); // to get h2 tags
h2tag[0].innerHTML = "hi"; // to change text value
h2tag[0].textContent = "hi"; //can be used too
h2tag[0].getAttribute("href");  //get href
h2tag[0].setAttribute("class", "pie"); //change class type
var newLi = document.createElement("li"); //create element
var menu = document.createElement("ul");
menu.appendChild(newLi); //to append elements
h2tag.removeChild(menu) //to remove children, can also store this removed var

h2tag.onclick = function(){//performs function when h2tag is pressed
  alert("h2clicked");
};
// other events such as onmouseover exist

window.onload = function(){} //perform task when window is loaded

setTimeout(functionname, 3000); //time in milliseconds calls function after 3s
setInterval(functionname, 3000); //constantly call every 3s
clearInterval(functionname); //stop the setInterval


var myForm = document.forms.myForm;
myForm.name.value; //to return values
