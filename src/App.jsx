
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/scrolltotop';
import LandingPage from './Components/landingpage';
import About from './Components/about';
import Work from './Components/work';
import Services from './Components/services';
import Contact from './Components/contact';
import Nav from './Components/nav';
import Faq from './Components/faq';
import Panorama from './Components/works/panorama';
import Barber from './Components/works/barber';
import Deco from './Components/works/deco';
import MoreWorks from './Components/moreWorks';

function App() {
  return (
    <>

<Router>
<ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/works/panorama" element={<Panorama />} />
        <Route path="/works/barber" element={<Barber />} />
        <Route path="/works/deco" element={<Deco />} />
        <Route path="/moreWorks" element={<MoreWorks />} />
        
      </Routes>
    </Router>





    </>
  )
}

export default App;
