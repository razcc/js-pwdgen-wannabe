const numeroFissoPassword= "21";
// console.log(numeroFissoPassword);


// Nome Utente
let nomeUtente= prompt("Scrivi il tuo nome");
// console.log(nomeUtente);

// Cognome Utente
let cognomeUtente= prompt("Scrivi il tuo Cognome");
// console.log(cognomeUtente);

// Colore preferito
let colorePreferito= prompt("Scrivi il tuo colore preferito");
// console.log(colorePreferito);

let suggerimentoPassword= nomeUtente + cognomeUtente + colorePreferito + numeroFissoPassword;
console.log(suggerimentoPassword);

// Stampa dei valori
document.getElementById("nomeUtente").innerHTML= `Il nome dell'utente è: ${nomeUtente}`
document.getElementById("cognomeUtente").innerHTML= `Il cognome dell'utente è: ${cognomeUtente}`
document.getElementById("colorePreferito").innerHTML= `Il colore prefertito è: ${colorePreferito}`

// Stampa del suggerimento
document.getElementById("passwordPotenzialmenteDebole").innerHTML= `La passowrd meno consigliata è: ${suggerimentoPassword}`