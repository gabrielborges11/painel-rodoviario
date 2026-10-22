function obterHorario(){
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



function DefinirClimaComCodigo(condicaoClima){
    var meuIcone = obterHorario()
    var resultadoClima;

    if (condicaoClima === "Chovendo") {
        resultadoClima = "rainy";
    } else if (condicaoClima === "Céu limpo") {
        if( meuIcone === "dia" || meuIcone === "tarde"){
        resultadoClima = "sunny";
        }else{
            resultadoClima = "moon_stars"
        }
    } else if (condicaoClima && condicaoClima.includes("Nublado")) {
        resultadoClima = "cloud";
    } else if (condicaoClima === "Tempestade com trovoadas") {
        resultadoClima = "thunderstorm";
    } else {
        resultadoClima = "sunny"; 
    }

    return resultadoClima;
}

function DefinirTema(periodo, clima){
    var texto = "Tema não encontrado";

    if (periodo == "dia" && clima == "sunny") {
        texto = "dia-limpo";
    } else if (periodo == "dia" && clima == "cloud") {
        texto = "dia-nublado";
    } else if (periodo == "dia" && clima == "rainy") {
        texto = "dia-chovendo";
    } else if (periodo == "dia" && clima == "thunderstorm") {
        texto = "dia-tempestade";
    } else if (periodo == "tarde" && clima == "sunny") {
        texto = "tarde-limpo";
    } else if (periodo == "tarde" && clima == "cloud") {
        texto = "tarde-nublado";
    } else if (periodo == "tarde" && clima == "rainy") {
        texto = "tarde-chovendo";
    } else if (periodo == "tarde" && clima == "thunderstorm") {
        texto = "tarde-tempestade";
    } else if (periodo == "noite" && clima == "sunny") {
        texto = "noite-limpo"; 
    } else if (periodo == "noite" && clima == "cloud") {
        texto = "noite-limpo";
    } else if (periodo == "noite" && clima == "rainy") {
        texto = "noite-chovendo";
    } else if (periodo == "noite" && clima == "thunderstorm") {
        texto = "noite-tempestade";
    }
    return texto;
}

window.addEventListener('climaCarregado', function(e) {
    var condicaoClima = e.detail.condicao; 

    var h = obterHorario();
    var c = DefinirClimaComCodigo(condicaoClima);
    var tema = DefinirTema(h, c);

  
    document.body.className = ''; 
    document.body.classList.add('tema-' + tema); 

   
});