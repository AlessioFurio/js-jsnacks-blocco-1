// il software deve chiedere x 5 volte all' utente di inserire un numero
// il programma stampa la somma di tutti i numeri inseriti


//SOLUZIONE SENZA ARRAY

// var valore = 0;
// var somma = 0;
//
// for (var i = 0; i < 5; i++) {
//     valore = parseInt(prompt('inserisci un valore'));
//     somma = somma + valore;
// }
//
// console.log('la somma è ' + somma);



// SOLUZIONE CON ARRAY

var arrayNumeri = [];
var valore = 0;
somma = 0;

for (var i = 1; i <= 5; i++) {
    valore = parseInt(prompt('inserisci il valore ' + i));
    arrayNumeri.push(valore);
}

for (var i = 0; i < arrayNumeri.length; i++) {
    somma = somma + arrayNumeri[i];
}
console.log(arrayNumeri);
console.log('la somma degli elementi dell\' array è: ' + somma);
