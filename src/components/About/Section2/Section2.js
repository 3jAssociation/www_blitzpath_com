import React from "react";
import images from "../../../images/Image";
import "./Section2.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import startupIndia from "../../../images/startupIndia.png";
import startupCertificate from '../../../images/startupCertificate.pdf'

function Section2() {

  const openCertificate = ()=>{
    window.open(startupCertificate,'_blank')
  }

  const textToType = 'Blitzpath Innovations is proud to be recognized by Startup India, a flagship initiative of the Government of India, intended to catalyse startup culture and build a strong and inclusive ecosystem for innovation and entrepreneurship in India. This recognition endorses the idea and vision of Blitzpath Innovations to bridge the gap between the global demand for professionals and the vast availability of skilled resources in India.'

  return (
    <section className="Section2_Container">
      <div className="startup">
        <div className="startup_image">
          <img src={startupIndia} alt="startypIndia" />
        </div>
        <div className="startup_content">
          <h1 id='text'>
            {textToType}
          </h1>
          {/* <p><button onClick={openCertificate}>Certificate</button></p> */}
        </div>
      </div>
      <div className="Section2_Heading">
        <AnimationOnScroll
          animateOnce={false}
          offset={150}
          animateIn="animate__fadeInUp"
        >
          <h1>Our Team</h1>
        </AnimationOnScroll>
      </div>

      <section className="Gallery_Stories">
        <section className="Gallery_section">
          {images.map((ele, index) => {
            return (
              <div className="Gallery-container" key={index}>
                <img src={ele.src} alt="About" />
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
}

export default Section2;
