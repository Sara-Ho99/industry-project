import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ModulesPage from "./pages/modulesPage/modulesPage";
import MyQuestionPage from "./pages/QuestionPage/QuestionPage";
import HomePage from "./pages/HomePage/HomePage";

// import ModulesPage from "./pages/modulesPage/modulesPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

function App() {
  // "role" can be passed to the QuestionPage as URL params
  const [role, setRole] = useState("");
  console.log(role);
  const [level, setLevel] = useState("");
  console.log(level);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage setRole={setRole} />} />
        <Route
          path="/modules"
          element={
            <ModulesPage role={role} setLevel={setLevel} level={level} />
          }
        />
        <Route path="/easy/:questionId" element={<QuestionPage />} />
        <Route
          path="/intermediate/:questionId"
          element={<Navigate to="/easy/:questionId" />}
        />
        <Route
          path="/advanced/:questionId"
          element={<Navigate to="/easy/:questionId" />}
        />
        {/* <Route path="/" element={<ModulesPage />} /> */}
        <Route path="/quiz/:role/:level/:id" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
