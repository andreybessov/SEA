import React, { useEffect, useState } from 'react';
import slide1 from '../assets/hero-bg-slide1.jpg';
import slide2 from '../assets/hero-bg-slide2.jpg';
import slide3 from '../assets/hero-bg-slide3.jpg';

function HeroSection() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionClass, setTransitionClass] = useState('slide-active');

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionClass('slide-exit');

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTransitionClass('slide-enter');

        setTimeout(() => {
          setTransitionClass('slide-active');
        }, 50); // коротка пауза для активації входу
      }, 1000); // тривалість анімації повинна збігатися з CSS
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className={`hero-section ${transitionClass}`}
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
