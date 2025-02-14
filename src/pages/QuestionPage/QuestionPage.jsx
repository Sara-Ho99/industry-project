import QuestionCard from "../../components/QuestionCard/QuestionCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./QuestionPage.scss";

const QuestionPage = () => {
  const { role, level, id } = useParams();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const baseUrl = "http://localhost:8010";

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/quiz/role/${role}/level/${level}/questionId/${id}`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error(error);
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

  return (
    <div>
      <QuestionCard questionData={questions[currentIndex]} />
      <button onClick={goToNextQuestion} className="next-button">
        Next Question
      </button>
    </div>
  );
};

export default QuestionPage;
