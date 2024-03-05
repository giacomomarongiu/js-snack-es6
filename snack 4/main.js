console.log("Hello Snack 4");
/* 
SNACK 4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l’indicazione se può guidare,
 in base all’età. */

//Creo un array di oggetti che rappresentano persone
const people = [
    {
        nome: "Giacomo",
        cognome: "Marongiu",
        eta: 30
    },
    {
        nome: "Pippo",
        cognome: "Bogdanov",
        eta: 7
    },
    {
        nome: "Pluto",
        cognome: "Da Silva Ribeiro",
        eta: 18
    },
    {
        nome: "Pippo",
        cognome: "Baudo",
        eta: 80
    },
    {
        nome: "Pippo",
        cognome: "Franco",
        eta: 15
    },
    {
        nome: "Enrico",
        cognome: "Papi",
        eta: 7
    },
]

//Lo visualizzo
console.log(people);

const sentecesForPeople = people.map(person => {
    //Verifico la condizione che mi permette di capire se una persona può guidare o meno
    //Restituisco due stringhe diverse a seconda dei casi
    if (person.eta < 18) {
        return `Il signor ${person.nome + " " + person.cognome} ha ${person.eta + " anni"} e non può guidare`
    } else {
        return `Il signor ${person.nome + " " + person.cognome} ha ${person.eta + " anni"} e può guidare`
    }
}
)
// Visualizzo le stringhe una ad una 
sentecesForPeople.forEach(person => console.log(person))