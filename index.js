// pronostico/resultado partido de la fecha
/*let equipo1 = parseInt(prompt());
let equipo2 = parseInt(prompt());

if (equipo1 > equipo2) {
    alert("gana equipo1");
} else if (equipo1 < equipo2){
    alert("gana equipo2");
} else {
    alert("partido empatado")
}*/


//crear un objeto que se llame partido y llamarlo varia veces
/*function partido(equipo1, equipo2) {
    if (equipo1 > equipo2) {
        alert("gana equipo1");
    } else if (equipo1 < equipo2){
        alert("gana equipo2");
    } else {
        alert("partido empatado")
    }
}

partido(3,2);
partido(1,2);
partido(2,2);
partido(4,2);
*/
let partido1 = prompt('ingresar elemento');
let partido2 = prompt('ingresar elemento');
let partido3 = prompt('ingresar elemento');
let partido4 = prompt('ingresar elemento');
let partido5 = prompt('ingresar elemento');

if ((partido1 != "") && (partido2 != "") && (partido3 != "") && (partido4 != "") && (partido5 != ""))  {
    let pronostico = "1- Resultado partido 1 " + partido1 + " "
    "2- Resultado partido 2 " + partido1 + " "
    "3- Resultado partido 3 " + partido1 + " "
    "4- Resultado partido 4 " + partido1 + " "
    "5- Resultado partido 5 " + partido1 + " ";
    alert(pronostico)
} else {alert("es necesario cargar todos los resultados")}