//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];


console.log(arrayOfQuotes[0].quote)
console.log(arrayOfQuotes[0].author)

function generateQuote() {
    const random = Number.parseInt(Math.random() * arrayOfQuotes.length);
    console.log(random)
    document.querySelector('#quoteOutput').innerHTML = `${arrayOfQuotes[random].quote}`;
    document.querySelector('#authorOutput').innerHTML = `${arrayOfQuotes[random].author}`;

}
