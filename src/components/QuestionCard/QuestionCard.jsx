import "./QuestionCard.scss";
import React from "react";

const QuestionCard = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const answers = [
    "A robot that can do everything for you",
    "A supercomputer that knows everything", // Correct Answer
    "A way for computers to learn and help with tasks",
    "Just another tech buzzword",
  ];

  const correctAnswerIndex = 1; // Index of the correct answer

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setIsCorrect(index === correctAnswerIndex); //  True if correct, ❌ False if incorrect
  };
  return (
    <section className="quiz-section">
      <div className="quiz-options">
        <h2 className="quiz-options__tittle">Question</h2>
        <ul className="quiz-options__answer-list">
          {answers.map((answer, index) => (
            <li
              key={index}
              className={`quiz-options__answer ${
                selectedAnswer !== null
                  ? index === correctAnswerIndex
                    ? "quiz-options__answer--correct"
                    : index === selectedAnswer
                    ? "quiz-options__answer--wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleAnswerClick(index)}
            >
              {answer}
            </li>
          ))}
        </ul>
      </div>
      <div className="quiz-explanations">
        <h3 className="quiz-explanations__tittle"> 💡 Explanation</h3>
        <p className="quiz-explanations__text">explanation...</p>
        <p className="quiz-explanations__additional"> 🔗Additonal Resources</p>
      </div>
    </section>
  );
};

export default QuestionCard;
