// For Loop

let m = " ";

for (let i = 1; i <= 5; i++) {
    m += "piyush" + "<br>" ;
}

document.getElementById("for").innerHTML = m;




// For In Loop

let emp = {empname:"rohit" , username:"rohit01" , empid:25};

let emply = " ";
for(let x in emp) {
    emply += emp[x] + "<br>";
}

document.getElementById("for-in").innerHTML = emply;





// For Of Loop

let food = ["samosa","kachori","vadapau"]

let fd = " ";

for(let x of food) {
    fd += x + "<br>";
}

document.getElementById("for-of").innerHTML = fd;





// While Loop

let no = " ";

let g = 1;
 while (g<=10) {
    no += "<br>" + g ;
    g++
 }

 document.getElementById("while").innerHTML = no;





// Do While

let d = " ";
let e = 1 ;

do{
    d += "<br>" + e ;
    e++
}
while(e<=10)

document.getElementById("do-while-loop").innerHTML = d;
