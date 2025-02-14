import "./Header.scss";
import starIcon from "../../assets/star.svg";
import homeIcon from "../../assets/home.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [score, setScore] = useState(0);
  return (
    <header className="header">
      <div className="header__left">
        <h2 className="header__name">Jennifer</h2>
        <div className="header__score">
          <img className="header__score-icon" src={starIcon} />
          <p className="header__score-number">{score}</p>
        </div>
      </div>
      <Link to={"/"}>
        <img src={homeIcon} className="header__home" />
      </Link>
    </header>
  );
}

export default Header;
