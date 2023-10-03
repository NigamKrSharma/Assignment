import React from 'react';
import course1 from '../Assets/course-1.png';
import course2 from '../Assets/course-2.png';
import course3 from '../Assets/course-3.png';
import arrow from '../Assets/Icon.png'

const Courses = () => {
  return (
    <section className="courses">
      <div className="courses-element">
        <div className="courses-element-1">
          <div className="courses-heading">
            <h2>Unlock New Skills with Our Courses</h2>
            <p>Learn and Grow at Your Own Pace.</p>
          </div>
          <button className="expl-btn">Explore more</button>
        </div>
        <div className="courses-element-2">
          <div className="course-card">
            <img src={course1} alt="course-img" />
            <div className="course-dtl">
              <h2>Web Development Mastery</h2>
              <span>₹ 60,000</span>
              <p>
                Master the art of web development with our comprehensive course.
                Learn coding, design, and deployment.
              </p>
              <div className="learn-more">
                <a href="#">Learn More</a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="course-card">
            <img src={course2} alt="course-img" />
            <div className="course-dtl">
              <h2>Digital Marketing Fundamentals</h2>
              <span>₹ 80,000</span>
              <p>
                Navigate the Digital Landscape. Explore the world of digital
                marketing. Acquire skills in SEO, social media, and online
                advertising.
              </p>
              <div className="learn-more">
                <a href="#">Learn More</a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="course-card">
            <img src={course3} alt="course-img" />
            <div className="course-dtl">
              <h2>Graphic Design Fundamentals</h2>
              <span>₹ 60,000</span>
              <p>
                Unleash your creativity with graphic design. Learn layout,
                typography, and visual communication.
              </p>
              <div className="learn-more">
                <a href="#">Learn More</a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
