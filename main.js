
// chiedo il numero dei  km
var kilometriDaFare = prompt("Inserisci i kilometri da eseguire?");
// chiedo l'età
var etàUtente = prompt("Quanti anni hai?");
// sappiamo quanto costa 1 km
var costo1Kilometro = 0.21;
// calcolo il prezzo del viaggio
var prezzoFinale = kilometriDaFare * costo1Kilometro;
// in base all'età calcolo lo sconto
var sconto;
//calcolo sconto minorenne e over 65
if (etàUtente <= 17){
  sconto = prezzoFinale * 20 / 100;
} else if (etàUtente >= 66){
  sconto = prezzoFinale * 40 / 100;
} else {
  sconto = 0;
}
// sottraggo dal prezzo del viaggio lo sconto (se presente)
var prezzoScontato = prezzoFinale - sconto;
// stampo a video questo valore
document.getElementById('mio_id').innerHTML = prezzoScontato;
console.log(sconto);
