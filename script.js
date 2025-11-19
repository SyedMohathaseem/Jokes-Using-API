const jokeText = document.getElementById("joke");
const btn = document.getElementById("btn");

btn.addEventListener("click", getJoke);

async function getJoke() {
    jokeText.innerText = "Loading joke... 😂";

    try {
        const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
        const data = await res.json();

        jokeText.innerText = `${data.setup} 🤣\n${data.punchline}`;
    } catch (error) {
        jokeText.innerText = "❌ Failed to fetch joke!";
    }
}
