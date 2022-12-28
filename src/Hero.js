import React from "react";
import contentImage from './images/logo1b.png'

export default function Hero() {
  return (
    <section className="content">
      <div className="content-center">
        <article className="content-info">
          <h1>Intelligent integrated Solutions</h1>
          <p>
            Integrated Solution fit for your business consolidating existing
            information,monitoring and reporting
          </p>
          <button className="btn">Learn More</button>
        </article>
        <article className="content-images">
          <img src={contentImage} className="person-img" alt="phone" />
        </article>
      </div>
   
    </section>
  );
}
