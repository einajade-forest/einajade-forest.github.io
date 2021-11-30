window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function mouseOver(phrase) {
  if (phrase.innerText=="einajade-forest") {
    phrase.innerText ="About";
    phrase.href ="about.html";
  }
  if (phrase.innerText=="Novice Developer") {
    phrase.innerText ="Projects";
    phrase.href ="project.html";
  }
  if (phrase.innerText=="Seeking Opportunities") {
    phrase.innerText ="Contact";
    phrase.href ="contact.html";
  }
}

function mouseOut(phrase) {
  if (phrase.innerText=="About") {
    phrase.innerText ="einajade-forest";
    phrase.href ="#";
  }
  if (phrase.innerText=="Projects") {
    phrase.innerText ="Novice Developer";
    phrase.href ="#";
  }
  if (phrase.innerText=="Contact") {
    phrase.innerText ="Seeking Opportunities";
    phrase.href ="#";
  }
}

let adjectives = new Array();

adjectives[0] = "Forever curious";
adjectives[1] = "Analytical";
adjectives[2] = "Focused";
adjectives[3] = "Dependable";
adjectives[4] = "Realistic";

function getAdjective(){
  setInterval (function(){
    let index = Math.floor(Math.random()*adjectives.length);
    document.getElementById("adjectives").innerText = adjectives[index];
  }, 4000);
}
getAdjective()
