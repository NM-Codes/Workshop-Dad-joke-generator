// Original kod

// const jokeElement = document.getElementById('joke');
// const jokeBtn = document.getElementById('jokeBtn')

// generateJoke();

// function generateJoke() {
//    const config = {
    // Headers: {
        // Accept: 'application/json', 
    // },
    // }
// };

// fetch('https://icanhazdadjoke.com', config)
// .then((res => res.json()))
// .then((data =>{
    // jokeElement-innerHTML = data.joke;
// }))

// jokeBtn.addEventListener('click', generateJoke);

// Pseudokod
// 1. Hämta element:
// jokeElement 
// jokeBtn

// 2. Ropa funktionen generateJoke()

// 3. Klickevent på jokeBtn:  när den klickas kör funktionen generateJoke()

// 4. Funktion generateJoke():
// 4.2 gör en inställning - säg till servern: vill ha svar i json-format
// 4.3 Hämta ett skämt från adressen http:icanhazdadjoke.com
// 4.4 Om det har gått bra 
// gör om svaret till vanlig text
// skriv skämtet i jokeElement
// 4.5 Om det har blivit fel
// skriv "Oops! Inget skämt..." i jokeElement
// skriv felet i konsolen så att man kan felsöka det om så behövs.

// Koden
// 1. Hämta element från HTML
const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// 2. Ropa på Funktionen
generateJoke();

// 3. Klickevent för jokeBtn - funktionen generateJoke körs vid klick
jokeBtn.addEventListener('click',generateJoke);
