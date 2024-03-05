console.log("Hello Snack 2");

/* A partire da un array di stringhe, crea un secondo array 
formattando le stringhe del primo array in minuscolo e
 con l’iniziale maiuscola.*/

 //Creo un array di stringhe
 const myWords = ["pippo", "pLUTO", "PAperino", "PippoBAUDO", "PIPPOFRanco"];

 //Creo un uovo array modificando con map gli elementi del precente array
 const myWordsFix = myWords.map(function (word) {
    // Applico UpperCase al primo carattere + dico di applicare LowerCase a partire dal secondo
     return word[0].toUpperCase() + word.slice(1).toLowerCase();
 })
 
 console.log("Il mio array inizale");
 console.log(myWords);
 console.log("Il mio array con le stringhe corrette")
 console.log(myWordsFix);