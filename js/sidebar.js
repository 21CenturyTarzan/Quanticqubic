let open = false;

function openNav() {  
  if(window.matchMedia('(max-width: 1040px)').matches){
    open = true;
    document.getElementById('sidebar').style.display = "flex";
    document.getElementById('menuButton').src="media/menu_remove.svg";
    document.getElementById("header").classList.add("open");
  }    
}

function closeNav() {
  if(window.matchMedia('(max-width: 1040px)').matches){
        open = false;
        document.getElementById('sidebar').style.display = "none";
        document.getElementById('menuButton').src="media/menu_add.svg";
        document.getElementById("header").classList.remove("open");  
  }
}

document.getElementById("menuButton").addEventListener("click", function(){
  if(!open){    
    openNav();
  } 
  else {    
    closeNav();
  }     
    
});

document.getElementById("btn-connect").addEventListener("click", function(){
  closeNav();
})
/*
document.getElementById("calculator").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.add("hide");
  document.getElementsByClassName("calculator")[0].classList.remove("hide");
  document.getElementById("dashboard").classList.remove("selected");
  document.getElementById("swap").classList.remove("selected");
  document.getElementById("account").classList.remove("selected");
  document.getElementById("calculator").classList.add("selected");

  document.getElementById("btn-connect").classList.remove("hide");

  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  }
});

document.getElementById("account").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.remove("hide");
  document.getElementsByClassName("calculator")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.add("hide");
  //document.getElementsByClassName("how-to-buy")[0].classList.add("hide");
  document.getElementById("account").classList.add("selected");
  document.getElementById("calculator").classList.remove("selected");
  document.getElementById("swap").classList.remove("selected");
  document.getElementById("dashboard").classList.remove("selected");

  document.getElementById("btn-connect").classList.remove("hide");

  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  } 
});

document.getElementById("dashboard").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.add("hide");
  document.getElementsByClassName("calculator")[0].classList.add("hide");
  //document.getElementsByClassName("how-to-buy")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.remove("hide");
  document.getElementById("dashboard").classList.add("selected");
  document.getElementById("calculator").classList.remove("selected");
  document.getElementById("account").classList.remove("selected");
  document.getElementById("swap").classList.remove("selected");

  document.getElementById("btn-connect").classList.remove("hide");

  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  }
});`*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log("chekc")
  var headermenu = document.getElementById("header");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    headermenu.classList.add("shade");
  } else {
    headermenu.classList.remove("shade");
  }
}


window.addEventListener('load', (event) => {
  scrollFunction();
});
/*document.getElementById("swap").addEventListener("click",function(){

  document.getElementsByClassName("account")[0].classList.add("hide");
  document.getElementsByClassName("calculator")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.add("hide");
  //document.getElementsByClassName("how-to-buy")[0].classList.remove("hide");
  document.getElementById("dashboard").classList.remove("selected");
  document.getElementById("calculator").classList.remove("selected");
  document.getElementById("account").classList.remove("selected");
  document.getElementById("swap").classList.add("selected");

  document.getElementById("btn-connect").classList.add("hide");

  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  }
});*/



