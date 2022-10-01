import React, { useContext } from 'react';
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function SmContact({func}) {
    // function the can handle a possible click event coming from the parent
    const handleClick = (e) => {
        if(func) func(e);
        return;
    };

  return (
    <ul className="sm-contact-wrapper">
        <li className="sm-contact-icon" onClick={handleClick}>
            <a href="#" target="_blank" aria-label="facebook contact"><BsFacebook /></a>
            
        </li>
        <li className="sm-contact-icon" onClick={handleClick}>
            <a href="#" target="_blank" aria-label="twitter contact"><BsTwitter /></a>
            
        </li>
        <li className="sm-contact-icon" onClick={handleClick}>
            <a href="#" target="_blank" aria-label="instagram contact"><BsInstagram /></a>
            
        </li>
        <li className="sm-contact-icon" onClick={handleClick}>
            <a href="#" target="_blank" aria-label="linkedin contact"><BsLinkedin /></a>
        </li>
    </ul>
  )
}
