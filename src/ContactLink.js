import React from "react";
import contactLinkImg from "./images/contactlink5.jpg";

export default function ContactLink() {
  return (
    <>
      <section className="contactlink-container">
        <div className="image-container">
          <img src={contactLinkImg} alt="" className="contact-img" />
        </div>
        <article className="contact-article">
          <h3>Let Us Help</h3>
          <p>
            At American Tower Do Brasil, we take customer service seriously. Our
            customers are encouraged to share their feedback, and we take
            action, with the goal of continually making it easier to work with
            us. We are committed to providing ongoing support to every customer,
            every step of the way.
          </p>
          <button className="btn">Contact Us</button>
        </article>
      </section>
      <main>
        <h3>Let Us Help</h3>
        <p>
          At American Tower Do Brasil, we take customer service seriously. Our
          customers are encouraged to share their feedback, and we take action,
          with the goal of continually making it easier to work with us. We are
          committed to providing ongoing support to every customer, every step
          of the way.
        </p>
      </main>
    </>
  );
}
