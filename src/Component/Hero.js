import React from 'react';
import hero1 from '../Assets/Hero-1.png'
import hero2 from '../Assets/Hero-2.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-details">
        <h2>Discover Top Tech Professionals in Minutes.</h2>
        <p>
          Streamline Your Business Needs with Ricoz's All-in-One Tech Service
          Hub.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
      {/* <div className="hero-img"> */}
        <div className="hero-img-1">
          <img src={hero1} alt="" />
        </div>
        <div className="hero-img-2">
          <img src={hero2} alt="" />
        </div>
      {/* </div> */}
    </section>
  );
}

export default Hero;

