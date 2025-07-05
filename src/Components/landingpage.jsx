import './landingpage.css'
import Nav from './nav';
import Footer from './footer';
import MoreWork from './morework';
import Faq from './faq';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faArrowUpRightFromSquare, faCaretDown, faLink } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
function Landingpage() {
  const sectionRefs = useRef([]); // Array to hold references to sections

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated', 'fade-in-up'); // Add classes when in view
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    });

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section); // Observe each section
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section); // Clean up observer
        }
      });
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    const [menuOpen, setMenuOpen] = useState(false);

    // Handle clicking outside of the menu
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.navigation__nav') && !event.target.closest('.navigation__button')) {
          setMenuOpen(false);
        }
      };

      if (menuOpen) {
        document.addEventListener('click', handleClickOutside);
      } else {
        document.removeEventListener('click', handleClickOutside);
      }

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [menuOpen]);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/work');
  };
  const navigateToContact = useNavigate();
  const letsTalkClick = () => {
    navigateToContact('/contact');
  };
  const navigateTopanorama = useNavigate();
  const panoramaClick = () => {
    navigateTopanorama('/works/panorama');
  };
  const navigateTobarber = useNavigate();
  const barberClick = () => {
    navigateTobarber('/works/barber');
  };
  const navigateToWork3 = useNavigate();
  const work3Click = () => {
    navigateToWork3('/works/work3');
  };
  useEffect(() => {
    const items = document.querySelectorAll('.ag-courses_item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 200); // Delay for each item
    });
  }, []);
  return (
    <>
      <div className="bgimage">

        <Nav />
        <main className="main">
          <section className="section banner banner-section">
            <div className="container banner-column">
              <img
                className="banner-image"
                src="assets/main02.webp"

                alt="banner"
              />
              <div className="banner-inner">
                <div className="banner-inner-text">
                  <p className='weare'>Design, Develop, Deliver</p>
                  <h1 className="heading-xl">A digital agency dedicated to web.</h1>
                  <p className="paragraph">
                    We are a passionate team of designers, developers, strategists, and producers, crafting outstanding websites for clients around the globe.
                  </p>
                  <div className='moreWorkBtn talkDiv'>
                    <button className="button-64 talkBtn" role="button" onClick={letsTalkClick}>
                      <span className="">LET'S TALK</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="banner-links">

                <a href="https://www.facebook.com/people/Effizon/61577688916841/" title="" target='blank'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/effizon_official/" title="" target='blank'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/abdul-rehman-effizon/" title="" target='blank'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://wa.me/+46734969910" title="" target='blank'>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>

              </div>
            </div>
          </section>
        </main>
      </div>
      <section className="services">
        <div className="ourservices">
          <h1 className='keyServices'>Our Services</h1></div>
        <div className="ag-format-container">
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <div href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg" />
                <div className="ag-courses-item_title">
                  Full-Stack Web Apps
                </div>
                <div className="ag-courses-item_date-box">
                  <span className="ag-courses-item_date">Building custom, scalable, and secure web applications using the MERN stack and modern technologies tailored to your business goals.</span>
                  <div className="learnMoreServices">
                    <HashLink smooth to="/services#website-design">Learn more <FontAwesomeIcon icon={faArrowRight} /> </HashLink>

                  </div>
                </div>
              </div>
            </div>
            <div className="ag-courses_item">
              <div href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg" />
                <div className="ag-courses-item_title">
                  WordPress & Shopify Stores
                </div>
                <div className="ag-courses-item_date-box">
                  <span className="ag-courses-item_date">Designing fast, conversion-optimized eCommerce stores and business websites on WordPress and Shopify to boost your online presence.</span>
                  <div className="learnMoreServices">
                    <HashLink smooth to="/services#wordpress">Learn more <FontAwesomeIcon icon={faArrowRight} /> </HashLink>

                  </div>
                </div>
              </div>
            </div>
            <div className="ag-courses_item">
              <div href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg" />
                <div className="ag-courses-item_title">
                  Social Media Management
                </div>
                <div className="ag-courses-item_date-box">
                  <span className="ag-courses-item_date">Helping you manage your brand, products, and customer communication across social media platforms and online stores efficiently.</span>
                  <div className="learnMoreServices">
                    <HashLink smooth to="/services#socialmedia">Learn more <FontAwesomeIcon icon={faArrowRight} /> </HashLink>

                  </div>
                </div>
              </div>
            </div>
            <div className="ag-courses_item">
              <div href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg" />
                <div className="ag-courses-item_title">
                  SEO
                </div>
                <div className="ag-courses-item_date-box">
                  <span className="ag-courses-item_date">Boosting your website's visibility with expert search engine optimization, helping you outrank the competition and attract more traffic.</span>
                  <div className="learnMoreServices">
                    <HashLink smooth to="/services#seo">Learn more <FontAwesomeIcon icon={faArrowRight} /> </HashLink>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <div ref={(el) => (sectionRefs.current[1] = el)} className="workBigDiv">
        <div className="featuredWorkHeading">
          <h1>Featured Work</h1>
          <p>Explore some of our latest projects</p>
        </div>
        <div className="video-container">
          <video controls className="video-player" muted>
            <source src="assets/work-mp4.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <MoreWork />


      </div>
      <div className='moreWorkBtn'>
        <button className="button-64" role="button" onClick={handleClick}>
          <span className="">Explore more</span>
        </button>
      </div>

      <Faq />


      <Footer />


    </>
  )
}

export default Landingpage