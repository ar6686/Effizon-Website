import react from 'react';
import '../work.css'
import Nav from '../nav';
import MoreWorks from '../moreWorks';
import Footer from '../footer';
import { Link } from 'react-router-dom';
function Panorama() {


return(
    <>
    <Nav />
    <section className="workShowcase">
<div className="workHero">
    <div className="workText">
    <h1>Panorama Dental Clinic Website</h1>
    <p>Crafted a comprehensive digital experience for Panorama Dental Clinic, emphasizing user-friendly navigation, modern design, and seamless functionality.</p>
    </div>
    <div className="video-container">
          <video controls className="video-player">
            <source src="/assets/panorama.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
</div>


<div className="role">
    <div className="roleLeft">
            <div>
            <h2>Services</h2>
            <p>Designed and developed a fully responsive website for Panorama Dental Clinic, focusing on user-friendly navigation, sleek design, and clear presentation of dental services. Integrated features like appointment booking, service listings, and client testimonials to ensure an engaging user experience.</p>
            </div>
            <div>
            <h2>Role</h2>
            <p>Led the project as the sole web developer. Tasks included designing the UI/UX, coding, and deploying the website while ensuring mobile responsiveness and SEO optimization for increased online visibility.</p>
            </div>
        </div>
    <div className="roleRight">
    <img src="/assets/panoramaimg1-min.webp" alt="" />
</div>
    </div>

    
    <div className="responsiveWork">
        <div className="responsiveWorkText">
        <h1>Key Features</h1>
        <p>Ensuring optimal viewing on all devices, from desktops to smartphones. Integrated to simplify appointment scheduling for patients. Enhanced to improve search engine rankings and visibility. Easy-to-update platform for the clinic's staff.  Immediate assistance for inquiries and appointment setups.</p>
        </div>
        <div className="responsiveWorkImage">
    <img src="/assets/panorama-responsive-min.webp" alt="" />
            
        </div>



    </div>


    <div className="allStuff">
        <div className="allStuffText">
            <h1>Website Features Showcase</h1>
            <ul>
                <li>Responsive Design Across Devices</li>
                <li>Appointment Booking Form</li>
                <li>Detailed Service Pages</li>
                <li>Blog Section for Patient Education</li>
                <li>Custom Icons and Graphics</li>
                <li>Google Maps and Contact Information</li>
            </ul>
            <p>Explore the key features and design elements implemented for the Panorama Dental Clinic website. Below are visual representations of the site's layout, functionality, and aesthetics.</p>
        </div>
        <div className="allStuffMedia">
            <img src="/assets/panorama-contact-min.webp" alt="" />
            <img src="/assets/panorama-appointment-min.webp" alt="" />
            <img src="/assets/panorama-services-min.webp" alt="" />
            <img src="/assets/panorama-office-min.webp" alt="" />
        </div>
    </div>
</section>

<div className="moreWorks">
    <h1>More Works</h1>
</div>
<MoreWorks />

<div className="contactCard">
    <p>Work With Us</p>
    <h1>Let’s work together to <br /> build something great.</h1>
    <button><Link to="/contact">Contact Us</Link></button>

</div>

<Footer />
    </>
)




};
export default Panorama;