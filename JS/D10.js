/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("------esercizio A-------");

let sum = 10 + 20;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("------esercizio B-------");

let random = Math.floor(Math.random() * 20) + 1;

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("------esercizio C-------");

let me = {
  name: "John",
  surname: "Oliveira",
  age: 26,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("------esercizio D-------");

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("------esercizio E-------");

me.skills = [`html, css`];

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("------esercizio F-------");

me.skills.push(`forse javascript`);

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("------esercizio G-------");

me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("------esercizio 1-------");

function dice() {
  let randomic = Math.floor(Math.random() * 6) + 1;
  return randomic;
}

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("------esercizio 2-------");

function whoIsBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(whoIsBigger(5, 10));
console.log(whoIsBigger(20, 10));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("------esercizio 3-------");

function splitMe(stringa) {
  return stringa.split(" ");
}

console.log(splitMe("Coding Is Hard To Start"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("------esercizio 4-------");

function deleteOne(str, bool) {
  if (bool === true) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}

console.log(deleteOne("john", true)); // ohn
console.log(deleteOne("john", false)); // joh

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("------esercizio 5-------");

function onlyLetters(str) {
  // qui sotto ho lasciato appunti più per me visto che qui ci ho perso un'ora..
  return str.replace(/\d+/g, ""); // ricercato modificatori regex; /: Delimitatori della regex.
  // \d: Carattere di escape per identificare un numero.
  // +: Indica che il carattere numerico può essere presente una o più volte.
  // g: Modificatore globale che indica di eseguire la ricerca e la sostituzione su tutta la stringa (non solo sulla prima occorrenza).
}

console.log(onlyLetters("i got 4 dogs and 2 cats"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("------esercizio 6-------");

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isThisAnEmail(mail) {
  if (!regexEmail.test(mail)) {
    return false;
  } else {
    return true;
  }
}

console.log(isThisAnEmail("john.oliver98@example.com")); // true
console.log(isThisAnEmail("pippo.baudo")); // false

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("------esercizio 7-------");

const dayNames = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

function whatDayIsIt() {
  const today = new Date();
  const dayI = today.getDay();
  return dayNames[dayI];
}

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("------esercizio 8-------");

function rollTheDices(number) {
  let sum = 0;
  let values = [];

  // ciclo per leggere i numeri di dice()
  for (let i = 0; i < number; i++) {
    let randomNum = dice();

    // spingo nell'arrey
    values.push(randomNum);
    sum += randomNum;
  }

  // Ritorna un oggetto con sum e values
  return {
    sum: sum,
    values: values,
  };
}

console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("------esercizio 9-------");

function howManyDays(parData) {
  const today = new Date();

  const pastDate = new Date(parData); // Ottiene la data passata come parametro

  const diffDays = today - pastDate; // Provato a far la differenza ma errato

  return diffDays;
}

console.log(howManyDays(20_06_2024)); // non riuscito, ricevo un numero a caso di 13 cifre

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("------esercizio 10-------");

function isTodayMyBirthday() {
  let birthDay = "28-06";

  const today = new Date();
  const day = today.getDay();
  const mounth = today.getMonth();

  if (day === birthDay && mounth === birthDay) {
    return true;
  } else {
    return false;
  }
}

console.log(isTodayMyBirthday("28-06")); // Da false anche se ha lo stesso valore
// Non ci volevo perder troppo tempo negli esercizi del tempo..

// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("------esercizio 11-------");

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

// Test della funzione
const sampleObject = {
  name: "John",
  age: 26,
  email: "john@example.com",
};

console.log(deleteProp(sampleObject, "email")); // john, 26
console.log(deleteProp(sampleObject, "name")); // 26

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("------esercizio 12-------");

const newestMovie = (array) => {
  let result = { Year: 1900 }; // settato punto di partenza lettura array
  array.forEach((movie) => {
    let currentYear = parseInt(movie.Year); // conversione stringa in numero
    if (currentYear > result.Year) {
      // analizzo che year sia maggiore del dato trovato
      result = movie;
    }
  });

  return result;
};

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("------esercizio 13-------");

const countMovies = (array) => {
  return array.length; // legge l'intera lunghezza espressa in numero dell'array movies
};

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("------esercizio 14-------");

const onlyTheYears = (array) => {
  return array.map((elem) => elem.Year); // map crea un array dove gli indico di prelevare solo la proprietà Year da movies
};

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("------esercizio 15-------");

const onlyInLastMillennium = (array) => {
  return array.filter((movie) => {
    // filtro le proprietà
    return parseInt(movie.Year) < 2000; // seleziono solo le proprietà Year minori del millennio corrente
  });
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("------esercizio 16-------");
/*
soluzione esercizio passato
 const sumAllTheYears = (array) => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0); // reduce è un metodo che fa da operatore per qualsiasi operazione negli array
};

console.log(sumAllTheYears(movies)); */

function sumAllTheYears(array) {
  // altro metodo
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i].Year); // converto le stringhe in numeri e le sommo
  }
  return sum;
}

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("------esercizio 17-------");

function searchByTitle(array, titolo) {
  return array.filter((elem) => elem.Title.includes(titolo));
}

console.log(searchByTitle(movies, "Lord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("------esercizio 18-------");

function searchAndDivide(array, titolo) {
  const match = array.filter((elem) => elem.Title.includes(titolo));
  const unmatch = array.filter((elem) => !elem.Title.includes(titolo));
  return { match, unmatch };
}

console.log(searchAndDivide(movies, "Avenger"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("------esercizio 19-------");

function removeIndex(index) {
  return [...movies.slice(0, index), ...movies.slice(index + 1)];
}

console.log(removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("------esercizio 20-------");

containerSelector = () => {
  const container = document.getElementById("container");
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("------esercizio 21-------");

tdSelector = () => {
  const tabTd = document.querySelectorAll("td");
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("------esercizio 22-------");

function printTableCells() {
  const cells = document.querySelectorAll("td");
  cells.forEach((cell) => {
    console.log(cell.textContent);
  });
}

printTableCells();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("------esercizio 23-------");

function redLinks() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.backgroundColor = "red";
  });
}

console.log(redLinks());

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("------esercizio 24-------");

function addNewList() {
  const myList = document.getElementById("myList");
  const newListItem = document.createElement("li");
  newListItem.textContent = "Nuovo elemento";

  myList.appendChild(newListItem);
}

addNewList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("------esercizio 25-------");

function clearList() {
  const myList = document.getElementById("myList");

  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
}

clearList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("------esercizio 26-------");

function classTr() {
  const trClass = document.querySelectorAll("tr");
  trClass.classList.add("test");
}

classTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
