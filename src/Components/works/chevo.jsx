import react from 'react';
import '../work.css'
import Nav from '../nav';
import MoreWork from '../morework';
import Footer from '../footer';
import { Link } from 'react-router-dom';

function Chevo() {
  return (
    <>
      <Nav />
      <section className="workShowcase">
        <div className="workHero">
          <div className="workText">
            <h1>Chevo</h1>
            <p>Built a multilingual personal website for Chevo, a virtual business assistant, helping her attract clients online with a clean, responsive design and SEO-focused layout.</p>
          </div>
          <div className="video-container">
            <video controls className="video-player">
              <source src="/assets/chevo-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="role">
          <div className="roleLeft">
            <div>
              <h2>Services</h2>
              <p>Delivered a multilingual website with responsive layout, SEO optimization, smooth navigation, and performance tuning to improve visibility and client engagement.</p>
            </div>
            <div>
              <h2>Role</h2>
              <p>The goal was to create a professional online presence that showcases her services, improves reach, and makes it easy for clients to connect and communicate.</p>
            </div>
          </div>
          <div className="roleRight">
            <img src="/assets/chevo.webp" alt="" />
          </div>
        </div>

        <div className="responsiveWork">
          <div className="responsiveWorkText">
            <h1>Key Features</h1>
            <p>The site supports Swedish, German, and Bosnian languages. It's fully responsive, SEO-optimized, and designed for an intuitive user experience on all devices.</p>
          </div>
          <div className="responsiveWorkImage">
            <img src="/assets/chevo-responsive.webp" alt="" />
          </div>
        </div>

        <div className="allStuff">
          <div className="allStuffText">
            <h1>Website Features Showcase</h1>
            <ul>
              <li>Multilingual Support</li>
              <li>Service Description Sections</li>
              <li>Client Contact Integration</li>
              <li>Map & Location Display</li>
              <li>Responsive UI Design</li>
              <li>Branded Icon Set</li>
            </ul>
            <p>This section highlights core visuals and components built for Chevo. Each feature is crafted to support brand identity and user interaction effectively.</p>
          </div>
          <div className="allStuffMedia">
            <img src="/assets/chevo-01.webp" alt="" />
            <img src="/assets/chevo-02.webp" alt="" />
            <img src="/assets/chevo-03.webp" alt="" />
            <img src="/assets/chevo-04.webp" alt="" />
          </div>
        </div>
      </section>

      <div className="moreWorks">
        <h1>More Works</h1>
      </div>
      <MoreWork />

      <div className="contactCard">
        <p>Work With Us</p>
        <h1>Let’s work together to <br /> build something great.</h1>
        <button><Link to="/contact">Contact Us</Link></button>
      </div>

      <Footer />
    </>
  )
}

export default Chevo;
