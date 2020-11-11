const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')

//Challenge: Write a function that will display a random Inspirational Quote
//from the quotes array, when the button is pressed.
const quotes = [
    'Do something today that your future self will thankyou for',
    'Dont worry, be happy!',
    'Your limitation is only your imagination'
]

function showQuote() {
    let randomNumber = Math.random() * quotes.length // variable to grab a random number from the quotes length
    let nextNumber = Math.floor(randomNumber) // rounding the random number to a whole number
    let randomQuote = quotes[nextNumber] // variable used to grab one of the quotes from the array
    
    quoteDisplay.innerHTML = randomQuote // sends the random quote to the browers to be seen when button is clicked
}

button.addEventListener('click', showQuote)
