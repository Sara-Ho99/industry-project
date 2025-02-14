import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import ModulesPage from "./pages/modulesPage/modulesPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ModulesPage />} /> */}
        <Route path="/easy/:questionId" element={<QuestionPage />} />
        <Route
          path="/intermediate/:questionId"
          element={<Navigate to="/easy/:questionId" />}
        />
        <Route
          path="/advanced/:questionId"
          element={<Navigate to="/easy/:questionId" />}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
