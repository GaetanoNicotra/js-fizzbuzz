// Utilizzo il ciclo for
// inserisco le condizioni da rispettare affinchè il ciclo for sia verificato
// stampo in console il risultato


for (let i = 1; i <= 100; i++) {

    // se il numero è un multiplo di tre e di cinque
    // stampo la parola "FizzBuzz" al posto del numero
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    // se il numero è un multiplo di tre
    // stampo la parola "Fizz" al posto del numero

    else if (i % 3 == 0) {
        console.log("Fizz")
    }

    // se il numero è un multiplo di cinque
    // stampo la parola "Buzz" al posto del numero

    else if (i % 5 == 0) {
        console.log("Buzz")
    }

    // se il numero non è multiplo ne 5 ne di 3 stampo il numero
    else {
        console.log(i);
    }
}

/*BONUS

for (let i = 1; i <= 100; i++){
    let messaggio = i + " ";

    if(i % 3 == 0){
        messaggio += "Fizz";
    }

    if (i % 5 == 0){
        messaggio += "Buzz";
    }

    console.log(messaggio)
}*/