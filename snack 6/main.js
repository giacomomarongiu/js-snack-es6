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
function randomNumbers(n) {
    let x = Math.floor(Math.random() * n);
    return x;
}
//Verifico se funziona
//console.log(randomFouls());


//Utilizzo Map sul mio array per modificare il valori con i numeri random
footballTeams.forEach(team => {
    //Utilizzo le mie funzioni qui dentro
    team.puntifatti = randomNumbers(100), team.fallisubiti = randomNumbers(50);
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
row.classList.add('row', 'g-3');

//Creo una funzione per stampare gli array sul DOM
/** Questa funzione serve per stampare sul DOM un array di oggetti
 * che hanno come paramentri nome, punti fatti, falli subiti;
 * 
 * @param {array} teams 
 */
function letsDOM(teams) {
    teams.forEach(team => {
        let { nome, fallisubiti, puntifatti } = team;
        let differentBg = "bg-primary";
        const col = document.createElement('div');
        const card = document.createElement('div');

        //Valuto il caso del secondo array e gli cambio colore per distiguersi
        if (puntifatti === undefined) {
            puntifatti = "";
            differentBg = "bg-secondary"
        }

        //Aggiungo a ogni iterazione una colonna
        row.append(col);
        col.classList.add('col-4', 'p-1');

        //Aggiungo a ogni iterazione una card
        col.append(card);
        card.classList.add('card');

        const markup = `
    <div class="card-body ${differentBg}">
    <h5 class="card-title">${nome}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Punti fatti:${puntifatti}</h6>
    <p class="card-text">Falli subiti: ${fallisubiti}</p>
     </div>`

        card.innerHTML = markup;
    })
}


//Chiamo la funzione per entrambi gli array
letsDOM(footballTeams);
letsDOM(footballTeamsNoFouls);







//BONUS AUTO-FATTO
//Creare un array che metta in ordine di puntifatti l'array delle squadre
//Stamparlo sul DOM come fosse una classifica


/**Questa funzione serve per stampare in una tabella ordinata per puntifatti sul DOM 
 * un array di oggetti che hanno come paramentri nome, punti fatti, falli subiti;
 * 
 * @param {array} teams 
 */
function letsRank(teams) {
    //Metto in ordine di punti le squadre dell'array
    const rankedTeams = teams.sort((a, b) => b.puntifatti - a.puntifatti);
    //Costruisco sul DOM una tabella che mi li stampi in ordine
    const tab = document.createElement('table');
    container.append(tab);
    tab.classList.add('col-12', 'table','table-primary')
    tab.innerHTML = `  <thead>
    <tr>
      <th scope="col">Posizione</th>
      <th scope="col">Nome Squadra</th>
      <th scope="col">Punti fatti</th>
      <th scope="col">Falli subiti</th>
      <tbody></tbody>
    </tr>
  </thead>`
    let position = 0;
    const tabRow = document.querySelector('tbody')
    rankedTeams.forEach(team => {
        let { nome, fallisubiti, puntifatti } = team;
        //Valuto il caso del secondo array e gli cambio colore per distiguersi
        if (puntifatti === undefined) {
            puntifatti = "ND";
        }
        position = position + 1;

        const markup = `    
        <tr>
        <th scope="row">${position}°</th>
        <td>${nome}</td>
        <td>${puntifatti}</td>
        <td>${fallisubiti}</td>
        </tr>
`
        tabRow.insertAdjacentHTML("beforeend", markup)
    })
}

letsRank(footballTeams)