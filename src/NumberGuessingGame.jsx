import React, { useState } from "react";
import "./NumberGuessingGame.css";

const NumberGuessingGame = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const startGame = () => {
    setRandomNumber(Math.floor(Math.random() * 101));
    setGuesses([]);
    setGuess("");
    setMessage("");
  };

  const checkGuess = () => {
    const num = Number(guess);
    if (isNaN(num) || num < 0 || num > 100) {
      alert("Please enter a valid number between 0 and 100.");
      return;
    }

    setGuesses((prevGuesses) => [...prevGuesses, num]);

    if (num === randomNumber) {
      setMessage("Congratulations! You guessed it right!");
    } else if (num > randomNumber) {
      setMessage("Too high!");
    } else {
      setMessage("Too low!");
    }
  };

  return (
    <div className="game-container">
      <h1 className="title">Number Guessing Game</h1>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="input"
        placeholder="Enter your guess"
      />
      <div className="btn-div">
        <button onClick={startGame} className="button start-button">
          Start Game
        </button>
        <button onClick={checkGuess} className="button guess-button">
          Submit Guess
        </button>
      </div>
      <h2 id="resultMessage" className="message">
        {message}
      </h2>
      <h2 id="guesses" className="guesses">
        Your guesses: {guesses.join(", ")}
      </h2>
    </div>
  );
};

export default NumberGuessingGame;
