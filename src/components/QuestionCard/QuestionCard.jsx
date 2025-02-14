import "./QuestionCard.scss";
import React, { useState, useEffect } from "react";

const QuestionCard = ({ questionData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  if (!questionData) {
    return <div className="loading-message">Loading question...</div>;
  }

  const { question, correct_answer, incorrect_answers, explanation, link } =
    questionData;

  const options = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
      setIsCorrect(answer === correct_answer);
    }
  };

  return (
    <section className="quiz-section">
      <h2 className="quiz-question">{question}</h2>
      <ul className="quiz-options">
        {options.map((option, index) => (
          <li
            key={index}
            className={`quiz-option ${
              selectedAnswer !== null
                ? option === correct_answer
                  ? "quiz-option--correct"
                  : option === selectedAnswer
                  ? "quiz-option--wrong"
                  : ""
                : ""
            }`}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <div className="quiz-explanation">
        <h3>Explanation</h3>
        <p>{explanation || "No explanation available."}</p>
        {link && (
          <p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Additional Resources
            </a>
          </p>
        )}
      </div>
    </section>
  );
};

export default QuestionCard;
