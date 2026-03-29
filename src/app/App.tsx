import ScreenCard from "./components/ScreenCard";
import Skills from "./screens/Skills";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Experience from "./screens/Experience";
import Contact from "./screens/Contact";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { useEffect } from "react";
import { useScreenActions } from "@/hooks/useScreenActions ";

const sections = [
  { id: "home", component: Home },
  { id: "skills", component: Skills },
  { id: "projects", component: Projects },
  { id: "experience", component: Experience },
  { id: "contact", component: Contact },
];

function App() {
  const setActive = useScreenActions();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActive]);

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
