// stampa il cubo dei primi n numeri
// dove n è un numero indicato dall' utente

var n = parseInt(prompt('di quanti primi n numeri vuoi il cubo?'));

for (var i = 0; i < n; i++) {
    var cubo = i * i * i;
    console.log(cubo);
}
