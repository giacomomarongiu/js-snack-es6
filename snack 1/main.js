console.log("Hello Snack 1");

/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello
 e alimentazione (benzina, diesel, gpl, elettrico, metano). 
Dividi le automobili in 3 array separati: 
nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */ 

//Creo un array di 10 automobili
const myCars = [

    {
        marca: "Alfa",
        modello: "y",
        alimentazione: "metano",
    },
    {
        marca: "Tesla",
        modello: "x",
        alimentazione: "diesel",
    },
    {
        marca: "Fiat",
        modello: "panda",
        alimentazione: "diesel",
    },
    {
        marca: "Alfa",
        modello: "146",
        alimentazione: "gpl",
    },
    {
        marca: "BMW",
        modello: "berlina",
        alimentazione: "elettrico",
    },
    {
        marca: "BMW",
        modello: "suv",
        alimentazione: "elettrico",
    },
    {
        marca: "Lancia",
        modello: "y",
        alimentazione: "metano",
    },
    {
        marca: "Fiat",
        modello: "panda",
        alimentazione: "benzina",
    },
    {
        marca: "Seat",
        modello: "ibiza",
        alimentazione: "diesel",
    },
    {
        marca: "Alfa",
        modello: "157",
        alimentazione: "benzina",
    },
]
//Lo visualizzo
console.log("Tutte le mie auto");
console.log(myCars);


//Dichiaro un nuovo array ed utilizzzo filter per selezionare le auto benzina
const myCarsBenzina = myCars.filter(myCar => {
    if (myCar.alimentazione === "benzina") {
        return true;
    }
});
//Lo visualizzo
console.log("Le mie auto benzina");
console.log(myCarsBenzina);


//Dichiaro un nuovo array ed utilizzzo filter per selezionare le auto diesel
const myCarsDiesel = myCars.filter(myCar => {
    if (myCar.alimentazione === "diesel") {
        return true;
    }
});
//Lo visualizzo
console.log("Le mie auto diesel");
console.log(myCarsDiesel);


//Dichiaro un nuovo array ed utilizzzo filter per selezionare le auto né diesel nè benzina
const myCarsOthers = myCars.filter(myCar => {
    if (myCar.alimentazione !== "diesel" && myCar.alimentazione !== "benzina") {
        return true;
    }
});
//Lo visualizzo
console.log("Le mie altre auto");
console.log(myCarsOthers);
