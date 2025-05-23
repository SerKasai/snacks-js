console.log('Snack 1')
// L'utente inserisce due numeri, il computer stampa il più grande

// Soluzione mia

const num1 = parseFloat(prompt('PRIMO SNACK: Inserisci un numero'))
if (isNaN(num1))
  alert('Errore: Non hai inserito un numero')

const num2 = parseFloat(prompt('Inseriscine un altro'))
if (isNaN(num2))
  alert('Errore: Non hai inserito un numero')

console.log(num1, num2)

if (num1 > num2) {
  console.log(`Il numero più alto è il primo: ${num1}`)

} else if (num1 < num2) {
  console.log(`Il numero più alto è il secondo: ${num2}`)

} else {
  console.log('I numeri sono uguali')
}

// Soluzione corso

// const numeri = []

// while (numeri.length !== 2) {

//   const numero = parseFloat(prompt('Inserisci un numero'));

//   if (!isNaN(numero))

//     numeri.push(numero)
// }

// console.log(numeri)

// const [numeroA, numeroB] = numeri
// console.log(numeroA, numeroB)

// let maggiore = numeroA

// if (numeroB > numeroA) {
//   maggiore = numeroB
// }

// console.log(`Il numero più grande è ${maggiore}`)


// alternativa [POSSIBILITA' DI ANALIZZARE TANTI NUMERI MODIFICANDO numeri.lenght (riga 29)]
//
// let maggiore = Math.max(...numeri)
// console.log(`Il numero più grande è ${maggiore}`)



console.log('Snack 2')
// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi quella più lunga.

// Soluzione mia

const words = []

while (words.length !== 2) {

  const word = prompt('SECONDO SNACK: Inserisci una parola');

  if (isNaN(word))

    words.push(word)
}

console.log(words)

const [word1, word2] = words

if (word1.length > word2.length) {
  console.log(`La parola più corta è ${word2}, quella più lunga è ${word1}`)

} else if (word1.length < word2.length) {
  console.log(`La parola più corta è ${word1}, quella più lunga è ${word2}`)

} else {
  console.log(`Le parole ${word1} e ${word2} sono lunghe uguali`)
}


// Soluzione corso

// mod. linea 69 con:
//  if(word.lenght > 0)



console.log('Snack 3')
// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Soluzione mia

const numeri = []

let sum = 0

while (numeri.length !== 10) {

  const numero = parseInt(prompt('TERZO SNACK: Inserisci un numero'));

  if (!isNaN(numero))
    numeri.push(numero)
  sum += numero
}

console.log(numeri)
console.log(sum)


// Soluzione corso (WHILE)

// let i = 0
// let somma = 0

// while ( i < 10 ){
// i++;
// const num = parseFloat(prompt('Inserisci un numero'))
// console.log(num)

// if (isNan(num)){
// somma += num
// }

// console.log(somma)
// }


// Soluzione corso (FOR)

// for (let i = 0; i < 10; i++) {

//   const num = parseFloat(prompt('Inserisci un numero'))

//   if (isNaN(num)) {
//     somma += num
//   }
// }

// console.log(somma)



console.log('Snack 4')
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
// Chiedere all'utente il suo nome e comunicargli se può partecipare o no alla festa.

// Soluzione mia

const invitati = [
  'Marco',
  'Giuseppe',
  'Leonardo',
  'Vincenzo',
  'Sergio',
  'Francesco',
  'Rosario'
];

const nomeInvitato = prompt('QUARTO SNACK: Qual è il tuo nome?')
console.log(nomeInvitato)
let login = false

for (let i = 0; i < invitati.length; i++) {
  console.log(i, invitati[i])
  const invitiRegistrati = invitati[i]

  if (nomeInvitato === invitiRegistrati) {
    login = true
  }
}

if (login) {
  alert('Benvenuto, la satavamo aspettando!')
} else {
  alert('Mi dispiace, non è in lista')
}

console.log(invitati, nomeInvitato)


// Soluzione corso

// const invitati = [
//   'Marco',
//   'Giuseppe',
//   'Leonardo',
//   'Vincenzo',
//   'Sergio',
//   'Francesco',
//   'Rosario'
// ];

// const uName = prompt('Inserisci il tuo nome').trim()

// console.log(uName)
// let trovato = false;

// for (let i = 0; i < invitati.length; i++) {
//   const name = invitati[i]

//   if (uName.toLowerCase() === name.toLowerCase()) {
//     console.log('Trovato!')
//     trovato = true
//   }
// }

// if (trovato) {
//   console.log('Puoi entrare')
// } else {
//   console.log('Se ne vada')
// }




console.log('Snack 5')
// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero.
// Se è dispari inseriscilo nell'array.

// Soluzione mia

const arrayVuoto = []
const arrayDispari = []


while (arrayVuoto.length !== 6) {

  const num = parseInt(prompt('QUINTO SNACK: Inserisci un numero'));
  if (!isNaN(num))
    arrayVuoto.push(num)

  console.log(num);

  if (!isNaN(num) && (num % 2))
    arrayDispari.push(num)
}

console.log(arrayVuoto)
console.log(arrayDispari)


// Soluzione corso

// const nums = [];

// for (let i = 0; i < 6; i++) {
//   const num = parseFloat(prompt('Inserisci un numero'));
//   console.log(num)

//   if (num % 2 === 1) {
//     nums.push(num)
//   }
// }

// console.log(nums)



console.log('Snack 6')
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall'utente.

// Soluzione mia

const numcub = parseInt(prompt('SESTO SNACK: Inserisci un numero'))
console.log(`Il cubo di ${numcub} è (${numcub ** 3})`)


// Soluzione corso

// const num = parseInt(prompt('Inserisci un numero'));

// console.log(num)

// if (num >= 0) {

//   for (let i = 0; i <= num; i++) {

//     // Math.pow(i,3) --> ALTERNATIVA
//     console.log(i ** 3)
//   }
// } else {

//   for (let i = 0; i >= num; i--) {

//     console.log(i ** 3)
//   }
// }



console.log('Snack 7')
// Stampa le potenze di 2 fino a 1000

// Soluzione mia

for (let j = 0; j <= 1000; j++) {
  console.log(j ** 2)
}


// Soluzione corso (METODO ALTERNATIVO)

// for (let j = 0; j ** 2 <= 1000; j++) {
//   console.log(j ** 2)
// }



console.log('Snack 8')
// Chiedi un numero di 4 cifre all'utente e calcola la somma di
// tutte le cifre che compongono il numero.

// Soluzione corso

let num4cifre;

do {
  num4cifre = prompt('OTTAVO SNACK: Inserisci un numero di 4 cifre.')

} while (num4cifre.length !== 4 || isNaN(num4cifre))

console.log(num4cifre)
// console.log([...num4cifre]) --> ALTERNATIVA
const chars = num4cifre.split('');

console.log(chars)


// ESEMPI USO SPLIT

// const paragraph = 'Lorem ipsum dolor sit amet...';
// const date = 12 /02 / 1968;
// console.log(paragraph.split(' '));
// console.log(date.split('/'));

let somma = 0

for (let k = 0; k < chars.length; k++) {
  const num4cifre = parseInt(chars[k]);
  console.log(num4cifre)
  somma += num4cifre

}

console.log(somma)


console.log('Snack 9')
// Calcola la somma e la media dei primi 10 numeri

// Soluzione corso

// somma = num1 + num2 + num3
// media = (num1 + num2 + num3) / n (NUMERO DEI NUMERI CHE COMPONGONO LA SOMMA)

const nMax = 10;
let sommina = 0
let media = 0;

for (let x = 1; x <= nMax; x++) {

  //const numerino = i;
  sommina += i;
  media = sommina / i;
}

// media = sommina / nMax --> ALTERNATIVA
console.log(sommina, media)