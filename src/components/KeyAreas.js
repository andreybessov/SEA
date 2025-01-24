import { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/chevron-right.svg';
import { motion } from 'framer-motion';

function KeyAreas() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const infoItems = [
        { title: 'Practical experience in modern wartime conditions', content: 'By leveraging cutting-edge innovations, the Alliance aims to introduce advanced engineering solutions. From smart city technologies to AI-driven monitoring systems, these tools optimize resource usage, enhance sustainability, and foster technological progress.' },
        { title: 'Focus on engineering solutions', content: 'SEA offers modern engineering systems to protect critical infrastructure ensuring societal endurance even in crisis situations' },
        { title: 'Strengthening international security', content: 'Support of the SEA is an investment in stability, as the hybrid threats that Ukraine faces can become a problem in other parts of the world.' },
        { title: 'Unique experience for international partners', content: 'Cooperation with the SEA provides access to unique knowledge and opportunities to prepare our partners or international structures for similar threat' }
    ];

    return (
        <section className="key-section">
            <div className="container">
                <div className="key-section__container">
                    <div className="key-section__text-block">
                        <h2>Importance of Cooperation</h2>
                        <p>Cooperation with the Strategic Engineering Alliance means gaining access to unparalleled expertise, innovative solutions, and a commitment to global security. Together, we tackle modern challenges to build a resilient and secure future.</p>
                    </div>
                    <div className="key-section__button-info-block">
                        {infoItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`key-section__accordion ${activeIndex === index ? 'active' : ''}`}
                            >
                                <button 
                                    className={`key-section__info-button ${activeIndex === index ? 'active' : ''}`} 
                                    onClick={() => handleToggle(index)}
                                >
                                    {item.title}
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 270 : 90 }}
                                        transition={{ duration: 0.3 }}
                                        className="key-section__arrow"
                                    >
                                        <Arrow />
                                    </motion.div>
                                </button>
                                <motion.div
                                    className={`key-section__dropdown ${activeIndex === index ? 'open' : ''}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={activeIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p>{item.content}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KeyAreas;
