import "./ModulesPage.scss";
import ModulesList from "../../components/ModulesList/ModulesList";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

function ModulesPage({ setLevel, level, role }) {
  return (
    <div className="modules-page">
      <Header />
      <h2>Modules</h2>
      <ModulesList setLevel={setLevel} level={level} role={role} />
    </div>
  );
}

export default ModulesPage;
