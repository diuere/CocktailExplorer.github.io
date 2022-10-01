import React from 'react';
import Reviews from "./Reviews";
import Hero from "./Hero";
import Experience from './Experience';
import ProductsSec from './ProductsSec';
import ContactUs from './ContactUs';

export default function Main() {
  return (
    <main>
      <section className="hero section" id="hero">
        <div className="container">
          <Hero />
        </div>
      </section>
      <section className="products-sec section" id="productsSec">
        <div className="container">
          <ProductsSec />
        </div>
      </section>
      <section className="about-sec section" id="aboutUsSec">
        <div className="container">
          <Experience />
        </div>
      </section>
      <section className='our-review-sec section' id="reviewsSec">
          <Reviews />
      </section>
      <section className="contact-sec section" id="contactSec">
        <div className="container">
          <ContactUs />
        </div>
      </section>
    </main>
  )
}
