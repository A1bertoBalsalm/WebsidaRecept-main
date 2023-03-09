

var x = document.getElementById("content");
const audio = new Audio();

function Ostskina(){
  if(x.style.display === "none"){
    x.style.display = "grid";
    
  }
  else{
    x.style.display = "none";
    
  }
   
  
}

function ljud(){
  audio.src = "./Ljud/Godspeed.mp3";
  console.log("ostskiva");
}