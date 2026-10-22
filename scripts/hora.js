
function atualizarDataEHora() {
      const agora = new Date();

    
      const opcoesData = { 
        weekday: 'long', 
        day: '2-digit', 
        month: 'long' 
      
      };
      const dataExtenso = agora.toLocaleDateString('pt-BR', opcoesData);

    
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');
      const horarioFormatado = `${horas}:${minutos}:${segundos}`;

      // Inserindo no HTML
      document.getElementById('data-extenso').textContent = dataExtenso;
      document.getElementById('horario').textContent = horarioFormatado;
    }

   
    atualizarDataEHora();
    setInterval(atualizarDataEHora, 1000);