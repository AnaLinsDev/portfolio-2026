import AboutMe from "./components/screens/AboutMe";
import ScreenCard from "./components/ScreenCard";
import Skills from "./components/screens/Skills";
import Home from "./components/screens/Home";
import Projects from "./components/screens/Projects";
import Experience from "./components/screens/Experience";
import Contact from "./components/screens/Contact";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const sections = [
  { id: "home", component: Home },
  { id: "about", component: AboutMe },
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
            <div id={id}>
              <Section />
            </div>
          </ScreenCard>
        ))}
      </div>
    </>
  );
}

export default App;
