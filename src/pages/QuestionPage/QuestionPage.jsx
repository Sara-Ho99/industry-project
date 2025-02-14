import QuestionCard from "../../components/QuestionCard/QuestionCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./QuestionPage.scss";

const fallbackQuestions = [
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
  const { role, level, id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "http://localhost:8010";

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/quiz/role/${role}/level/${level}/questionId/${id}`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setQuestions(fallbackQuestions);
        setError("Failed to fetch questions. Using sample data.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [role, level, id]);

  const goToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (questions.length === 0) {
    return <div>No questions available for this role/level.</div>;
  }

  if (loading) return <div>Loading questions...</div>;

  return (
    <div className="question-page">
      {error && <p className="error">{error}</p>}
      {questions.length > 0 ? (
        <>
          <QuestionCard questionData={questions[currentIndex]} />
          {currentIndex < questions.length - 1 && (
            <button className="next-button" onClick={goToNextQuestion}>
              Next Question
            </button>
          )}
        </>
      ) : (
        <div>No questions available for this role/level.</div>
      )}
    </div>
  );
};

export default QuestionPage;
