/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari*/


let parioDispari;   
do {
    parioDispari = prompt('Pari o dispari?');
} while (parioDispari != 'pari' && parioDispari != 'dispari');
console.log(parioDispari);

let number;
do {
    number = parseInt(prompt('Inserisci un numero da 1 a 5'));
} while (number < 1 || number > 5);
console.log('Numero utente ' + number);

randomNumber = Math.floor(Math.random() * 6);
console.log('Numero random ' + randomNumber);

let sum = number += randomNumber;
console.log('Risultato ' + sum);

if (sum % 2 != 0) {
    console.log('Dispari');
} else {
    console.log('Pari');
};

if (parioDispari == sum) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
};


function name(params) {
    
}