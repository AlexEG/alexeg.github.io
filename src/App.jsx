import Navbar from "./components/Navbar";
import ProjectSection from "./components/Projects-section/ProjectSection";

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen pb-96 selection:bg-pink-800">
      <Navbar />
      <ProjectSection />
    </div>
  );
}

export default App;
