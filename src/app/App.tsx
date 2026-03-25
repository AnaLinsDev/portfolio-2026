import AboutMe from "./components/screens/AboutMe";
import ScreenCard from "./components/ScreenCard";
import Skills from "./components/screens/Skills";
import Home from "./components/screens/Home";
import Projects from "./components/screens/Projects";
import Experience from "./components/screens/Experience";
import Contact from "./components/screens/Contact";

const sections = [Home, AboutMe, Skills, Projects, Experience, Contact];

function App() {
  return (
    <div className="container">
      {sections.map((Section, index) => (
        <ScreenCard key={index}>
          <Section />
        </ScreenCard>
      ))}
    </div>
  );
}

export default App;
