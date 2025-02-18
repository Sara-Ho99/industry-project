import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ModulesPage from "./pages/modulesPage/modulesPage";
import MyQuestionPage from "./pages/QuestionPage/QuestionPage";
import HomePage from "./pages/HomePage/HomePage";
import EndPage from "./pages/EndPage/EndPage";

// import ModulesPage from "./pages/modulesPage/modulesPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

function App() {
  // "role" can be passed to the QuestionPage as URL params
  const [role, setRole] = useState("beginner");
  console.log(role);
  const [level, setLevel] = useState("");
  console.log(level);
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage setRole={setRole} />} />
        <Route
          path="/modules"
          element={
            <ModulesPage
              score={score}
              role={role}
              setLevel={setLevel}
              level={level}
            />
          }
        />
        <Route
          path="/easy/:questionId"
          element={<QuestionPage score={score} setScore={setScore} />}
        />
        <Route
          path="/intermediate/:questionId"
          element={<Navigate to="/easy/:questionId" />}
        />
        <Route
          path="/advanced/:questionId"
          element={<Navigate to="/easy/:questionId" />}
        />
        {/* <Route path="/" element={<ModulesPage />} /> */}
        <Route
          path="/quiz/:role/:level/:id"
          element={<QuestionPage score={score} setScore={setScore} />}
        />
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
