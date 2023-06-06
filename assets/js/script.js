'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



/**
 * filter function
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all") {

      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");

    } else {

      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");

    }
  }
}

addEventOnElem(filterBtns, "click", filter);


//Status aberto ou fechado


// Defina os dias e horários em que o site está aberto
const openDays = [1, 2, 3, 4, 5,6]; // Segunda a Sexta
const openHours = [ 10, 11, 14, 15, 16,17,18]; // 9h às 12h e 14h às 17h

// Obtenha a hora atual do usuário
const now = new Date();
const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
const hourOfDay = now.getHours();



// Verifique se o site está aberto ou fechado
if (openDays.includes(dayOfWeek) && openHours.includes(hourOfDay)) {
  document.getElementById("status").textContent = "Estamos abertos agora!";
} else {
  document.getElementById("status").textContent = "Estamos fechados agora.";
}


const cabeçalho = document.querySelector('.header');
const openStatus = document.createElement('span');
openStatus.classList.add('open-status');
header.appendChild(openStatus);

const agora = new Date();
const diaSemana = now.getDay();

if (dayOfWeek >= 1 && dayOfWeek <= 6) {
  const hour = now.getHours();

  if (hour >= 10 && hour < 12 || (hour >= 14 && hour < 18)) {
    openStatus.textContent = 'Estamos abertos Agora';
    openStatus.classList.add('open');
    openStatus.style.color = 'green';
  } else {
    openStatus.textContent = 'Estamos fechados';
    openStatus.classList.add('closed');
    openStatus.style.color = 'red';
  }
} else {
  openStatus.textContent = 'Estamos fechados';
  openStatus.classList.add('closed');
}


// Adiciona a classe `.open-status` ao elemento `span`
openStatus.classList.add('open-status');  