let jokeDiv = document.getElementById('joke');
let nextJokeBtn = document.getElementById('jokeBtn');

// Get the joke from api
const getJoke = async () => {
    //     const res = await fetch("https://api.chucknorris.io/jokes/random");
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await res.json();
    jokeDiv.innerText = data.joke;
}

// Get the next joke
nextJokeBtn.addEventListener('click', () => {
    getJoke();
});

// Call getJoke() when the window loads
window.addEventListener('load', () => {
    getJoke();
})