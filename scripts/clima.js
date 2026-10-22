const lat = -23.51917;
const log = -46.83583;

// URL configurada para trazer o clima ATUAL (current)
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&current=temperature_2m,weather_code`;

fetch(url)
  .then(response => response.json())
  .then(data => {
  
    const tempAtual = data.current.temperature_2m;
    const codigoClima = data.current.weather_code;   
    const condicaoClima = traduzirClima(codigoClima);

    
     exibirTemp.innerHTML = tempAtual+"°C"
    

  const elementoIcone = document.getElementById('icone_clima');

var iconeAgora = obterHorarioIcone()

if (elementoIcone) {
  if (condicaoClima === "Chovendo") {
    elementoIcone.textContent = "rainy";
  } else if (condicaoClima === "Céu limpo") {
    if(iconeAgora === "dia" || iconeAgora === "tarde" ){
    elementoIcone.textContent = "sunny";
    }else{
       elementoIcone.textContent = "moon_stars";
    }
  } else if (condicaoClima.includes("Nublado")) {
    elementoIcone.textContent = "cloud";
  } else if (condicaoClima === "Tempestade com trovoadas") {
    elementoIcone.textContent = "thunderstorm";
  }
} else {
  console.error("Não foi encontrado nenhum elemento com o ID 'icone_clima' no HTML.");
}
      
 
   
 const evento = new CustomEvent('climaCarregado', {
      detail: { condicao: condicaoClima }
    });
    window.dispatchEvent(evento);

  


  })
  .catch(error => console.error("Erro ao buscar clima:", error));

 
function traduzirClima(code) {
  if (code === 0) return "Céu limpo";
  if (code >= 1 && code <= 3) return "Nublado / Ensolarado";
  if (code >= 51 && code <= 67) return "Chovendo";
  if (code >= 80 && code <= 82) return  "Chovendo";
  if (code >= 95) return "Tempestade com trovoadas";
  return "Condição desconhecida";
}

function obterHorarioIcone(){
    var data = new Date();
    var hora = data.getHours();
    var resultadoHorario;

    if (hora >= 6 && hora < 12) {
        resultadoHorario = "dia";
    } else if (hora >= 12 && hora < 18) {
        resultadoHorario = "tarde";
    } else {
        resultadoHorario = "noite";
    }
    return resultadoHorario;
}
