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
    phrase.innerText ="Contact Me";
    phrase.href ="mailto:einajade-forest@@antispamdomain.com";
  }
  /* if (phrase.innerText=="Novice Developer") {
    phrase.innerText ="Projects";
    phrase.href ="projects.html";
  } */
}

function mouseOut(phrase) {
  if (phrase.innerText=="Contact Me") {
    phrase.innerText ="einajade-forest";
    phrase.href ="#";
  }
  /* if (phrase.innerText=="Projects") {
    phrase.innerText ="Novice Developer";
    phrase.href ="#";
  } */
}
