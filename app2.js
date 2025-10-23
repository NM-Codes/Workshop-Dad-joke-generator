const jokeElement = document.getElementById('joke');
const jokeBtnElement = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {
    try {
        const config = {
            headers: {
                Accept: 'application/json',
    },
    
};

const response = await fetch('https://icanhazdadjoke.com/', config);
const data = await response.json();
jokeElement.innerHTML = data.joke;
}
catch(error){
    jokeElement.innerHTML= 'Opps! Something went wrong.';
    console.log('Error:', error);
}
}

jokeBtnElement.addEventListener('click',generateJoke);