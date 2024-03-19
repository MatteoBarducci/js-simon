// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const numbers = []
while(numbers.length < 5){
    let number = randomNumber(1, 1000)
    if (!numbers.includes(number)){
        numbers.push(number)
    }
}
let numberArray = document.getElementById('random-numbers')
numberArray.innerHTML = numbers;

const myTimeout = setTimeout(myFunction, 10000)

function myFunction(){
    numberArray.classList.remove('active')
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}