// src/pages/Game/Game.jsx
import React, { useState, useEffect } from 'react';
import data from '../../data/game-data.json';
import './Game.css';

// Game page
const Game = () => {
    const [words, setWords] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [droppedWords, setDroppedWords] = useState([]);

    // Initialize the game
    const initializeGame = () => {
        const allWords = [...data['key words'], ...data['other words']];
        const shuffledWords = allWords.sort(() => Math.random() - 0.5);
        setWords(shuffledWords);
        setCorrectAnswers(data['key words']);
        setScore(0);
        setGameOver(false);
        setDroppedWords([]);
    };

    // Initialize the game when the page loads
    useEffect(() => {
        initializeGame();
    }, []);

    // Handle drag start event
    const handleDragStart = (e, word) => {
        e.dataTransfer.setData('text/plain', word);
    };

    // Handle drag over event
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Handle drop event
    const handleDrop = (e) => {
        e.preventDefault();
        const word = e.dataTransfer.getData('text/plain');

        if (correctAnswers.includes(word)) {
            setScore(prev => prev + 1);
            setWords(prev => prev.filter(w => w !== word));
            setDroppedWords(prev => [...prev, word]);

            if (score + 1 === correctAnswers.length) {
                setGameOver(true);
            }
        }
    };

    // Render the game page
    return (
        <div className="game-container">
            <h2>A Short Game</h2>
            <p>Drag the keywords related to me to the target area</p>
            <div className="score">Score: {score}/{correctAnswers.length}</div>

            <div className="game-content">
                <div className="words-container">
                    {words.map((word, index) => (
                        <div
                            key={index}
                            className="word-item"
                            draggable
                            onDragStart={(e) => handleDragStart(e, word)}
                        >
                            {word}
                        </div>
                    ))}
                </div>

                <div
                    className="target-area"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <h3>Drop correct answers here</h3>
                    <div className="dropped-words">
                        {droppedWords.map((word, index) => (
                            <div key={index} className="dropped-word">
                                {word}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {gameOver && (
                <div className="game-over">
                    <h2>Congratulations!</h2>
                    <p>You've completed the game!</p>
                </div>
            )}

            <button className="restart-button" onClick={initializeGame}>
                Restart Game
            </button>
        </div>
    );
};

export default Game;