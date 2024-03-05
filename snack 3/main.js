console.log("Hello Snack 3");

/* SNACK 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi. */

// Creo un nuovo array con la lista dei miei animali.
const myAnimals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'mucca',
        famiglia: 'bovidae',
        classe: 'mammiferi'
    },
    {
        nome: 'lupo',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'orata',
        famiglia: 'sparidae',
        classe: 'actinopterygii'
    },
]
//Lo viualizzo
console.log(myAnimals);

//Assegno ad in nuovo array gli elementi del mio vecchio array filtrati per "mammiferi"
const myMammals = myAnimals.filter(animal => animal.classe ==="mammiferi" );
//Lo visualizzo
console.log(myMammals);


//Bonus - Visualizzo i non Mammiferi
//Assegno ad in nuovo array gli elementi del mio vecchio array filtrati per non "mammiferi"
const myNotMammals = myAnimals.filter(animal => animal.classe !=="mammiferi" );
//Lo visualizzo
console.log(myNotMammals);