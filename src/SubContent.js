import React from "react";
import remoteimg from "./images/remote1.png";
import securityimg from "./images/forsecurity.png";
import energyIcon from "./images/icons";
import gpsIcon from "./images/icons";
import towerImg from   './images/tower11.jpg'

export default function SubContent() {
  return (
    <>
      <main>
        <div className="sub-info">
          <p>
            We’re a world-leader in holistic end-to-end Remote Site Management
            solutions via IOT platform, operating worldwide with over 95,000
            successful sites installations. With AIO’s CMS you can automate
            business operations, utilize energy wisely, manage assets health,
            and remotely secure and control your network environment. AIO is
            committed to make your business smart and efficient by significantly
            improving operational performance, extending asset life and generate
            more revenues. We’re a world leader in holistic end-to-end Remote
            Site Management solutions via IOT platform We are committed to
            making your business smart and efficient by significantly improving
            operational performance, extending asset life and generating more
            revenues.
          </p>
        </div>
        <div className="solutions">
          <div className="underline-title">
            <h1> IoT Solutions</h1>
            <div className="underline"></div>
          </div>
          <article className="services-container">
            <div className="services">
              <div className="display">
                <h3>Remote Management</h3>
                <p>
                  Unified, optimized, end-to-end cloud-based IOT solution
                  designed to reduce cost, Improving response time, offer
                  essential added values and to provide the highest level
                  anti-cyber security. Unified, optimized, end-to-end
                  cloud-based IOT solution designed to reduce cost, Improving
                  response time, offer essential added values and to provide the
                  highest level anti-cyber security.
                </p>
                <button className="display-btn">Learn More</button>
              </div>
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
            <div className="services">
              <div className="image">
                <img src={remoteimg} alt="" className="icon" />
              </div>
              <div className="title">Remote Management</div>
            </div>
          </article>
        </div>
      </main>

      <section className="sub-section">
        <div className="underline-title">
          <h1 className="sub-title"> Our On Demand Services</h1>
          <div className="underline"></div>
        </div>
        <p>
          Based on 15 years’ experience and 95,000 successful installations, AIO
          provides full range consulting services include planning, design and
          on-site support and deployments.
        </p>
        <div className="demand-container">
          <div className="sevices-demand">
            <fieldset>
              <legend>1</legend>
              Highly skilled & certified technicians
            </fieldset>
            <fieldset>
              <legend>2</legend>
              Extended Warranty
            </fieldset>
            <fieldset>
              <legend>3</legend>
              Field/call support
            </fieldset>
            <fieldset>
              <legend>4</legend>
              Equipment replacement
            </fieldset>
            <fieldset>
              <legend>5</legend>
              Preventive maintenance
            </fieldset>
            <fieldset>
              <legend>6</legend>
              Consulting services
            </fieldset>
            <fieldset>
              <legend>7</legend>
              Upgrades, migrations
            </fieldset>
            <fieldset>
              <legend>8</legend>
              Custom development support
            </fieldset>
          </div>
          <img src={towerImg} alt="" className="demand-img" />
        </div>
      </section>
    </>
  );
}
