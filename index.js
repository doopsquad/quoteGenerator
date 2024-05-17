let button = document.getElementById("quote-generator");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quoteArray = [];


// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes/';
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      quoteArray = JSON.parse(data.contents);
      newQuote();
    } catch (error) {
      // Catch Error Here
      console.log('Error fetching quotes:', error);
    }
  }

getQuotes();


function newQuote() {
  let number = Math.floor(Math.random() * quoteArray.length);
  quote.innerHTML = quoteArray[number].q;
  author.innerHTML = quoteArray[number].a;
}

button.addEventListener("click", newQuote);

