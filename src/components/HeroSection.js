import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Базовые стили
import slide1 from '../assets/hero-bg.jpg'
import slide2 from '../assets/hero-bg.jpg'
import slide3 from '../assets/hero-bg.jpg'

function HeroSection() {
  const slides = [
    { id: 1, 
      title: "Innovations for ukraine's sustainable future", 
      text: 'Connecting leaders, technologies, and ideas for infrastructure development', 
      background: slide1 },
    { id: 2,
      title: 'Discover our services', 
      text: 'Connecting leaders, technologies, and ideas for infrastructure development', 
      background: slide2 },
    { id: 3,
      title: 'Let us create for you', 
      text: 'Connecting leaders, technologies, and ideas for infrastructure development', 
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
          easing: 'ease-out'
        }}
        style={{ height: '100vh' }} // Высота секции
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
              }}
            >
              <div className='container'>
              <h1 className="hero-section__title">{slide.title}</h1>
              <p className='hero-section__text'>{slide.text}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default HeroSection;
