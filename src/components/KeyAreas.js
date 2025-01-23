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
        { title: 'Focus on engineering solutions', content: 'Key aspects of engineering solutions in various industries.' },
        { title: 'Strengthening international security', content: 'Measures and strategies to improve international security cooperation.' },
        { title: 'Unique experience for international partners', content: 'Special knowledge and experience provided to global partners.' }
    ];

    return (
        <section className="key-section">
            <div className="container">
                <div className="key-section__container">
                    <div className="key-section__text-block">
                        <h2>Importance of Cooperation</h2>
                        <p>The Alliance operates based on transparency, partnerships between business and government, adherence to international standards, and efficient resource management.</p>
                    </div>
                    <div className="key-section__button-info-block">
                        {infoItems.map((item, index) => (
                            <div key={index} className="key-section__accordion">
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
                                    className="key-section__dropdown"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={activeIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
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
