import React from "react";
import Contact from "./Contact";
import ContactLink from "./ContactLink";

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <ContactLink />
        <article className="footer-article">
          <div className="footer-links">
            <h4>SOLUTIONS</h4>
            <ul>
              <li>Remote Site Management</li>
              <li>Total Security</li>
              <li>Energy Efficiency</li>
              <li>FiberSense Solution</li>
              <li>GPS Tracking</li>
              <li>Asset Management</li>
              <li>Business Process Management</li>
              <li>Micro Grid Management</li>
              <li>Street Cabinet</li>
              <li>Central Management System</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Company</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>CAREERS</h4>
            <ul>
              <li>Why join us</li>
              <li>Culture and values</li>
              <li>Vacancies</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="footer-links">
            <h4>GET IN TOUCH</h4>
            <ul>
              <li>Contact us</li>
              <li>info@uziben.com</li>
            </ul>
          </div>
        </article>
      </section>
      <footer>
        <p>©2022 by UB. All rights reserved.</p>
      </footer>
    </>
  );
}
