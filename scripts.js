// Variáveis => Um espaço da memória do computador que guardamos algo(um numero, uma letra, um texto, uma imagem)
// Função => Um trecho de código que só é executado quando é chamado

let key = "8ca4b5324b6b72a4348532a7678aa4e3"

function onScreen(dados){
    document.querySelector("#local").innerHTML = "Tempo em "+ dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".description").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/"+ dados.weather[0].icon + ".png"
    document.querySelector(".humidity").innerHTML = "Umidade: "+ (dados.main.humidity) + "%"
    
}

async function seekCity(city){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+
        city +
        "&appid="+
        key +
        "&lang=pt_br"+
        "&units=metric"
    ).then(resposta => resposta.json())

    onScreen(dados)
}

function clicked(){
    let city = document.querySelector("#input-city").value

    seekCity(city)
}
