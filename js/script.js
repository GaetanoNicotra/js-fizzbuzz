// Utilizzo il ciclo for
// inserisco le condizioni da rispettare affinchè il ciclo for sia verificato
// stampo in console il risultato

let pippo = ' ';

for (let i=1; i<=100; i++){
    console.log(i)

    if(i % 3 == 0){
        console.log(`Fizz`)
    }

    if(i % 5 == 0)
        console.log(`Buzz`)
}