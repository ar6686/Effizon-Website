import react from 'react';
import '../work.css'
import Nav from '../nav';
import MoreWork from '../morework';
import Footer from '../footer';
import { Link } from 'react-router-dom';
function Deco() {


return(
    <>
    <Nav />
    <section className="workShowcase">
<div className="workHero">
    <div className="workText">
    <h1>DECO</h1>
    <p>Crafted a dynamic website for Deco, a popular fast food spot in Wilmington, offering a seamless online experience that captures their unique flavor and energy</p>
    </div>
    <div className="video-container">
          <video controls className="video-player">
            <source src="/assets/de.co.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
</div>


<div className="role">
    <div className="roleLeft">
            <div>
            <h2>Services</h2>
            <p>We provided a fully custom website design, seamlessly integrated online ordering system, advanced SEO optimization for enhanced visibility, responsive layout for all devices, and performance optimization to ensure lightning-fast loading times.</p>
            </div>
            <div>
            <h2>Role</h2>
            <p>The goal was to establish a professional online presence for Deco, elevate its visibility through strategic SEO, and offer a user-friendly platform for customers to easily place orders.</p>
            </div>
        </div>
    <div className="roleRight">
    <img src="/assets/de.co-home.webp" alt="" />

</div>
    </div>

    
    <div className="responsiveWork">
        <div className="responsiveWorkText">
        <h1>Key Features</h1>
        <p>The website is fully responsive, delivering a flawless browsing experience across all devices, from desktops to smartphones. Customers can effortlessly place orders through a streamlined system. The site is search engine optimized for maximum online reach, and its intuitive interface allows users to explore the menu and order with ease.</p>
        </div>
        <div className="responsiveWorkImage">
            <img src="/assets/de.co-responsive.webp" alt="" />
            
        </div>



    </div>


    <div className="allStuff">
        <div className="allStuffText">
            <h1>Website Features Showcase</h1>
            <ul>
                <li>Detailed Menu</li>
                <li>Easy Online Orders</li>
                <li>Contact Information</li>
                <li>Location and maps Section</li>
                <li>Responsive Design</li>
                <li>Custom Icons</li>
            </ul>
            <p>Explore the key features and design elements implemented for Deco. Below are visual representations of the site's layout, functionality, and aesthetics.</p>
        </div>
        <div className="allStuffMedia">
            <img src="/assets/de.co-contact.webp" alt="" />
            <img src="/assets/de.co-food.webp" alt="" />
            <img src="/assets/de.co-about.webp" alt="" />
            <img src="/assets/de.co-join.webp" alt="" />
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
export default Deco;