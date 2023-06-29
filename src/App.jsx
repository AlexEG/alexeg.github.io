import Navbar from "./components/Navbar";
import ProjectSection from "./components/Projects-section/ProjectSection";
import StatisticsSection from "./components/Statistics-section/StatisticsSection";
import HeaderSection from "./components/Header-section/HeaderSection";
function App() {
  return (
    <div className="bg-neutral-950 min-h-screen pb-96 pt-14 selection:bg-pink-800">
      <HeaderSection />
      <Navbar />
      {/* <StatisticsSection /> */}
      <ProjectSection />
    </div>
  );
}

export default App;
