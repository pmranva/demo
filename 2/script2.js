// For Loop

let num =" " ;

for( let p = 1; p <= 10; p++){
    num += "value is" + p + "<br>" ;
}

document.getElementById("for").innerHTML = num;





// For in Loop

const student = {rollno:1, username :"smit", password:123}

let a = " ";
for( let x in student){
    a += student[x] + "<br>" ;
}

document.getElementById("for-in").innerHTML = a;





// For of Loop

const cricketer = ["virat", "dhoni", "jedeja"]

let no = " ";
for(let x of cricketer) {
    no += x + "<br>";
}   

document.getElementById("for-of").innerHTML = no;




// While Loop 

let m = " ";
n = 1 ;
while( n <= 10 ){
    m += "<br> the value" + n;
    n++;
}

document.getElementById("While").innerHTML = m;




// Do While

let sum = " ";
let number = 1 ;
 
do{
    sum += "<br>" + number ;
    number++;
}
while( number <= 10 )

document.getElementById("do-while").innerHTML = sum;