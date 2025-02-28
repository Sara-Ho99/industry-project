import "./QuestionCard.scss";
import React, { useState, useEffect } from "react";
import lightbulbIcon from "../../assets/lightbulb.svg";

const QuestionCard = ({
  questionData,
  options,
  setSelectedAnswer,
  selectedAnswer,
  setScore,
}) => {
  console.log("card reloaded");
  console.log(options);

  const [isCorrect, setIsCorrect] = useState(null);

  if (!questionData) {
    return <div className="loading-message">Loading question...</div>;
  }

  const { question, correct_answer, incorrect_answers, explanation, link } =
    questionData;

  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
      setIsCorrect(answer === correct_answer);
      if (answer === correct_answer) {
        setScore((prev) => prev + 5);
      }
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
      {selectedAnswer ? (
        <div className="quiz-explanation">
          <h3 className="quiz-explanation__title">
            {" "}
            <img
              src={lightbulbIcon}
              alt="Lightbulb icon"
              className="lightbulb-icon"
            />
            Explanation
          </h3>
          <p>{explanation || "No explanation available."}</p>
          {link && (
            <p>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Additional Resources
              </a>
            </p>
          )}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default QuestionCard;
