const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Believe you can and you're halfway there.",
    "The only impossible journey is the one you never begin.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "You are never too old to set another goal or to dream a new dream."
];

const quoteElement = document.getElementById("quote");
const usedIndexes = new set()
function generateQuotes() {
    randomIndex = Math.floor(Math.random() * quotes.length);
    const quote =quotes[randomIndex];
    quoteElement.innerHTML = quote;
}