// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creo un array di 5 numeri casuali compresi tra 1 e 1000 e lo stampo in pagina
let numbers = []
let number
while(numbers.length < 5){
    let number = randomNumber(1, 1000)
    if (!numbers.includes(number)){
        numbers.push(number)
    }
}
let text = document.getElementById('random-numbers')
text.innerHTML = numbers;
// Dopo 9 secondi il testo scompare
setTimeout(clearArray, 9000)
// Dopo 10 secondi inizia il gioco
setTimeout(startGame, 10000)

// FUNCTIONS

// Questa funzione genera un numero casuale compreso tra min e max
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Questa funzione inizia il gioco. 
function startGame(){
    // Crea un array composto dai numeri indovinati dall'utente che inserisce attraverso un ciclo di prompt
    const rightNumbers = []

    for (let i = 0; i < 5; i++){
        const userNumber = parseInt(prompt('Quali numeri hai appena visualizzato?'))
        if (numbers.includes(userNumber) & (!rightNumbers.includes(userNumber))){
            rightNumbers.push(userNumber)
        }
    }
    // Stampa in pagina il risultato 
    text.innerHTML = 'Hai indovinato ' + rightNumbers.length + ' numeri. I numeri sono ' + rightNumbers 
}

// QUesta funzione pulisce il 'text'
function clearArray(){
    text.innerHTML = ''
}
