// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1 = prompt('inserisci parola 1');
var parola2 = prompt('inserisci parola 2');

var lenghtParola1 = parola1.length;
var lenghtParola2 = parola2.length;

if (lenghtParola1 > lenghtParola2) {
    console.log(parola2);
    console.log(parola1);
}
else if (lenghtParola1 < lenghtParola2) {
    console.log(parola1);
    console.log(parola2);
}
else {
    console.log('sono uguali');
}
