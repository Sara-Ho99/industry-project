import QuestionCard from "../../components/QuestionCard/QuestionCard";
import React, { useState } from "react";
import "./QuestionPage.scss";

const questions = [
  {
    question: "What does AI actually mean?",
    options: [
      "A robot that can do everything for you",
      "A supercomputer that knows everything",
      "A way for computers to learn and help with tasks",
      "Just another tech buzzword",
    ],
    correctAnswerIndex: 2, // ✅ Correct answer is: "A way for computers to learn and help with tasks"
    explanation:
      "AI helps computers recognize patterns, learn from experience, and assist humans in tasks.",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswerIndex: 2, // ✅ Correct answer is: "Paris"
    explanation: "Paris is the capital of France, known for its Eiffel Tower.",
  },
  // Add more questions as needed...
];

const QuestionPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setShowNext(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowNext(false);
    } else {
      alert(`Quiz finished! Your score: ${score}/${questions.length}`);
    }
  };
  return (
    <section className="question-page">
      <QuestionCard
        questionData={questions[currentQuestionIndex]}
        onAnswerSelect={handleAnswer}
      />
      {showNext && (
        <button className="next-button" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </section>
  );
};

export default QuestionPage;
