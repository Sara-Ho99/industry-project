import QuestionCard from "../../components/QuestionCard/QuestionCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./QuestionPage.scss";
import Header from "../../components/Header/Header";

const QuestionPage = () => {
  console.log("question page reloaded");
  const { role, level } = useParams();

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const baseUrl = "http://localhost:8010";

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/quiz/role/${role}/level/${level}/`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, [role, level]);

  const goToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    }
  };

  if (questions.length === 0) {
    return <div>No questions available for this role/level.</div>;
  }

  const { question, correct_answer, incorrect_answers, explanation, link } =
    questions[currentIndex];

  const options = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="question-page">
      <Header />
      <QuestionCard
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        questionData={questions[currentIndex]}
        options={options}
      />
      <button onClick={goToNextQuestion} className="next-button">
        Next Question
      </button>
    </div>
  );
};

export default QuestionPage;
