console.log("Hello Snack 6");

/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
 solo nomi e falli subiti e stampiamo tutto in console. */


//Creo un array di oggeti che hanno proprieta:nome, puntifatti,fallisubiti
let footballTeams = [
    {
        nome: "Milan",
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: "Inter",
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: "Juvetus",
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: "Napoli",
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: "Cagliari",
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: "Fiorentina",
        puntifatti: 0,
        fallisubiti: 0,
    },

]
//Lo visualizzo
//console.log(footballTeams);


//Creo una funzione che mi genera numeri random da 0 a 50
function randomFouls() {
    let x = Math.floor(Math.random() * 50);
    return x;
}
//Verifico se funziona
//console.log(randomFouls());


//Creo una funzione che mi genera numeri random da 0 a 100
function randomPoints() {
    let x = Math.floor(Math.random() * 100);
    return x;
}
//Verifico se funziona
//console.log(randomPoints());



//Utilizzo Map sul mio array per modificare il valori con numeri random
footballTeams.map(team => {
    //Utilizzo le mie funzioni qui dentro
    return team.puntifatti = randomPoints(), team.fallisubiti = randomFouls();
})
console.log("Ecco l'array con le squadre e i valori casuali");
console.log(footballTeams);



//Creo un nuovo array vuoto 
let footballTeamsNoFouls=[];

//Usando la destrutturazione lo vado a riempire solo con nom e fallisubiti
footballTeams.forEach(team => {
    //Assegno a due nuove variabili le proprietà che mi interessano
    const { nome, fallisubiti } = team;
    //E' come se a ogni ciclo pushassi nel mio array vuoto solo le mie due proprietà
    footballTeamsNoFouls = [...footballTeamsNoFouls, { nome, fallisubiti }]
});
console.log("Ecco l'array con i puntifatti rimossi");
console.log(footballTeamsNoFouls);