console.log("Snack 3- b5");

//Scrivi una funzione che accetti una stringa come argomento e
// la ritorni girata (es. Ciao -> oaiC)


let word = "prova";

function reverseWord(word) {
    let myword = word;
    //Split trasforma la stringa in un array, 
    //reverse inverte il verso,
    //infine Join la riuisce da stringa
    let myNewWord = myword.split('').reverse().join('');
    return myNewWord;
}

console.log(reverseWord(word));