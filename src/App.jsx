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
          <Route path="/quiz/:role/:level/:id" element={<QuestionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
