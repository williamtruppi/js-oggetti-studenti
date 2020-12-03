/* Istruzioni:
 - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
 - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
 - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
 */

$(function (){

  var student = {
    "nome" : "Luca",
    "cognome" : "Nervi",
    "età" : 35
  }

  for (var key in student) {
    console.log(key, student[key]);
  }

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

})