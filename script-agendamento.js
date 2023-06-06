const horariosDisponiveis = [
    { hora: '15:00', disponivel: true },
    { hora: '16:00', disponivel: false },
    { hora: '17:00', disponivel: true },
    // Adicione mais horários disponíveis aqui...
  ];
  
  function exibirHorariosDisponiveis() {
    const servico = document.getElementById('servico').value;
    if (!servico) {
      alert('Selecione um serviço');
      return;
    }
  
    const horariosDiv = document.getElementById('horariosDisponiveis');
    horariosDiv.innerHTML = '';
  
    const horariosFiltrados = horariosDisponiveis.filter(horario => horario.disponivel);
  
    if (horariosFiltrados.length === 0) {
      horariosDiv.innerHTML = 'Nenhum horário disponível.';
    } else {
      horariosFiltrados.forEach(horario => {
        const btn = document.createElement('button');
        btn.textContent = horario.hora;
        btn.onclick = () => selecionarHorario(horario.hora);
        horariosDiv.appendChild(btn);
      });
    }
  }
  
  function selecionarHorario(horario) {
    const servico = document.getElementById('servico').value;
    if (!servico) {
      alert('Selecione um serviço');
      return;
    }
  
    const urlParams = new URLSearchParams();
    urlParams.set('servico', servico);
    urlParams.set('horario', horario);
  
    const url = `nome.html?${urlParams.toString()}`;
    window.location.href = url;
  }