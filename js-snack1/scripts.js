// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var valore1 = parseFloat(prompt('inserisci valore 1'));
var valore2 = parseFloat(prompt('inserisci valore 2'));

if (!isNaN(valore1) && !isNaN(valore2)) {

    if (valore1 > valore2){
        console.log('il valore maggiore è: ' + valore1);
    }
    else if (valore1 < valore2) {
        console.log('il valore maggiore è: ' + valore2);
    }
    else {
        console.log('pareggio');
    }

}
else {
    console.log('non hai digitato un numero corretto');
}
