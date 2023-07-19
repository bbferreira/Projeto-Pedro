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

// Serviços

function mudarCorTexto(elemento) {
  elemento.style.color = 'white';
}

function selecionarDiv(parametro) {
  const divsPricingCard = document.querySelectorAll('.pricing-card');

  divsPricingCard.forEach((div) => {
    div.style.backgroundColor = '';
    div.style.color = '';
  });

  parametro.style.backgroundColor = 'orange';
  mudarCorTexto(parametro.querySelector('#data'));


  const dados = [];
  const titulo = parametro.querySelector('#titulo').innerText;
  const paragrafo = parametro.querySelector('#paragrafo').innerText;
  const preco = parametro.querySelector('#data').getAttribute('value');

  dados.push({ titulo, paragrafo, preco });
  console.log(dados);

}

  // Capturar os dados da div selecionada e salvá-los em um array


const divsPricingCard = document.querySelectorAll('.pricing-card');

divsPricingCard.forEach((divPricingCard) => {
  divPricingCard.addEventListener('click', function() {
    selecionarDiv(this);
  });
});


//calendario
function exibirHorariosDisponiveis() {
  var horarios = [];
  var hora = 9;
  var minutos = 0;

  while (hora < 20 || (hora === 20 && minutos === 0)) {
    horarios.push(hora.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0'));
    minutos += 45;
    if (minutos >= 60) {
      minutos = 0;
      hora++;
    }
  }

  var horariosDiv = document.getElementById("horariosDisponiveis");
  horariosDiv.innerHTML = '';

  var horariosContainer = document.createElement("div");
  horariosContainer.className = "horarios-container";

  for (var i = 0; i < horarios.length; i++) {
    var horario = horarios[i];
    var button = document.createElement("button");
    button.innerText = horario;
    button.className = "horario";
    button.onclick = function() {
      selecionarHorario(this);
    };
    horariosContainer.appendChild(button);
  }

  horariosDiv.appendChild(horariosContainer);
}

function selecionarHorario(button) {
  var horarios = document.getElementsByClassName("horario");
  for (var i = 0; i < horarios.length; i++) {
    horarios[i].classList.remove("selecionado");
  }

  button.classList.add("selecionado");
  
}