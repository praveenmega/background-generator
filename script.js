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