/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (prima senza funzione e poi con funzione)*/

/*let parola = prompt('Inserisci una parola');


let parolaInversa = invertiParola(parola);
console.log(parola);

if (parola == parolaInversa) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}
// Split(scompone elemento in vari array)  Reverse(inverte l'array)  Join(ricompone la stringa)
function invertiParola(stringa) {
    let stringaInversa = stringa.split('').reverse().join('');
    return stringaInversa;
}*/


let string = prompt('Inserisci una parola');
let reverseString = "";
for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
};

if (string == reverseString) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
};