import { FEATURES } from "../data";
import iconleft from '../Assets/left.png';
import iconright from '../Assets/right.png';
import feature1 from '../Assets/feature-1.png';
import feature2 from '../Assets/feature-2.png';
import feature3 from '../Assets/feature-3.png';

import React from 'react';

const Features = () => {
   

  return (
    <section className="feature">
      <div className="feature-center">
        <div className="feature-title">
          <h2>Explore Our Platform's Unique Features</h2>
          <div className="icon-container">
            <img src={iconleft} alt="icon-1" />
            <img src={iconright} alt="icon-2" />
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div>
              <img src={feature1} alt="icon" />
            </div>
            <h2 className="card-title">Wide Range of Services</h2>
            <p className="card-detail">
              Find everything from web development to marketing under one roof.
              Our platform offers a diverse array of tech services
            </p>
          </div>
          <div className="card">
            <div>
              <img src={feature2} alt="icon" />
            </div>
            <h2 className="card-title">Instant Search</h2>
            <p className="card-detail">
              Get connected to top tech professionals within moments. Our
              intuitive search function ensures quick access.
            </p>
          </div>
          <div className="card">
            <div>
              <img src={feature3} alt="icon" />
            </div>
            <h2 className="card-title">Quality Scoring</h2>
            <p className="card-detail">
              We maintain high service standards. Our unique scoring system
              ensures you receive top-notch quality from professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
