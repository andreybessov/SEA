import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import slide1 from '../assets/hero-bg-slide1.jpg'
import slide2 from '../assets/hero-bg-slide1.jpg'
import slide3 from '../assets/hero-bg-slide1.jpg'

function HeroSection() {
  const slides = [
    { id: 1, 
      title: "STRATEGIC ENGINEERING ALLIANCE", 
      text: 'Collaborative network of military engineers and private engineering firms ', 
      background: slide1 },
    { id: 2,
      title: 'STRATEGIC ENGINEERING ALLIANCE', 
      text: 'Collaborative network of military engineers and private engineering firms', 
      background: slide2 },
    { id: 3,
      title: 'STRATEGIC ENGINEERING ALLIANCE', 
      text: 'Collaborative network of military engineers and private engineering firms', 
      background: slide3 },
  ];

  return (
    <section className="hero-section">
      <Splide
        options={{
          type: 'loop', // Бесконечный слайдер
          perPage: 1, // Один слайд на экране
          pagination: true, // Пагинаторы (круглые точки)
          arrows: false, // Без стрелочек
          autoplay: true, // Автопрокрутка
          interval: 5000, // Задержка между слайдами
          drag: true, // Возможность свайпа
          speed: 1000,
          easing: 'ease-out',
          breakpoints: {
            1280: {
              autoplay: false, 
            },
          },
        }}
        className="hero-slider"
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div
              className="hero-slide"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                height: '100vh',
                background: `linear-gradient(0deg, rgba(12, 17, 41, 0.60) 0%, rgba(12, 17, 41, 0.60) 100%), url(${slide.background}) lightgray 0.158px -0.346px / 100% 135.054% no-repeat`,
              }}
            >
              <div className='container'>
              <h1 className="hero-section__title" >{slide.title}</h1>
              <p className='hero-section__text' style={{marginTop: "30"}}>{slide.text}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default HeroSection;
