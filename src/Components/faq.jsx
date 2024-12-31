import './landingpage.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active accordion

  const toggleAccordion = (index) => {
    // If the clicked index is the same as the active index, collapse it
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index); // Set the active index to the clicked one
    }
  };

  return (
    <>
      <div className="wrapper">
        <h1 className='faqHeading'>Frequently Asked Questions</h1>

        {[ 
          {
            question: "What services does Effizon offer?",
            answer: "Effizon specializes in services like Responsive Web Design, Website Development, React Web Applications, UI/UX Design, and SEO. We excel in creating custom websites for dentists, doctors, and unique web applications tailored to your needs."
          },
          {
            question: "What’s the Effizon workflow for your dream project?",
            answer: "At Effizon, we follow a structured yet personalized process. From consultation, research, and design to development, testing, and final delivery, we ensure smooth communication to bring your vision to life."
          },
          {
            question: "How long will it take to bring my project to life with Effizon?",
            answer: "The time frame varies depending on the project's complexity. Most projects take a few days to a few weeks. After assessing your needs, we provide a detailed timeline to keep you informed throughout the process."
          },
          {
            question: "Can I schedule a free consultation with Effizon?",
            answer: "Absolutely! We offer free consultations to discuss your project and provide a comprehensive proposal. Contact us today to kickstart your journey!"
          },
          {
            question: "How do I get started with Effizon?",
            answer: "Getting started is simple! Contact us through our website or email, and we’ll schedule a consultation to explore your project needs and start making your vision a reality."
          }
        ].map((faq, index) => (
          <div className="faq" key={index}>
            <button
              className={`accordion ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <FontAwesomeIcon icon={faCaretDown} className={`faqIcon ${activeIndex === index ? "active" : ""}`} />
            </button>
            <div
              className="pannel"
              style={{ display: activeIndex === index ? "block" : "none" }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
