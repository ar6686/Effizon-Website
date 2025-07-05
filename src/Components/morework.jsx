import React, { useEffect, useState, useRef } from 'react';
import './landingpage.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const works = [
    {
        title: 'CHEVO',
        name: 'Built a multilingual and responsive website for virtual assistant.',
        desc: 'Developed and enhanced CHEVO’s platform by adding full responsiveness, integrating multilingual support (Swedish, German, Bosnian), and implementing various improvements to elevate user experience and functionality.',
        img: '/assets/chevo.webp',
        path: '/works/chevo'
    },
    {
        title: 'Panorama',
        name: 'Web Development, Website Design, Branding, SEO',
        desc: 'Panorama dental care, a leading dental platform, approached Effizon to revamp their digital presence. The goal was to design a sleek, professional website that reflected their global reach and online presence.',
        img: '/assets/panorama.webp',
        path: '/works/panorama'
    },
    {
        title: 'Little Barber',
        name: 'Web Development, Website Design, SEO',
        desc: 'Created a clean, user-friendly portal for little barber shop, offering easy appointment booking, customer management, contact us page and many more features.',
        img: '/assets/barber.webp',
        path: '/works/barber'
    },
    {
        title: 'DE.CO',
        name: 'Wanted an engaging platform to enhance their food delivery service.',
        desc: 'Developed an engaging and responsive website for DE.CO, integrating online ordering, menu customization, contact, join us, and location map for easy access.',
        img: '/assets/de.co-home.webp',
        path: '/works/deco'
    }
];

function MoreWork() {
    const navigate = useNavigate();
    const [k, setK] = useState(0);
    const [paused, setPaused] = useState(false);
    const n = works.length;
    const pauseTimeoutRef = useRef(null);
    const autoSlideRef = useRef(null);

    const handleClick = (inc) => {
        setK((prev) => (prev + inc + n) % n);
        pauseAutoplay();
    };

    const pauseAutoplay = () => {
        setPaused(true);
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => {
            setPaused(false);
        }, 5000); // resume after 5 seconds
    };

    useEffect(() => {
        const section = document.querySelector('.morework-section');
        section?.style.setProperty('--n', n);
        section?.style.setProperty('--k', k);
    }, [k, n]);

    useEffect(() => {
        if (!paused) {
            autoSlideRef.current = setInterval(() => {
                setK((prev) => (prev + 1) % n);
            }, 3000);
        }

        return () => clearInterval(autoSlideRef.current);
    }, [paused, n]);

    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => setPaused(false), 5000);
    };


       return (
        <section className="morework-section" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {works.map((item, i) => (
                <article
                    key={i}
                    style={{
                        '--i': i,
                        '--a': `${(Math.random() * 30 - 15).toFixed(2)}deg`
                    }}
                >
                    <span>
                        <h2>{item.title}</h2>
                        <em>{item.name}</em>
                        <p>{item.desc}</p>
                        <span className="learnMoreServices"><a href={item.path}>Learn more <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg> </a></span>
                    </span>
                    <img src={item.img} alt="img" />
                </article>
            ))}
            <div>
                <button aria-label="previous" data-inc="-1" onClick={() => handleClick(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button aria-label="next" data-inc="1" onClick={() => handleClick(1)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

        </section>
    );
}

export default MoreWork;
