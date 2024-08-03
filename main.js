// Facciamo scegliere le due variabili all'utente
// Ho inserito dopo il prompt una moltiplicazione * 1 così quando l'utente digita il numero, dato che il prompt lo acqusisce come stringa, costringo Javascript ad effettuare un'operazione matematica che non cambia il risultato ma lo trasforma in number. Altrimenti la stampa sarebbe stata 33 (due stringhe)
let num1 = prompt(`Scegli un primo numero`) * 1;
let num2 = prompt(`Scegli un secondo numero`) * 1;
let somma = num1 + num2;
let sottrazione = num1 - num2;
let moltiplicazione = num1 * num2;
let divisione = num1 / num2;
let potenza1 = num1 ** 2;
let potenza2 = num2 ** 2;

// Operiamo con le due variabili scelte

// Somma
console.log(`La somma dei due numeri è:`, somma);

// Sottrazione

console.log(`La differenza tra i due numeri è:`, sottrazione);

// Moltiplicazione

console.log(`Il prodotto tra i due numeri è:`, moltiplicazione);

// Divisione

console.log(`La divisione tra i due numeri è:`, divisione);

// Elevazione a potenza

console.log(`L'elevazione a potenza dei due numeri è`, potenza1, potenza2);

// Fine esercizio