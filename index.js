// pronostico/resultado partido de la fecha
let equipo1 = parseInt(prompt());
let equipo2 = parseInt(prompt());

if (equipo1 > equipo2) {
    alert("gana equipo1");
} else if (equipo1 < equipo2){
    alert("gana equipo2");
} else {
    alert("partido empatado")
}


//crear un objeto que se llame partido y llamarlo varia veces
function partido(equipo1, equipo2) {
    if (equipo1 > equipo2) {
        alert("gana equipo1");
    } else if (equipo1 < equipo2){
        alert("gana equipo2");
    } else {
        alert("partido empatado")
    }
}

partido(3,2);