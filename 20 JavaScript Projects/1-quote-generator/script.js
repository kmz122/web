const quoteContainer = document.querySelector("#quote-container");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");
const twitterBtn = document.querySelector("#twitter");
const loader = document.querySelector("#loader");

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

// Get Quote From API
async function getQuote() {
  showLoadingSpinner();
  const proxyUrl = "https://rugged-mammoth-cave-27343.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();

    // If author is blank, set 'Unknown'
    data["quoteAuthor"]
      ? (quoteAuthor.innerText = data["quoteAuthor"])
      : (quoteAuthor.innerText = "Unknown");

    // Reduce font size for long quotes
    data["quoteText"].length > 120
      ? quote.classList.add("long-quote")
      : quote.classList.remove("long-quote");
    quote.innerText = data["quoteText"];

    removeLoadingSpinner();
  } catch (error) {
    getQuote();
  }
}

function tweetQuote() {
  const quoteText = quote.innerText;
  const author = quoteAuthor.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${author}`;
  window.open(twitterUrl, "_blank");
}

// On Load
getQuote();

// New Quote button click-event
newQuoteBtn.addEventListener("click", getQuote);

// Twitter button click-event
twitterBtn.addEventListener("click", tweetQuote);
