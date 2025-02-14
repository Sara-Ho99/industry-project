import QuestionCard from "../../components/QuestionCard/QuestionCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./QuestionPage.scss";
import Header from "../../components/Header/Header";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const QuestionPage = () => {
  console.log("question page reloaded");
  const { role, level } = useParams();
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]); // Store shuffled options in state

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

  // Shuffle options when the question changes
  useEffect(() => {
    if (questions.length > 0) {
      const { correct_answer, incorrect_answers } = questions[currentIndex];
      const options = shuffleArray([correct_answer, ...incorrect_answers]);
      setShuffledOptions(options); // Update shuffled options in state
    }
  }, [currentIndex, questions]); // Only reshuffle when the question changes

  const goToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      navigate("/end");
    }
  };

  if (questions.length === 0) {
    return <div>No questions available for this role/level.</div>;
  }

  return (
    <div className="question-page">
      <Header />
      <QuestionCard
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        questionData={questions[currentIndex]}
        options={shuffledOptions} // Use the shuffled options from state
      />
      <button onClick={goToNextQuestion} className="next-button">
        Next Question
      </button>
    </div>
  );
};

export default QuestionPage;