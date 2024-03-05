import React from 'react';
import './FAQPage.css';

function FAQPage() {
  return (
    <div className="faq-page">
      <h1 style={{fontFamily:"'Orbitron', sans-serif",color:"red"}}>FAQs</h1>
      <div className="faq-section">
        <h2 style={{color:"white"}}>  General Questions</h2>
        <div className="faq-item">
          <h3>How do I sign up for a membership?</h3>
          <p>To sign up for a membership, please visit our membership page and follow the instructions provided.</p>
        </div>
        <div className="faq-item">
          <h3>What are the benefits of joining our fitness program?</h3>
          <p>Our fitness program offers personalized workout plans, access to state-of-the-art equipment, and professional trainers to help you achieve your fitness goals.</p>
        </div>
      </div>
      <div className="faq-section">
        <h2>Account Support</h2>
        <div className="faq-item">
          <h3>How do I reset my password?</h3>
          <p>To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions provided to reset your password.</p>
        </div>
        <div className="faq-item">
          <h3>Can I update my membership plan?</h3>
          <p>Yes, you can update your membership plan at any time by contacting our support team or visiting our membership page.</p>
        </div>
      </div>

      <div className="testimonials-page">
      <h1 style={{fontFamily:"'Orbitron', sans-serif",color:"red"}}>Testimonials and Success Stories</h1>
      <div className="testimonial">
        <h2>John's Success Story</h2>
        <p>"I joined the fitness program six months ago, and it has completely changed my life. I've lost 30 pounds and gained so much confidence. The trainers are amazing, and the community here is so supportive. I can't recommend it enough!"</p>
        <p>- John Doe</p>
      </div>
      
    </div>

    </div>
  );
}

export default FAQPage;