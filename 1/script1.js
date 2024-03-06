// for loop

let txt = "";

for (let i = 0; i < 5; i++) {
  txt += "The number is " + i + "<br>";
}

document.getElementById("for").innerHTML = txt;





// for in loop

const person = {fname:"darsh", lname:"patel", age:21}; 

let text = " ";
for (let x in person) {
  text += person[x] + "<br>";
}

document.getElementById("for-in").innerHTML = text;





// for of loop

const cars = ["BMW", "Volvo", "Kia"];

let string = "";
for (let x of cars) {
    string += x + "<br>";
}

document.getElementById("for-of").innerHTML = string;





// while loop

let mark = " ";
p = 0;
while (p<10) {
    mark += "<br>The number is " + p;
    p++; 
}

document.getElementById("while").innerHTML = mark;





// do while loop 

let some = ""
let val = 0;

do {
  some += "<br>The number is " + val;
  val++;
}
while (val < 10);  

document.getElementById("do-while-loop").innerHTML = some;



