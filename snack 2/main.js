console.log("Hello Snack 2");



/* A partire da un array di stringhe, crea un secondo array 
formattando le stringhe del primo array in minuscolo e
 con l’iniziale maiuscola.
 */

 const myWords = ["pippo", "pLUTO", "PAperino", "PippoBAUDO", "PIPPOFRanco"];

 const myWordsFix = myWords.map(function (word) {
     return word[0].toUpperCase() + word.slice(1).toLowerCase();
 })
 
 console.log(myWords);
 console.log(myWordsFix);