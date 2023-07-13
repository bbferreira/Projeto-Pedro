// Defina os dias e horários em que o site está aberto
const openDays = [1, 2, 3, 4, 5, 6]; // Segunda a Sexta
const openHours = [9, 10, 11, 12, 14, 15, 16, 17, 18]; // 9h às 12h e 14h às 18h

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


// Clicavel

function minhaFuncao(element) {
    element.classList.add('clicked');
    console.log('clicou')
}

