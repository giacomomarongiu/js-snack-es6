console.log("Hello Snack 1 - Blocco 5");

/* Crea un array di 10 oggetti che rappresentano una zucchina,
 indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    {
        varieta: "x",
        peso: 1,
        lunghezza: 11,
    },
    {
        varieta: "y",
        peso: 2,
        lunghezza: 9,
    },
    {
        varieta: "y",
        peso: 3,
        lunghezza: 12,
    },
    {
        varieta: "x",
        peso: 4,
        lunghezza: 15,
    },
    {
        varieta: "y",
        peso: 3,
        lunghezza: 16,
    },
    {
        varieta: "x",
        peso: 2,
        lunghezza: 13,
    },
    {
        varieta: "z",
        peso: 1,
        lunghezza: 10,
    },
    {
        varieta: "z",
        peso: 5,
        lunghezza: 13,
    },
    {
        varieta: "y",
        peso: 4,
        lunghezza: 13,
    },
    {
        varieta: "z",
        peso: 2,
        lunghezza: 10,
    },
]

const pesoZucchine = function sum(...myArray) {
    let sum = 0;
    zucchine.forEach(zucchina => {
        const {peso}= zucchina;
        console.log(peso);
        sum +=peso;
    })

    return sum
}

console.log(pesoZucchine(zucchine));