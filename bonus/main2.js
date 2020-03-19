//chiedo età persona 1
var etàP1 = parseInt(prompt("Quanti anni hai persona 1?"));

//chiedo età persona 2
var etàP2 = parseInt(prompt("Quanti anni hai persona 2?"));

//capire quale età è maggiore
var etàMaggiore;

//capisco quale è maggiore
if (etàP1 > etàP2){
 etàMaggiore = etàP1;
}else if (etàP1 < etàP2){
  etàMaggiore = etàP2;
}

document.getElementById("mio_id").innerHTML = etàMaggiore;
