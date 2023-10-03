import React from 'react';
import testimonial1 from '../Assets/testi-1.png';
import testimonial2 from '../Assets/testi-2.png';
import testimonial3 from '../Assets/testi-3.png';
import star from '../Assets/star.png'
const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="t-element">
        <h2>Real Stories from Real Professionals</h2>
        <div className="t-element-2">
          <div className="test-card">
            <div className="user">
              <img src={testimonial1} alt="test-img" />
              <div className="user-detail">
                <h2>John Doe</h2>
                <p>Graduated</p>
              </div>
            </div>
            <div className="test-dtl">
              <h2>"I recommend this to All"</h2>
              <p>
                Ricoz connected me with amazing clients. The quality scoring
                system ensures I work on exciting projects while maintaining my
                reputation.
              </p>
              <span></span>
            </div>
          </div>
          <div className="test-card">
            <div className="user">
              <img src={testimonial2} alt="test-img" />
              <div className="user-detail">
                <h2>Alice Smith</h2>
                <p>Ui/UX designer</p>
              </div>
            </div>
            <div className="test-dtl">
              <h2>“The Support is Awesome”</h2>
              <p>
                As a freelancer, Ricoz's instant search feature saves me time.
                It's a one-stop platform for all my degital marketing needs.
              </p>
            </div>
          </div>
          <div className="test-card">
            <div className="user">
              <img src={testimonial3} alt="test-img" />
              <div className="user-detail">
                <h2>Sophia Miller</h2>
                <p>Student</p>
              </div>
            </div>
            <div className="test-dtl">
              <h2>“A Game Changer For Us”</h2>
              <p>
                I've learned and earned on Ricoz. The courses are well-designed,
                and the integrated tools streamline communication with clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
