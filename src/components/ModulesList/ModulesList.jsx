import "./ModulesList.scss";
import { Link } from "react-router-dom";

function ModulesList() {
  return (
    <ul className="modules">
      <li>
        <Link to={`/easy/1`} className="modules__option">
          <h3 className="modules__title">Easy</h3>
          <p className="modules__description">
            Learning about the basics of what AI is and how to use it in daily
            life tasks.
          </p>
        </Link>
      </li>
      <li>
        <Link to={"/intermediate/1"} className="modules__option">
          <h3 className="modules__title">Intermediate</h3>
          <p className="modules__description">
            Learning about core machine learning algorithms, such as supervised,
            unsupervised, and reinforcement learning.
          </p>
        </Link>
      </li>
      <li>
        <Link to={"/advanced/1"} className="modules__option">
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
