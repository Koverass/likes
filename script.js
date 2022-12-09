var contador1 = 9;
var countElement1 = document.querySelector("#contador1");
console.log(countElement1);

var contador2 = 12;
var countElement2 = document.querySelector("#contador2");
console.log(countElement2);

var contador3 = 9;
var countElement3 = document.querySelector("#contador3");
console.log(countElement3);

function like1(){
    contador1++;
    countElement1.innerText = contador1 ;
    console.log(contador1);
}

function like2(){
    contador2++;
    countElement2.innerText = contador2 ;
    console.log(contador2);
}

function like3(){
    contador3++;
    countElement3.innerText = contador3 ;
    console.log(contador3);
}