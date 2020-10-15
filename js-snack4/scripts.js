// crea array vuoto
// chiedi all' utente 6 volte di inserire un numero
// se è dispari inseriscilo nell' array


var arrayNumeri = [];

for (var i = 1; i <= 6; i++) {

    var valoreInserito = parseInt(prompt('inserisci il valore ' + i));

    var resto = valoreInserito % 2;

    if (resto == 1) {
        arrayNumeri.push(valoreInserito);
    }
}

console.log(arrayNumeri);
