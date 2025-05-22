console.log('Snack 1')
// L'utente inserisce due numeri, il computer stampa il più grande

// Soluzione mia

const num1 = parseFloat(prompt('Inserisci un numero'))
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

  const word = prompt('Inserisci una parola');

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

  const numero = parseInt(prompt('Inserisci un numero'));

  if (!isNaN(numero))
    numeri.push(numero)
  sum += numero
}

console.log(numeri)
console.log(sum)


console.log('Snack 4')
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
// Chiedere all'utente il suo nome e comunicargli se può partecipare o no alla festa.

// Soluzione mia

const nomeInvitato = prompt('Qual è il tuo nome?')
console.log(nomeInvitato)

const invitati = [
  'Marco',
  'Giuseppe',
  'Leonardo',
  'Vincenzo',
  'Sergio',
  'Francesco',
  'Rosario'
];

for (let i = 0; i < invitati.length; i++) {
  console.log(i, invitati[i])
  const invitiRegistrati = invitati[i]

  if (nomeInvitato == invitiRegistrati) {
    login = true
  } else {
    login = false
  }
}

if (login) {
  alert('Benvenuto, la satavamo aspettando!')
} else {
  alert('Mi dispiace, non è in lista')
}

console.log(invitati, nomeInvitato)


console.log('Snack 5')
// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero.
// Se è dispari inseriscilo nell'array.

// Soluzione mia

const arrayVuoto = []
const arrayDispari = []


while (arrayVuoto.length !== 6) {

  const num = parseInt(prompt('Inserisci un numero'));
  if (!isNaN(num))
    arrayVuoto.push(num)

  console.log(num);

  if (!isNaN(num) && (num % 2))
    arrayDispari.push(num)
}

console.log(arrayVuoto)
console.log(arrayDispari)


console.log('Snack 6')
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall'utente.

// Soluzione mia

const numcub = parseInt(prompt('Inserisci un numero'))
console.log(`Il cubo di ${numcub} è (${numcub ** 3})`)