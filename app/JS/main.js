import { array } from "./numbercards.js";

let currentCard = getRandomCard();

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function compareCards(guessedCardInput, actualCard) {
  return (
    guessedCardInput.trim().toLowerCase() ===
    actualCard.numberCard.trim().toLowerCase()
  );
}

function checkCard() {
  const guessedCardInput = document.getElementById("guessedCard").value.trim();
  const message = document.getElementById("message");

  for (let i = 0; i < array.length; i++) {
    if (array[i].numberCard.toLowerCase() === guessedCardInput.toLowerCase()) {
      guessedCard = array[i];
      break;
    }
  }

  if (!guessedCard) {
    message.textContent =
      "Invalid card. Please enter a valid card (e.g., Ace of Spades).";
    return;
  }

  if (compareCards(guessedCardInput, currentCard)) {
    message.textContent = `Congratulations! You guessed the card correctly! It was ${currentCard.numberCard}.`;
    currentCard = getRandomCard();
    message.textContent += " A new card has been chosen!";
    return;
  }

  if (guessedCard.number === currentCard.number) {
    message.textContent = `The number is correct, but the suit is wrong! Try again!`;
    return;
  }

  const feedback = guessedCard.number < currentCard.number ? "low" : "high";
  message.textContent = `Incorrect. Your guess is too ${feedback}! Try again!`;
}

document.addEventListener("DOMContentLoaded", () => {
  const guessButton = document.getElementById("guessButton");
  guessButton.addEventListener("click", checkCard);
});
