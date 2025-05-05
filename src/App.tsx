import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="hero-container bg-[url('/src/assets/images/panto-background.png')] bg-cover bg-center h-screen">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
