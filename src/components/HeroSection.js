import React, { useEffect, useState } from 'react';
import slide1 from '../assets/hero-bg-slide1.jpg';
import slide2 from '../assets/hero-bg-slide2.jpg';
import slide3 from '../assets/hero-bg-slide3.jpg';

function HeroSection() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(slides[slides.length - 1]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Функция предзагрузки изображений
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide;
    });
  }, [slides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setPrevSlide(slides[currentSlide]); // Запоминаем текущее изображение перед сменой
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500); // Длительность должна совпадать с CSS transition
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  return (
    <section
      className={`hero-section ${isTransitioning ? 'transitioning' : ''}`}
      style={{
        backgroundImage: `url(${slides[currentSlide]})`,
      }}
    >
      <style>
        {`
          .hero-section.transitioning::before {
            background-image: url(${prevSlide});
          }
        `}
      </style>
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
