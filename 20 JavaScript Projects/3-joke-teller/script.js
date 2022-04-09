const button = document.querySelector("#button");
const audioElement = document.querySelector("#audio");

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  VoiceRSS.speech({
    key: "d7179facf6f24e09ad1cda50d5c9f1f1",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get Joke from Joke API
async function getJokes() {
  let joke = "";
  const jokeApiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  try {
    const response = await fetch(jokeApiUrl);
    const data = await response.json();

    if (!data.joke) joke = `${data.setup} ... ${data.delivery}`;
    else joke = data.joke;

    // Text-to-Speech
    tellMe(joke);

    // Disable Button
    toggleButton();
  } catch (error) {
    // Catch Errors Here
    console.log("whoops", error);
  }
}

// Event Listerners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
