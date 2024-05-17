/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1

// function checkAge(eta) {

//     const myAge = 32;

//     let message = '';


//     if (eta < 18) {

//         message = `Sei troppo giovane! Hai ${eta} anni!`;

//     } else {

//         message = 'Hai più di 18 anni!';

//     }
//     return message;

// }

// console.log(checkAge(12))

// errore mancato return

// console.log mancante


// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);

// }
// printColorsNumber();

// errore grammaticale in colors.length

// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));

//     const total = (userNumber + 12);

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// aggiunta di proprietà parseInt

// aggiunta di ( ) nell'operazione di somma


// ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// errore nell'inserimento di valori booleani tra ''


// ESERCIZIO 5
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = true;

//             }

//         }


//     }
//     if (grantAccess) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }

//     // console.log(grantAccess ? 'accesso consentito' : 'accesso negato')
// }

// checkAccessImproved()

// errore nell'inserimento di valori booleani nelle ''

// spostamento del console.log all'esterno del ciclo for