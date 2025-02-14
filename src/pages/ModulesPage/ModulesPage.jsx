import "./ModulesPage.scss";
import ModulesList from "../../components/ModulesList/ModulesList";
import Header from "../../components/Header/Header";

function ModulesPage() {
  return (
    <div className="modules-page">
      <Header />
      <h2>Modules</h2>
      <ModulesList />
    </div>
  );
}

export default ModulesPage;
