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



//jquey calendar




//Corte 


function showImage() {
  const imageViewer = document.getElementById('image-viewer');
  const imageContainer = document.getElementById('image-container');
  const img = document.querySelector('.img-cover');

  // Exibe o visualizador de corte
  imageViewer.style.display = 'block';

  // Carrega a imagem clicada no visualizador
  const newImg = document.createElement('img');
  newImg.src = img.src;
  imageContainer.innerHTML = '';
  imageContainer.appendChild(newImg);
}

function closeViewer() {
  const imageViewer = document.getElementById('image-viewer');
  imageViewer.style.display = 'none';
}


// Serviços

function mudarCorTexto(elemento) {
  elemento.style.color = 'white';
}

// Array para armazenar os dados do serviço selecionado



function selecionarDiv(parametro) {
  const divsPricingCard = document.querySelectorAll('.pricing-card');

  divsPricingCard.forEach((div) => {
    div.style.backgroundColor = '';
    div.style.color = '';
  });

  parametro.style.backgroundColor = 'orange';
  mudarCorTexto(parametro.querySelector('#data'));

  const titulo = parametro.querySelector('#titulo').innerText;
  const paragrafo = parametro.querySelector('#paragrafo').innerText;
  const preco = parametro.querySelector('#data').getAttribute('value');

  // Adicionar os dados ao array
  let dados = [];
  dados.push({ titulo, paragrafo, preco });

  // Exibir os dados no console.log
  console.log(dados);
}

//calendario
var horariosDisponiveis = [];


function getHorariosDisponiveis() {
  var horarios = [];
  var now = new Date();
  var currentDay = now.getDate();

  var hora = 9;
  var minutos = 0;

  while (hora < 20 || (hora === 20 && minutos === 0)) {
    var agendamentoData = new Date(now);
    agendamentoData.setHours(hora, minutos);

    if (agendamentoData > now) {
      horarios.push(hora.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0'));
    }

    minutos += 45;
    if (minutos >= 60) {
      minutos = 0;
      hora++;
    }
  }

  // Armazena os horários disponíveis na variável global
  horariosDisponiveis = horarios.slice();

  return horarios;
}

function finalizarAgendamento() {
  const nome = document.querySelector('input[name="name"]').value;
  const celular = document.querySelector('input[name="phone"]').value;
  const dataSelecionada = document.querySelector('input[name="data"]').value;
  const observacao = document.querySelector('textarea[name="message"]').value;

  const dadosFormulario = [
    { campo: 'Nome', valor: nome },
    { campo: 'Celular', valor: celular },
    { campo: 'Data', valor: dataSelecionada },
    { campo: 'Observação', valor: observacao }
  ];

  let dadosServicos = [];
  // Aqui você pode adicionar a lógica para percorrer o array de dados dos serviços selecionados (dados) e adicionar os dados relevantes ao array dadosServicos

  // Adicionando os dados dos serviços selecionados ao array dadosServicos
  const divsPricingCard = document.querySelectorAll('.pricing-card');
  divsPricingCard.forEach((div) => {
    if (div.style.backgroundColor === 'orange') {
      const titulo = div.querySelector('#titulo').innerText;
      const paragrafo = div.querySelector('#paragrafo').innerText;
      const preco = div.querySelector('#data').getAttribute('value');
      dadosServicos.push({ titulo, paragrafo, preco });
    }
  });

  // Combinar os dados dos serviços e do formulário em uma única string
  let mensagem = 'Agendamento:\n';
  for (const item of dadosServicos) {
    mensagem += `${item.titulo}: ${item.paragrafo}: R$${item.preco}\n`;
  }

  mensagem += '\nDados do formulário:\n';
  for (const item of dadosFormulario) {
    mensagem += `${item.campo}: ${item.valor}\n`;
  }

  // Codificar a mensagem para usar na URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Abre o WhatsApp com a mensagem preenchida
  const numeroWhatsApp = '5514997605588'; // Substitua pelo número do WhatsApp desejado
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
  window.open(urlWhatsApp);

  // Remove o horário agendado dos horários disponíveis
  const horarioAgendado = dataSelecionada.split(' ')[1];
  const indexHorario = horariosDisponiveis.indexOf(horarioAgendado);
  if (indexHorario !== -1) {
    horariosDisponiveis.splice(indexHorario, 1);
  }

  // Atualiza a lista de horários disponíveis
  exibirHorariosDisponiveis();
}

function exibirHorariosDisponiveis() {
  var horarios = getHorariosDisponiveis();

  var horariosDiv = document.getElementById("horariosDisponiveis");
  horariosDiv.innerHTML = '';

  for (var i = 0; i < horarios.length; i++) {
    var horario = horarios[i];
    var button = document.createElement("button");
    button.innerText = horario;
    button.className = "horario";
    button.onclick = function() {
      // Desmarcar o horário selecionado anteriormente
      const horariosSelecionados = document.querySelectorAll('.horario.selecionado');
      horariosSelecionados.forEach((horarioSelecionado) => {
        horarioSelecionado.classList.remove('selecionado');
      });
      // Marcar o novo horário selecionado
      this.classList.add('selecionado');
    };
    horariosDiv.appendChild(button);
  }

  // Adicionar o event listener para prevenir o comportamento padrão do clique
  horariosDiv.addEventListener('click', function(event) {
    event.preventDefault();
  });
}