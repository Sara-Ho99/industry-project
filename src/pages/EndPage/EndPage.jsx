import "./EndPage.scss";
import { Link } from "react-router-dom";

function EndPage() {
  
  return (
    <div className="end-page">
      <h1 className="end-page__title">Congratulations</h1>
      <h2 className="end-page__subtitle">You have finished the first module. </h2>
      <div className="end-page__button-container">
        <Link to="/modules">
          <button
            className="end-page__button"
          >
            Go to the next level
          </button>
        </Link>

      </div>
    </div>
  );
}

export default EndPage;
