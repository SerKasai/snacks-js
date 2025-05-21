console.log('Snack 1')

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