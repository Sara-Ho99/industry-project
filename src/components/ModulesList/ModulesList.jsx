import "./ModulesList.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function ModulesList({ setLevel, level, role }) {
  const [questionId, setQuestionId] = useState(1);
  return (
    <ul className="modules">
      <li>
        <Link
          to={`/quiz/${role}/easy/${questionId}`}
          className="modules__option modules__option--green"
          onClick={() => setLevel("easy")}
        >
          <h3 className="modules__title">Easy</h3>
          <p className="modules__description">
            Learning about the basics of what AI is and how to use it in daily
            life tasks.
          </p>
        </Link>
      </li>
      <li>
        <Link
          to={`/quiz/${role}/intermediate/${questionId}`}
          className="modules__option modules__option--orange"
          onClick={() => setLevel("intermediate")}
        >
          <h3 className="modules__title">Intermediate</h3>
          <p className="modules__description">
            Learning about core machine learning algorithms, such as supervised,
            unsupervised, and reinforcement learning.
          </p>
        </Link>
      </li>
      <li>
        <Link
          to={`/quiz/${role}/advanced/${questionId}`}
          className="modules__option modules__option--red"
          onClick={() => setLevel("advanced")}
        >
          <h3 className="modules__title">Advanced</h3>
          <p className="modules__description">
            Learning about deep learning techniques and complex AI systems.
          </p>
        </Link>
      </li>
    </ul>
  );
}

export default ModulesList;
