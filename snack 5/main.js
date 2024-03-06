console.log("Hello Snack 5");

/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti
proprietà: nome e peso. Stampare in console la bici
con peso minore utilizzando destructuring e template literal */


//Creo un array di oggetti co proprietà nome e peso
const bikes = [
    {
        nome: "corsa1",
        peso: 8,
    },
    {
        nome: "corsa2",
        peso: 9,
    },
    {
        nome: "corsa3",
        peso: 5,
    },
    {
        nome: "corsa4",
        peso: 11,
    },
    {
        nome: "corsa5",
        peso: 2,
    },
    {
        nome: "corsa6",
        peso: 10,
    },
]

//Lo visualizzo
console.log(bikes);

//Inizializzo la variabile in cui salverò il valore della bici meno pesante
let heavyBikeW = 1000000;
let heavyBikeN = "";
//Utilizzo foreach per ciclare l'array
const heavyBike = bikes.forEach(bike => {
    //Utilizzo il destructuring per inizializzare una variabile e contemporaneamente
    //assegnarle il valore della proprietà peso del mio oggetto
    let { nome, peso } = bike;
    //Verifico la corretta assegnazione
    //console.log(nome, peso);
    if (peso < heavyBikeW) {
        heavyBikeW = peso;
        heavyBikeN = nome;
    }
});
//Utilizzo il templete literal per stampare in log la bici più pesante
console.log(`La bici meno pesante è ${heavyBikeN} e pesa ${heavyBikeW}`);