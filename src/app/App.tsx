import ScreenCard from "./components/ScreenCard";
import Skills from "./screens/Skills";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Experience from "./screens/Experience";
import Contact from "./screens/Contact";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const sections = [
  { id: "home", component: Home },
  { id: "skills", component: Skills },
  { id: "projects", component: Projects },
  { id: "experience", component: Experience },
  { id: "contact", component: Contact },
];

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="container">
        {sections.map(({ id, component: Section }) => (
          <ScreenCard key={id}>
            <div id={id} className="section-container">
              <Section />
            </div>
          </ScreenCard>
        ))}
      </div>
    </>
  );
}

export default App;
