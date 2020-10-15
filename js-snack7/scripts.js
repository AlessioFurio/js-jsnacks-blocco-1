// calcola somma e media dei numeri da 1 a 10

var somma = 0;

var media = 0;

var n_elementi = 10;

for (var i = 1; i <= n_elementi; i++) {
    var temp_somma = somma + i;
    somma = temp_somma;
}

media = somma / n_elementi;

console.log('la somma è: ' + somma);
console.log('la media è: ' + media);
