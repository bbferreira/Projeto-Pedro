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

function onClickFunction() {
  const elemento = document.querySelector('.pricing-card');
  selecionarServico(elemento);
  selecionarDiv(elemento);
}

const elemento = document.querySelector('.pricing-card');
elemento.onclick = onClickFunction;



function selecionarServico(element) {
  // Obtendo as informações dentro da div
  const titulo = element.querySelector('#titulo').innerText;
  const paragrafo = element.querySelector('#paragrafo').innerText;
  const preco = element.querySelector('#data').getAttribute('value');

  // Imprimindo as informações
  console.log(titulo); // "Corte"
  console.log(paragrafo); // "45 minutos"
  console.log(preco); // "25"

  // Aqui você pode fazer o que desejar com as informações, como salvá-las em uma variável ou realizar alguma ação adicional.
}





// Obtendo todas as divs com a classe "pricing-card"
const divsPricingCard = document.querySelectorAll('.pricing-card');

// Array para armazenar as informações das divs
const informacoesDivs = [];

// Iterando sobre as divs "pricing-card"
divsPricingCard.forEach((divPricingCard) => {
  // Obtendo as informações dentro da div
  const titulo = divPricingCard.querySelector('#titulo').innerText;
  const paragrafo = divPricingCard.querySelector('#paragrafo').innerText;
  const preco = divPricingCard.querySelector('#data').getAttribute('value');

  // Criando um objeto com as informações da div
  const informacoes = {
    titulo,
    paragrafo,
    preco
  };
  

  // Adicionando o objeto ao array
  informacoesDivs.push(informacoes);
});

// Imprimindo as informações das divs
informacoesDivs.forEach((informacoes, index) => {
  console.log(`Informações da div ${index + 1}:`);
  console.log(informacoes.titulo);
  console.log(informacoes.paragrafo);
  console.log(informacoes.preco);
});


function selecionarDiv(element) {
  element.style.backgroundColor = "orange";
}



const div = document.querySelector('.pricing-card');
div.addEventListener('click', function() {
  selecionarDiv(this);
});