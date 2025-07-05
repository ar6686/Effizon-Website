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
            answer: "Effizon specializes in services like Responsive Web Design, Website Development, React Web Applications, UI/UX Design, SEO, Wordpress development and Shopify Stores. We excel in creating custom websites and unique web applications tailored to your needs."
          },
          {
            question: "What’s the Effizon workflow for your dream project?",
            answer: "At Effizon, we follow a structured yet personalized process. From consultation, research, and design to development, testing, and final delivery, we ensure smooth communication to bring your vision to life."
          },
          {
            question: "How long will it take to bring my project to life with Effizon?",
            answer: "Project timelines vary depending on your goals and complexity. Most custom websites and React applications are delivered within a few days to a few weeks. Once we understand your requirements, we provide a clear project roadmap with timelines to keep you updated every step of the way."
          },
          {
            question: "Can I schedule a free consultation with Effizon?",
            answer: "Absolutely! We offer free consultations to discuss your project and provide a comprehensive proposal. Contact us today to kickstart your journey!"
          },
          {
            question: "How do I get started with Effizon?",
            answer: "Getting started is quick and easy. Simply reach out to us via our website or email, and we’ll set up a free consultation. From there, we’ll dive into your goals, map out a strategy, and kickstart the journey to building your custom web solution."
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
