import React from "react";
import { Link } from "react-router-dom";
import "./ThankYouPage.css";

function ThankYouPage() {
  return (
    <section className="thankyou_container">
      <div className="thankyou_content">
       
        <h1>Thank You</h1>
        <p className="thankyou_text">
          We appreciate you contacting <span>Blitzpath Innovations</span>.
          Your message has been submitted successfully, and our team will get
          back to you as soon as possible.
        </p>

        

        <div className="thankyou_buttons">
          <Link to="/" className="thankyou_btn primary_btn">
            Back to Home
          </Link>
          <Link to="/services" className="thankyou_btn secondary_btn">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ThankYouPage;