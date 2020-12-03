/* Istruzioni:
 - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
 */

$(function (){

  var student = {
    "nome" : "Luca",
    "Cognome" : "Nervi",
    "età" : 35
  }

  for (var key in student) {
    console.log(key, student[key]);
  }

/* - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome */

  var classeBoolean =
  [
    {
      'nome' : 'Paolo',
      'Cognome' : "Bitta",
      "età" : 32
    },
    {
      'nome' : 'Silvano',
      'Cognome' : "Rogi",
      "età" : 29
    },
    {
      'nome' : 'Augusto',
      'Cognome' : "De Marinis",
      "età" : 55
    },
  ];

  for (var key in classeBoolean) {
    console.log(classeBoolean[key].nome, classeBoolean[key].Cognome);
  }

  /* - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

  var name = prompt("Inserisci il nome dello studente");
  var surname = prompt("Inserisci il cognome dello studente");
  var age = Number(prompt("Inserisci l'età dello studente"));

  console.log(name, surname, age);

  classeBoolean.push(
    {
      "nome" : name,
      "Cognome" : surname,
      "età" : age
    }
  )
  
  classeBoolean.push({student});
  

  for (var key in classeBoolean) {
    console.log(classeBoolean[key]);
  }

})