import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from './components/AboutUs'
import KeyAreas from './components/KeyAreas'
import Contact from "./components/Contact";


function App() {
  return (
    <div className="content">
      <Header/>
      <HeroSection />
      <AboutUs />
      <KeyAreas />
      <Contact />
    </div>
  );
}

export default App;
