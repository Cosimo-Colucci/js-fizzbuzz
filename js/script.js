// ciclo for che inizia a contare da uno a 100 un numero alla volta
for (let i = 1 ; i < 100 ; i = i + 1){

// variabile la quale confronta i con 3 && i con 5 per vedere se essi sono divisibili fra essi
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log ("FizzBuzz")

// variabile la quale confronta i con 3 per vedere se essi sono divisibili fra loro
    } else if (i % 3 === 0){
        console.log ("Fizz")

// variabile la quale confronta i con 5 per vedere se essi sono divisibili fra loro
    } else if (i % 5 === 0){
        console.log ("Buzz")

// in tuttu gli altri casi stampiamo il numero corrispondente
    } else {
        console.log (i)
    }
        
}