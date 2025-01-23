import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from './components/AboutUs'
import KeyAreas from './components/KeyAreas'
import Initiators from "./components/Initiators";
import Communication from "./components/Communication";
import Partners from "./components/Partners";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="content">
      <Header/>
      <HeroSection />
      <AboutUs />
      <KeyAreas />
      <Initiators />
      <Communication />
      <Partners />
      <Contact />
    </div>
  );
}

export default App;
