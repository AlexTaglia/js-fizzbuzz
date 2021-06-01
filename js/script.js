/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, 
ma per i multipli di 3 stampi “Fizz” al posto del numero 
e per i multipli di 5 stampi Buzz. 
Per i numeri che sono 
sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche 
domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
*/

// Creo una variabile da incrementare a ogni ciclo
var list = 0;

// Creo una variabile che incrementerà la mia "list" in questo caso di 1 
var num = 1;

var outputHtml = document.getElementById('output');

for (var x = 1; x <= 100; x++) {
    list += num;

    // Se il mio numero è divisiblie sia per 3 che per 5 stampo FrizBuzz, -> &&(and).
    if (list % 3 === 0 && list % 5 === 0){
        output.innerHTML += '<br/>' + "Fizz" + "Buzz";

    // Se il mio numero è divisiblie solo per 5 stampo Buzz.  
    } else if (list % 5 === 0){
        output.innerHTML += '<br/>' + "Buzz";

    // Se il mio numero è divisiblie solo per 3 stampo Fizz.  
    } else if (list % 3 === 0){
        output.innerHTML += '<br/>' + "Fizz";

    // Altrimenti scrivo semplicemente il numero  
    } else {
        output.innerHTML += '<br/>' + list;

    }
} 