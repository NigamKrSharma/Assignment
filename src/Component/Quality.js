import React from 'react';
import Qimg from '../Assets/Quality.png';
import Qelement1 from '../Assets/q-icon1.png';
import Qelement2 from '../Assets/q-icon2.png';
import Qelement3 from '../Assets/q-icon3.png';
import Qelement4 from '../Assets/q-icon4.png';

const Quality = () => {
  return (
    <section className="quality">
      <div className="quality-center">
        <h2>Why Choose Ricoz?</h2>
        <div className="quality-element">
          <div className="quality-element-1">
            <div className="q-img">
              <img src={Qimg} alt="person-img" />
            </div>
          </div>
          <div className="quality-element-2">
            <div className="sub-element">
              <div className="quality-img">
                <img className="quality-icon" src={Qelement1} alt="q-icon" />
              </div>
              <div className="element-details">
                <h3>Vast Professional Network</h3>
                <p>
                  Access a wide range of skilled tech professionals, all in one
                  platform.
                </p>
              </div>
            </div>
            <div className="sub-element">
              <div className="quality-img">
                <img className="quality-icon" src={Qelement2} alt="q-icon" />
              </div>
              <div className="element-details">
                <h3>Quality You Can Trust</h3>
                <p>
                  Our stringent quality scoring system ensures that you receive
                  exceptional services.
                </p>
              </div>
            </div>
            <div className="sub-element">
              <div className="quality-img">
                <img className="quality-icon" src={Qelement3} alt="q-icon" />
              </div>
              <div className="element-details">
                <h3>Effortless Collaboration</h3>
                <p>
                  Our integrated tools facilitate seamless communication and
                  collaboration
                </p>
              </div>
            </div>
            <div className="sub-element">
              <div className="quality-img">
                <img className="quality-icon" src={Qelement4} alt="q-icon" />
              </div>
              <div className="element-details">
                <h3>Save Time and Effort</h3>
                <p>
                  With our platform, finding professionals and managing projects
                  becomes effortless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
