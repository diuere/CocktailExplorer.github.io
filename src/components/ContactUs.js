import React from 'react';
import ContactForm from './ContactForm';

export default function ContactUs() {
  return (
    <>
       <h2 className="main-title-style">Contact us</h2>
       <div className="contact-wrapper">
            <h3 className="contact-title">Contact</h3>
            <ContactForm />
        </div>
        <div className="googleMap-iframe-wrapper">
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.669504367256!2d-122.08502008718114!3d37.4212858734465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sbr!4v1660361713305!5m2!1sen!2sbr"></iframe>
        </div>
    </>
  )
}
