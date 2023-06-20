import Navbar from "./components/Navbar";
import ProjectSection from "./components/Projects-section/ProjectSection";
import StatisticsSection from "./components/Statistics-section/StatisticsSection";
function App() {
  return (
    <div className="bg-neutral-950 min-h-screen pb-96 pt-96 selection:bg-pink-800">
      <Navbar />
      <StatisticsSection />
      <ProjectSection />
    </div>
  );
}

export default App;
