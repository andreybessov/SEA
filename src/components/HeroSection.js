import React, { useEffect, useState } from 'react';
import slide1 from '../assets/hero-bg-slide1.jpg';
import slide2 from '../assets/hero-bg-slide2.jpg';
import slide3 from '../assets/hero-bg-slide3.jpg';

function HeroSection() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 1000); // Ждем перед сменой изображения
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`hero-section ${fade ? 'fade-in' : 'fade-out'}`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(12, 17, 41, 0.60), rgba(12, 17, 41, 0.60)), url(${slides[currentSlide]})`,
      }}
    >
      <div className="container">
        <h1 className="hero-section__title">STRATEGIC ENGINEERING ALLIANCE</h1>
        <p className="hero-section__text">
          Collaborative network of military engineers and private engineering firms
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
