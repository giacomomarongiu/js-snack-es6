console.log("Ciao Snack 2 - b5");

/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

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
        lunghezza: 25,
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
        lunghezza: 17,
    },
    {
        varieta: "z",
        peso: 5,
        lunghezza: 13,
    },
    {
        varieta: "y",
        peso: 4,
        lunghezza: 18,
    },
    {
        varieta: "z",
        peso: 2,
        lunghezza: 10,
    },
]





let underZucchine = [];
let overZucchine = [];
let pesoUnderZucchine = 0;
let pesoOverZucchine = 0;

zucchine.forEach(zucchina => {
    const { lunghezza, peso } = zucchina;
    //console.log(lunghezza);
    if (lunghezza > 15) {
        pesoOverZucchine += peso
        overZucchine = [...overZucchine, zucchina]
        return overZucchine
    } else {
        underZucchine = [...underZucchine, zucchina]
        pesoUnderZucchine += peso
        return overZucchine
    }
})

console.log(underZucchine);
console.log(pesoUnderZucchine);
console.log(overZucchine);
console.log(pesoOverZucchine);