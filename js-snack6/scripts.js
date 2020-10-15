// stampa le potenze di 2 senza superare il numero 1000


var arrayNumeri = [];
var risultatoPotenza = Math.pow(2, 2);
var base = 2;

arrayNumeri.push(1);
arrayNumeri.push(base);
arrayNumeri.push(risultatoPotenza);

for (var i = 2; i <= 10 && risultatoPotenza <1000; i*2) {

    var risultatoPotenza = risultatoPotenza*i;

    if (risultatoPotenza < 1000) {
        arrayNumeri.push(risultatoPotenza);
    }
}

console.log(arrayNumeri);
