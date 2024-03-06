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


//FUNZIONI
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



//Utilizzo Map sul mio array per modificare il valori con i numeri random
footballTeams.map(team => {
    //Utilizzo le mie funzioni qui dentro
    return team.puntifatti = randomPoints(), team.fallisubiti = randomFouls();
})
//Lo stampo
console.log("Ecco l'array con le squadre e i valori casuali");
console.log(footballTeams);



//Creo un nuovo array vuoto 
let footballTeamsNoFouls = [];

//Usando la destrutturazione lo vado a riempire solo con nom e fallisubiti
footballTeams.forEach(team => {
    //Assegno a due nuove variabili le proprietà che mi interessano
    const { nome, fallisubiti } = team;
    //E' come se a ogni ciclo pushassi nel mio array vuoto solo le mie due proprietà
    footballTeamsNoFouls = [...footballTeamsNoFouls, { nome, fallisubiti }]
});
//Lo stampo
console.log("Ecco l'array con i puntifatti rimossi");
console.log(footballTeamsNoFouls);






//BONUS
//CREO ELEMENTI SUL DOM
// Utilizzo una struttura Bootstrap
const main = document.createElement('main');
const container = document.createElement('div');
const row = document.createElement('div');

//Creo struttura nella mia DOM
document.body.append(main);
main.append(container);
container.append(row);

//Assegno struttuta Bootstrap aggiungendo classi ai miei elementi sul DOM
container.classList.add('container');
row.classList.add('row','g-3');

//Creo una funzione per stampare gli array sul DOM
/** Questa funzione serve per stampare sul DOM un array di oggetti
 * che hanno come paramentri nome, punti fatti, falli subiti;
 * 
 * @param {array} teams 
 */
function letsDOM(teams) {
    teams.forEach(object => {
        let {nome,fallisubiti,puntifatti}=object;
        let differentBg= "bg-primary";
        const col = document.createElement('div');
        const card = document.createElement('div');

        //Valuto il caso del secondo array e gli cambio colore per distiguersi
        if(puntifatti===undefined){
            puntifatti = "";
            differentBg ="bg-secondary"
        }

        //Aggiungo a ogni iterazione una colonna
        row.append(col);
        col.classList.add('col-4','p-1');

        //Aggiungo a ogni iterazione una card
        col.append(card);
        card.classList.add('card');

        const markup = `
    <div class="card-body ${differentBg}">
    <h5 class="card-title">${nome}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Punti fatti:${puntifatti}</h6>
    <p class="card-text">Falli subiti: ${fallisubiti}</p>
     </div>`

        card.innerHTML= markup;
    })
}


//Chiamo la funzione per entrambi gli array
letsDOM(footballTeams);
letsDOM(footballTeamsNoFouls);