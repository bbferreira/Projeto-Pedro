
 














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



var horariosDisponiveis = [];

function getHorariosDisponiveis(data) {
  var horarios = [];
  var now = new Date();
  var currentDay = now.getDate();
  var currentHour = now.getHours();

  // Verifica se é após as 20 horas do dia atual
  if (isSameDay(data, now) && currentHour >= 20) {
    alert('Desculpe, os horários para hoje após as 20 horas já foram encerrados. Por favor, escolha outro dia no calendário.');
    return []; // Retorna um array vazio para não exibir horários após as 20 horas do dia atual
  }

  var hora = 9;
  var minutos = 0;

  while (true) {
    var agendamentoData = new Date(data);
    agendamentoData.setHours(hora, minutos);

    if (hora >= 20 && minutos === 0) {
      break;
    }

    // Verifica se é um horário passado no dia atual
    if (isSameDay(data, now) && agendamentoData <= now) {
      minutos += 45;
      if (minutos >= 60) {
        minutos = 0;
        hora++;
      }
      continue;
    }

    horarios.push(hora.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0'));

    minutos += 45;
    if (minutos >= 60) {
      minutos = 0;
      hora++;
    }

    if (hora === 20 && minutos === 0) {
      break;
    }
  }

  // Armazena os horários disponíveis na variável global
  horariosDisponiveis = horarios.slice();

  console.log('Horários Disponíveis:', horariosDisponiveis);
  return horarios;
}
let  horarioSelecionado = null;
function exibirHorariosDisponiveis() {
  var dataSelecionada = $("#calendario").datepicker("getDate");
  var horarios = getHorariosDisponiveis(dataSelecionada);

  var horariosDiv = document.getElementById("horariosDisponiveis");
  horariosDiv.innerHTML = '';

  if (horarios.length === 0) {
      return;
  }

  for (var i = 0; i < horarios.length; i++) {
      (function (horario) {
          var button = document.createElement("button");
          button.innerText = horario;
          var horarioSelecionadoTexto = horario;
          button.className = "horario horario-button";

          // Fazer uma solicitação AJAX para buscar a cor do servidor
        

          button.addEventListener("click", function () {
              // Seu código de clique aqui
              button.style.backgroundColor = "orange";
              button.style.color = "white"; // Defina a cor do texto como branco
              agendarHorario(horario, horarios, horariosDiv, button);
          });

          horariosDiv.appendChild(button);
      })(horarios[i]);
  }

  horariosDiv.addEventListener('click', function (event) {
      event.preventDefault();
  });
}




function agendarHorario(horario, horarios, horariosDiv, button) {
  var horarioSelecionadoTexto = horario;
  var dataSelecionadas = $("#calendario").val();
  var botoes = document.getElementsByClassName("horario");
  var cor = "orange"

  // Chama a função para verificar se o horário já foi agendado
  $.ajax({
      type: "POST",
      url: "inserir_horario.php", // Substitua pelo caminho correto do seu arquivo PHP
      data: { horario: horarioSelecionadoTexto, data: dataSelecionadas },
      success: function (response) {
          var data = JSON.parse(response); // Converte a resposta JSON em um objeto JavaScript

          if (data.error) {
              alert(data.error); // Exibe a mensagem de erro do servidor
          } else {
              var confirmacao = window.confirm(`Você tem certeza que deseja agendar para o horário: ${horarioSelecionadoTexto}? Você não poderá alterá-lo depois`);
              if (confirmacao) {
                  button.disabled = true; // Desabilita o botão após o agendamento
                  if (data.agendado) {
                      alert(`Este horário já foi agendado por outra pessoa,  por favor slecione  outro`);
                  } else {
                      $.ajax({
                          type: "POST",
                          url: "inserir_horario.php", // Substitua pelo caminho correto do seu arquivo PHP
                          data: { horario: horarioSelecionadoTexto, data: dataSelecionadas },
                          success: function (response) {
                              console.log(response);
                              alert(`Seu Horário ${horarioSelecionadoTexto} foi selecionado com sucesso! Pode clicar no botão finalizar agendamento e, se preferir, deixar alguma observação do corte!`);

                              // Fazer uma solicitação AJAX para buscar a cor do servidor
                              $.ajax({
                                  type: "GET", // Use um método GET para buscar a cor
                                  url: "funcoes.php",
                                  data: {  horario: horarioSelecionadoTexto, cor: cor },
                                  success: function (data) {
                                      // response deve conter a cor do banco de dados
                                      
                                          // Aplicar a cor recuperada ao botão
                                          button.style.backgroundColor = "orange";
                                          button.style.color = "white"; // Defina a cor do texto como branco
                                      
                                  },
                                  error: function (error) {
                                      console.log(error);
                                  }
                              });

                              document.getElementById("agendar-button").addEventListener("click", function () {
                                  finalizarAgendamento(horarioSelecionadoTexto);
                              });
                          },
                          error: function (error) {
                              console.log(error);
                              alert("Erro ao inserir horário.");
                          }
                      });
                  }
              }
          }
      },
      error: function (error) {
          console.log(error);
          alert("Erro ao verificar horário.");
      }
  });
}



  
// Exibir horários disponíveis ao carregar a página inicial
exibirHorariosDisponiveis();

function isSameDay(date1, date2) {
  return date1.getDate() === date2.getDate() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getFullYear() === date2.getFullYear();
}






// Exibir horários disponíveis ao carregar a página inicial
exibirHorariosDisponiveis();




// Finalizar agendamento
function finalizarAgendamento(horarioSelecionadoTexto) {

  const nome = document.querySelector('input[name="name"]').value;
  const celular = document.querySelector('input[name="phone"]').value;
  const dataSelecionada = document.querySelector('input[name="data"]').value;
  const observacao = document.querySelector('textarea[name="message"]').value;
const horarioSelecionado = horarioSelecionadoTexto;


  
  const dadosFormulario = [
    { campo: 'Nome', valor: nome },
    { campo: 'Celular', valor: celular },
    { campo: 'Data', valor: dataSelecionada },
    { campo: 'Observação', valor: observacao },
    { campo: 'Horário', valor: horarioSelecionado },
  ];


   // Adicionar o horário selecionado aos dados do formulário
   

  let dadosServicos = [];
  
  



  

  // Adicionando os dados dos serviços selecionados ao array dadosServicos
  const divsPricingCard = document.querySelectorAll('.pricing-card');
  let servicoSelecionado = false; // Variável para rastrear se um serviço foi selecionado
  divsPricingCard.forEach((div) => {
    if (div.style.backgroundColor === 'orange') {
      servicoSelecionado = true;
      const titulo = div.querySelector('#titulo').innerText;
      const paragrafo = div.querySelector('#paragrafo').innerText;
      const preco = div.querySelector('#data').getAttribute('value');
      dadosServicos.push({ titulo, preco });
    }
  });

  


 
  if (!servicoSelecionado) {
    alert('Por favor, escolha um serviço antes de finalizar o agendamento.');
    return; // Não permita que o agendamento seja finalizado sem escolher um serviço
  }








































































  // Combinar os dados dos serviços e do formulário em uma única string
  let mensagem = 'Agendamento:\n';
  for (const item of dadosServicos) {
    mensagem += `Serviço:${item.titulo}: Valor: R$${item.preco}\n`;
  }



  mensagem += '\nCliente:\n';
  for (const item of dadosFormulario) {
    mensagem += `${item.campo}: ${item.valor}\n`;
  }

  // Codificar a mensagem para usar na URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Abre o WhatsApp com a mensagem preenchida
  const numeroWhatsApp = '5514996977125'; // Substitua pelo número do WhatsApp desejado
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
  window.open(urlWhatsApp);


 
 
}


