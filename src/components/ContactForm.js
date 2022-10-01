import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => { // sending emails using EmailJS
      e.preventDefault();
  
      emailjs.sendForm('service_7mfuzbo', 'template_ob9k3p8', form.current, 'OjtO9_H9y03jj1H36')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      e.target.reset();
    };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="userName">Name</label>
        <input type="text" name="from_name" id="userName" required/>

        <label htmlFor="userEmail">Email</label>
        <input type="email" name="email_id"  id="userEmail" required/>
        
        <label htmlFor="contactMessage">Message</label>
        <textarea name="message" id="contactMessage" cols="30" rows="10" required></textarea>
        
        
        <button className="main-btn-style">submit</button>
    </form>
)
}
