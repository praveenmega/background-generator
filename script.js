var _ = require('lodash');

var array=[1,2,3,4,5,6,7,8];
console.log("answer:", _.without(array,3));

var ht3=document.querySelector("h3");
var clr1=document.getElementById("color1");
var clr2=document.getElementById("color2");
var body=document.getElementById("b1");

function setColor(){
	body.style.background = "linear-gradient(to right, "+clr1.value+", "+clr2.value+")";
	ht3.textContent = body.style.background;
}

clr1.addEventListener("input",setColor);

clr2.addEventListener("input",setColor);