import React, { useEffect, useState } from 'react';
import slide1 from '../assets/hero-bg-slide1.jpg';
import slide2 from '../assets/hero-bg-slide2.jpg';
import slide3 from '../assets/hero-bg-slide3.jpg';

function HeroSection() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Включаем класс для плавного перехода
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length); // Меняем слайд
        setIsTransitioning(false); // Убираем класс после перехода
      }, 500); // Длительность совпадает с CSS transition
    }, 6000); // Интервал смены слайда

    return () => clearInterval(interval); // Чистим таймер
  }, [slides.length]);

  return (
    <section
      className={`hero-section ${isTransitioning ? 'transitioning' : ''}`}
      style={{
        backgroundImage: `url(${slides[currentSlide]})`,
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
