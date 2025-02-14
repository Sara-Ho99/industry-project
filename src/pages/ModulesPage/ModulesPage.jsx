import "./ModulesPage.scss";
import ModulesList from "../../components/ModulesList/ModulesList";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

function ModulesPage({ setLevel }) {
  return (
    <div className="modules-page">
      <Header />
      <h2>Modules</h2>
      <ModulesList setLevel={setLevel} />
    </div>
  );
}

export default ModulesPage;
