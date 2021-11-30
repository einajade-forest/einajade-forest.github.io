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
  if (phrase.innerText=="Stephanie Chan") {
    phrase.innerText ="About";
    phrase.href ="about2.html";
  }
  if (phrase.innerText=="Novice Developer") {
    phrase.innerText ="Projects";
    phrase.href ="projects2.html";
  }
  if (phrase.innerText=="Seeking Opportunities") {
    phrase.innerText ="Contact";
    phrase.href ="contact2.html";
  }
}

function mouseOut(phrase) {
  if (phrase.innerText=="About") {
    phrase.innerText ="Stephanie Chan";
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

//Image Object Array
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

