import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare, faCaretDown, faLink } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about'); // Navigate to the About page
    setTimeout(() => {
      // Use a timeout to ensure the page has rendered
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };
  return (
    <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Our Services</Link>

                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                <Link to="/faq">FAQs</Link>

                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>

                </li>

              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
              <a href="https://www.facebook.com/people/Effizon/61577688916841/" title="" target='blank'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/effizon_official/" title="" target='blank'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://wa.me/+46734969910" title="" target='blank'>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <p>
            2025 <FontAwesomeIcon icon={faCopyright} /> Effizon
          </p>
        </div>
      </footer>
  )
}

export default Footer