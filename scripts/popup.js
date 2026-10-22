document.addEventListener("keydown", function(evento) {
  if (evento.key === "e" || evento.key === "E") {
    if(popup.style.display == "none"){
        openPopup() 
    }else{
     closePopup() 
  }
}});

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


let periodoSelecionado = "dia";
let climaSelecionado = "sunny";



function atualizarTemaDinamico() {
   
    let periodoTema = (periodoSelecionado === "manhã") ? "dia" : periodoSelecionado;
    
    var tema = DefinirTema(periodoTema, climaSelecionado);
    
    document.body.className = ''; 
    document.body.classList.add('tema-' + tema);

    // Atualiza o ícone do clima no topo 
    const elementoIcone = document.getElementById('icone_clima');
    if (elementoIcone) {
        if (climaSelecionado === "rainy") elementoIcone.textContent = "rainy";
        else if (climaSelecionado === "sunny" && periodoTema === "dia" ) elementoIcone.textContent = "sunny";
         else if (climaSelecionado === "sunny" && periodoTema === "tarde" ) elementoIcone.textContent = "sunny";
        else if (climaSelecionado === "cloud") elementoIcone.textContent = "cloud";
        else if (climaSelecionado === "thunderstorm") elementoIcone.textContent = "thunderstorm";
         else if (climaSelecionado === "sunny" && periodoTema  ==="noite" ) elementoIcone.textContent = "moon_stars";
    }
}

// Escuta alterações nos inputs de período em tempo real
document.querySelectorAll('input[name="periodo"]').forEach(input => {
    input.addEventListener('change', function() {
        periodoSelecionado = this.value;
        atualizarTemaDinamico();
    });
});

// Escuta alterações nos inputs de clima em tempo real
document.querySelectorAll('input[name="situacao_dia"]').forEach(input => {
    input.addEventListener('change', function() {
      
        if (this.value === "tempestade") {
            climaSelecionado = "thunderstorm";
        } else {
            climaSelecionado = this.value;
        }
        atualizarTemaDinamico();
    });
});


function aviso() {
  
    if (window.innerWidth > 1000) {
        new Notify({
            status: 'info',
            title: 'aperte a tecla E para acessar o menu',
            text: '',
            effect: 'fade',
            speed: 300,
            autoclose: false,
            autotimeout: 5000,
            position: 'center',
            gap: 10
        });
    }
}
aviso()