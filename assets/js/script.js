
//conexao banco de dados 

let  db = openDatabase("dbHorarios", "1.0","Meu primeiro banco",  4048);
db.transaction(function(criar){
 criar.executeSql("CREATE TABLE users(ID PRIMARY KEY, nome TEXT, senha TEXT)");
});  















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




function salvarHorarios(dataSelecionada, horarioSelecionadoTexto) { 
  db.transaction(function(armazenar) {
    armazenar.executeSql("SELECT * FROM users WHERE senha = ?", [dataSelecionada], function(tx, resultado) {
      // Verifica se a consulta retornou resultados para o dia selecionado
      if (resultado.rows.length > 0) {
        let horariosSalvos = resultado.rows.item(0).nome || ''; // Recupera os horários salvos ou inicia com string vazia caso não haja registro
        let horariosSalvosArray = horariosSalvos.split(';'); // Converte os horários salvos em um array

        // Verifica se o horário já foi salvo para o dia selecionado
        if (horariosSalvosArray.includes(horarioSelecionadoTexto)) {
          console.log('Horário já está inserido no banco de dados:', horarioSelecionadoTexto);
        } else {
          // Adiciona o novo horário selecionado à lista de horários salvos
          horariosSalvos += horarioSelecionadoTexto + ';';

          armazenar.executeSql("UPDATE users SET nome = ? WHERE senha = ?", [horariosSalvos, dataSelecionada], function(tx, resultado) {
            console.log('Horário inserido no banco de dados para o dia selecionado:', horarioSelecionadoTexto);
          }, function(tx, erro) {
            console.error('Erro ao inserir horário no banco de dados:', erro.message);
          });
        }
      } else {
        // Caso não haja resultados para o dia selecionado, insere um novo registro na tabela
        armazenar.executeSql("INSERT INTO users (nome, senha) VALUES (?, ?)", [horarioSelecionadoTexto, dataSelecionada], function(tx, resultado) {
          console.log('Horário inserido no banco de dados para o dia selecionado:', horarioSelecionadoTexto);
        }, function(tx, erro) {
          console.error('Erro ao inserir horário no banco de dados:', erro.message);
        });
      }
    });
  });
}

// exibirhorario disponivel 

function exibirHorariosDisponiveis() {
  var dataSelecionada = $("#calendario").datepicker("getDate");
  var horarios = getHorariosDisponiveis(dataSelecionada);

  var horariosDiv = document.getElementById("horariosDisponiveis");
  horariosDiv.innerHTML = '';


  if (horarios.length === 0) {
    return; // Não exibe os horários se não houver disponíveis
  }

  db.transaction(function(transacao) {
    transacao.executeSql(
      "SELECT * FROM users WHERE senha = ?",
      [dataSelecionada.toISOString().slice(0, 10)],
      function(tx, resultado) {
        var horariosAgendados = [];

        if (resultado.rows.length > 0) {
          var horariosSalvosArray = resultado.rows.item(0).nome.split(';');
          horariosAgendados = horariosSalvosArray.filter(function(horario) {
            return horario !== '';
          });

          // Filtrar horários disponíveis para exibir apenas os não agendados
          horarios = horarios.filter(function(horario) {
            return !horariosAgendados.includes(horario);
          });
        }

        // Exibir os botões de horários disponíveis
        for (var i = 0; i < horarios.length; i++) {
          var horario = horarios[i];
          var button = document.createElement("button");
          button.innerText = horario;
          button.className = "horario";


    // Adicionar o evento de clique para exibir o alerta de confirmação
    button.onclick = function() {
      // Isolar o horário selecionado em uma variável
      let horarioSelecionadoTexto = this.innerText;

    

      // Exibir o alerta de confirmação
      let confirmacao = window.confirm(`Você tem certeza que deseja agendar para o horário: ${horarioSelecionadoTexto}? Você não poderá alterá-lo depois`);

      if (confirmacao) {
        // Marcar o novo horário selecionado com a classe "selecionado"
        this.classList.add('selecionado');

       // Salvar o horário agendado no localStorage
       const dataSelecionada = $("#calendario").datepicker("getDate");
       const dataString = dataSelecionada.toISOString().slice(0, 10); // Obtém a data no formato 'yyyy-mm-dd'
      
       const horariosAgendados = getHorariosAgendados();
       if (!horariosAgendados[dataString]) {
         horariosAgendados[dataString] = [];
       }
       horariosAgendados[dataString].push(horarioSelecionadoTexto);
       salvarHorariosAgendados(horariosAgendados);

 // Chamar a função salvarHorarios passando o horarioSelecionadoTexto e a dataSelecionada como argumentos
 const dataSelecionadaFormatada = $.datepicker.formatDate('yy-mm-dd', dataSelecionada);
 salvarHorarios(dataSelecionadaFormatada, horarioSelecionadoTexto);

 // Ajustar o estilo do elemento para ocultá-lo (display: none)
 this.style.display = 'none';
    
       alert(`Horário ${horarioSelecionadoTexto} selecionado com sucesso! Pode clicar no botão finalizar agendamente e se preferir deixar alguma observação do corte!`);

  

      } else {
        // Caso o usuário cancele a seleção, remove a classe "selecionado" do botão do horário
        this.classList.remove('selecionado');
      }
    };

    horariosDiv.appendChild(button);
  }
},
function(tx, erro) {
  console.error('Erro ao executar consulta SQL:', erro.message);
}
);
});

  // Adicionar o event listener para prevenir o comportamento padrão do clique
  horariosDiv.addEventListener('click', function(event) {
    event.preventDefault();
  });
}
// Exibir horários disponíveis ao carregar a página inicial
exibirHorariosDisponiveis();

function isSameDay(date1, date2) {
  return date1.getDate() === date2.getDate() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getFullYear() === date2.getFullYear();
}


var horarioAgendado = null;
// Função para recuperar os horários agendados do localStorage
function getHorariosAgendados() {
  const horariosAgendadosString = localStorage.getItem('horariosAgendados');
  return horariosAgendadosString ? JSON.parse(horariosAgendadosString) : {};
}
// Função para salvar os horários agendados no localStorage
function salvarHorariosAgendados(horariosAgendados) {
  localStorage.setItem('horariosAgendados', JSON.stringify(horariosAgendados));
}




// Finalizar agendamento
function finalizarAgendamento() {

  const nome = document.querySelector('input[name="name"]').value;
  const celular = document.querySelector('input[name="phone"]').value;
  const dataSelecionada = document.querySelector('input[name="data"]').value;
  const observacao = document.querySelector('textarea[name="message"]').value;
  const horarioSelecionado = document.querySelector('.horario.selecionado');

  // Verifica se um horário foi selecionado
  const horario = horarioSelecionado ? horarioSelecionado.innerText : 'Nenhum horário selecionado';

  if (!horarioSelecionado) {
    // Exibe um alerta informando que o usuário precisa selecionar um horário antes de finalizar o agendamento
    alert("Por favor, selecione um horário disponível antes de finalizar o agendamento.");
    return;
  }

  
  
  // Atualiza a lista de horários disponíveis
  exibirHorariosDisponiveis();



  
  

  const dadosFormulario = [
    { campo: 'Nome', valor: nome },
    { campo: 'Celular', valor: celular },
    { campo: 'Data', valor: dataSelecionada },
    { campo: 'Observação', valor: observacao },
    { campo: 'Horário', valor: horario } // Renomeie o campo para 'Horário' para evitar confusão com a variável 'horario'
  ];


   // Adicionar o horário selecionado aos dados do formulário
   

  let dadosServicos = [];
  
  



  

  // Adicionando os dados dos serviços selecionados ao array dadosServicos
  const divsPricingCard = document.querySelectorAll('.pricing-card');
  divsPricingCard.forEach((div) => {
    if (div.style.backgroundColor === 'orange') {
      const titulo = div.querySelector('#titulo').innerText;
      const paragrafo = div.querySelector('#paragrafo').innerText;
      const preco = div.querySelector('#data').getAttribute('value');
      dadosServicos.push({ titulo, preco });
    }
  });

 


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


       