import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ModulesPage from "./pages/modulesPage/modulesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModulesPage />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
