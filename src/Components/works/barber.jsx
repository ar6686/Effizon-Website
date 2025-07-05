import '../work.css'
import Nav from '../nav';
import MoreWork from '../morework';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import react from 'react';

function Barber() {


return(
    <>
    <Nav />
    <section className="workShowcase">
<div className="workHero">
    <div className="workText">
    <h1>Little Barber Shop</h1>
    <p>Designed and developed a full website for Little Barber, a local barber shop based in Sydney.</p>
    </div>
    <div className="video-container">
          <video controls className="video-player">
            <source src="/assets/barber-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
</div>


<div className="role">
    <div className="roleLeft">
            <div>
            <h2>Services</h2>
            <p>The services provided included custom website design, integration of an online booking system, SEO optimization for better visibility, responsive layout development, and performance optimization for faster loading.</p>
            </div>
            <div>
            <h2>Role</h2>
            <p>The aim was to create a professional online presence for Little Barber, improve visibility with SEO, and provide an easy-to-use platform for customers to book appointments.</p>
            </div>
        </div>
    <div className="roleRight">
    <img src="/assets/barber.webp" alt="" />

</div>
    </div>

    
    <div className="responsiveWork">
        <div className="responsiveWorkText">
        <h1>Key Features</h1>
        <p>The website is fully responsive, providing a seamless experience across all devices, from desktops to mobile phones. Customers can easily book appointments through a streamlined booking system. The site is optimized for search engines, ensuring better visibility online. A user-friendly interface makes it simple for clients to inquire about services and schedule appointments instantly.</p>
        </div>
        <div className="responsiveWorkImage">
            <img src="/assets/barber-responsive.webp" alt="" />
            
        </div>



    </div>


    <div className="allStuff">
        <div className="allStuffText">
            <h1>Website Features Showcase</h1>
            <ul>
                <li>Easy Online Booking</li>
                <li>Detailed Service Pages</li>
                <li>Responsive Design</li>
                <li>Gift Voucher Section</li>
                <li>Custom Icons</li>
                <li>Contact Information</li>
            </ul>
            <p>Explore the key features and design elements implemented for Little Barber. Below are visual representations of the site's layout, functionality, and aesthetics.</p>
        </div>
        <div className="allStuffMedia">
            <img src="/assets/barber-timing.webp" alt="" />
            <img src="/assets/barber-consult.webp" alt="" />
            <img src="/assets/barber-shop.webp" alt="" />
            <img src="/assets/barber-services.webp" alt="" />
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




};
export default Barber;