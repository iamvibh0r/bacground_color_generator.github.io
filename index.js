var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right,"
	+ color1.value +"," +color2.value +")";

	css.textContent=body.style.background+";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);




document.addEventListener("contextmenu",function(e){
  alert("Code Available on github");
  e.preventDefault();
});

document.onkeydown = function(e){
  if(event.keyCode == 123){
    alert("Code Available on github");
    return false;
  }

  if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
    alert("Code Available on github");
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
    alert("Code Available on github");
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
    alert("Code Available on github");
    return false;
  }
  if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)){
    alert("Code Available on github");
    return false;
    
  }
};
