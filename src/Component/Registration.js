import React from 'react';
import formImg from '../Assets/form-img.png';
import Tele from '../Assets/tele.png';
import Insta from '../Assets/insta.png';
import Gmail from '../Assets/gmail.png';

const Registration = () => {
  return (
    <section className="registration">
      <div className="reg-center">
        <div className="reg-form">
          <div className="img-cont">
            <img src={formImg} alt="person-img" />
          </div>
          <form className="form-details">
            <h2>Get in Touch</h2>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="form-control"
            />
            <div className="container">
              <input
                type="email"
                id="email"
                placeholder="email"
                className="form-control"
              />
              <input
                type="number"
                id="number"
                placeholder="Phone Number"
                className="form-control"
              />
            </div>
            <input
              type="text"
              id="message"
              placeholder="Message"
              className="form-control"
            />
            <button className="form-btn">Submit Now</button>
          </form>
        </div>
        <div className="underline"></div>
        <div className="social-links">
          <div className="links">
            <img src={Tele} alt="telephone" />
            <a href="#">+91-7011112666</a>
          </div>
          <div className="links">
            <img src={Gmail} alt="gmail" />
            <a href="#">info@Ricoz.in</a>
          </div>
          <div className="links">
            <img src={Insta} alt="insta" />
            <a href="#">Ricoz.in</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration
