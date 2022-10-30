import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  
  const [contactInputs, setContactInputs] = useState(
    {
      from_name: "",
      from_email: "",
      message: "",
    }
  )

  const sendEmail = (e) => { // sending emails using EmailJS
    e.preventDefault();

    // emailjs.sendForm('service_7mfuzbo', 'template_ob9k3p8', form.current, 'OjtO9_H9y03jj1H36')
    emailjs.sendForm('service_e8tjba3', 'template_bhovy0m', form.current, 'J-tFMwV5sJF45Q8em')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setContactInputs(state => (
      {
        ...state,
        [name]: value,
      }
    ))
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="userName">Name</label>
        <input type="text" name="from_name" value={contactInputs.from_name} id="userName" required onChange={(e) => handleInputChange(e)}/>

        <label htmlFor="userEmail">Email</label>
        <input type="email" name="from_email" value={contactInputs.from_email} id="userEmail" required onChange={(e) => handleInputChange(e)}/>
        
        <label htmlFor="contactMessage">Message</label>
        <textarea name="message" id="contactMessage" value={contactInputs.message} cols="30" rows="10" required onChange={(e) => handleInputChange(e)}></textarea>
        
        <button className="main-btn-style">submit</button>
    </form>
)
}
