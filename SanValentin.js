/*var clicsD1 = 0;

function bucle(id){

    var elemento = document.getElementById(id);

    if (id === 'no') {
        if (clicsD1 === 0) {
            elemento.querySelector('p').innerText = 'Pero segura?';
        } else {
            elemento.querySelector('p').innerText += '\n segura segura?';
        }
        clicsD1++;
    }
}*/
var clicsD1 = 0;

function bucle(id) {
    var elemento = document.getElementById(id);

    if (id === 'no') {
        if (clicsD1 === 0) {
            elemento.innerText = '¿Pero seguro?';
        } else {
            elemento.innerText += '\n ¿Seguro, seguro?';
        }
        clicsD1++;
    }
}
