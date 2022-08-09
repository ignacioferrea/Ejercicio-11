console.log('bc_592066_ejercicio_11-Ignacio_Ferrea-Maximiliano_Zanellato')

let estilo = "original"

function cambiar() {
    if (estilo=="original") {
        document.getElementById('css').href=("css/estilos-urbano.css")
        estilo= "urbano";
    }

    else if (estilo=="urbano"){
        document.getElementById('css').href=("css/estilos-futuro.css")
        estilo= "futuro"
    }

    else {
        document.getElementById('css').href=("css/estilos.css")
        estilo= "original"
    }}