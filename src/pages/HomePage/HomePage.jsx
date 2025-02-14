import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage({ setRole }) {
  // beginner, student, developer, manager, business owner
  const HandleOnClick = (role) => {
    setRole(role);
  };
  return (
    <div className="home-page">
      <h1 className="home-page__title">AI Hub</h1>
      <h2 className="home-page__subtitle">I am a ...</h2>
      <div className="home-page__button-container">
        <Link to="/modules">
          <button
            className="home-page__button"
            onClick={() => HandleOnClick("beginner")}
          >
            Beginner AI Users
          </button>
        </Link>

        <Link to="/modules">
          <button
            className="home-page__button"
            onClick={() => HandleOnClick("student")}
          >
            Student
          </button>
        </Link>

        <Link to="/modules">
          <button
            className="home-page__button"
            onClick={() => HandleOnClick("developer")}
          >
            Software Developer
          </button>
        </Link>

        <Link to="/modules">
          <button
            className="home-page__button"
            onClick={() => HandleOnClick("manager")}
          >
            Project Manager
          </button>
        </Link>

        <Link to="/modules">
          <button
            className="home-page__button"
            onClick={() => HandleOnClick("business owner")}
          >
            Business Owner
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
