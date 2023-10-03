import React from "react";
import wf1 from "../Assets/wf-1.png";
import wf2 from "../Assets/wf-2.png";
import wf3 from "../Assets/wf-3.png";
import wf4 from "../Assets/wf-4.png";
import wf5 from "../Assets/wf-5.png";
import wf6 from "../Assets/wf-6.png";
import wf7 from "../Assets/wf-7.png";

const WorkFlow = () => {
  return (
    <section className="workflow">
      <div className="wf-center">
        <h2>Enhance Your Workflow with Integrated Tools</h2>
        <div className="wf-elements">
          <div className="wf-elem-1">
            <div className="wf-card">
              <img src={wf1} alt="wf-1" />
              <div className="wf-details">
                <h2>Messaging Platform</h2>
                <p>
                  Stay connected and collaborate seamlessly with clients and
                  team members.
                </p>
              </div>
            </div>
            <div className="wf-card">
              <div className="wf-img">
                <img src={wf2} alt="" />
              </div>
              <h2>CRM System</h2>
              <p>
                Manage client relationships effectively with our user-friendly
                CRM system.
              </p>
            </div>
          </div>
          <div className="wf-elem-2">
            <div wf-img-container>
              <img src={wf6} alt="wf-6" />
            </div>
            <div className="wf-main-img">
              <img src={wf3} alt="wf-3" />
            </div>
            <div wf-img-container>
              <img src={wf7} alt="wf-7" />
            </div>
          </div>
          <div className="wf-elem-3">
            <div className="wf-card">
              <div className="wf-img">
                <img src={wf4} alt="" />
              </div>
              <h2>Collaborative Workspace</h2>
              <p>
                Experience the power of collaboration in our shared workspace
                together.
              </p>
            </div>
            <div className="wf-card">
              <div className="wf-img">
                <img src={wf5} alt="" />
              </div>
              <h2>Calendar Integration</h2>
              <p>
                Simplify your scheduling and time management with our calendar
                integration.
              </p>
            </div>
          </div>
        </div>
        <button className="wf-btn">Explore tools</button>
      </div>
    </section>
  );
};

export default WorkFlow;
