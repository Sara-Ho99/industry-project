import "./QuestionCard.scss";
import React, { useState, useEffect } from "react";

const QuestionCard = ({ questionData }) => {
  const { question, correct_answer, incorrect_answers, explanation, link } = questionData;
  const options = [correct_answer, ...incorrect_answers];

  return (
    <section>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        <h3>Explanation</h3>
        <p>{explanation}</p>
        <p>
          <a href={link}>
            Additional Resources
          </a>
        </p>
      </div>
    </section>
  );
};

export default QuestionCard;
