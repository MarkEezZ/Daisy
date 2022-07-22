AOS.init();

const doc = document;
let left = doc.getElementById('slider_left');
let right = doc.getElementById('slider_right');

let ava = doc.getElementById('slider_ava');
let name_ = doc.getElementById('slider_name');
let surname = doc.getElementById('slider_surname');
let profession = doc.getElementById('slider_profession');
let quotes_content = doc.getElementById('quotes_content');

let change = false;

quotes_content.addEventListener('animationend', function() {
    quotes_content.classList.remove('animation-1');
    quotes_content.classList.remove('animation-2');
});

left.addEventListener('click', function () {
    if (change) {
        name_.textContent = "Alan";
        surname.textContent = "Richman";
        profession.textContent = "CEO of Romashka";
        ava.setAttribute('src', "./assets/face.png");
        change = false;
    }
    else {
        name_.textContent = "Da";
        surname.textContent = "Baby";
        profession.textContent = "CEO of Broadway";
        ava.setAttribute('src', "./assets/face2.png");
        change = true;
    }
    quotes_content.classList.add('animation-1');
});

right.addEventListener('click', function () {
    if (change) {
        name_.textContent = "Alan";
        surname.textContent = "Richman";
        profession.textContent = "CEO of Romashka";
        ava.setAttribute('src', "./assets/face.png");
        change = false;
    }
    else {
        name_.textContent = "Da";
        surname.textContent = "Baby";
        profession.textContent = "CEO of Broadway";
        ava.setAttribute('src', "./assets/face2.png");
        change = true;
    }
    quotes_content.classList.add('animation-2');
});

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)