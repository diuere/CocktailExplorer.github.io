import React from 'react';
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { IoIosPeople } from "react-icons/io";
import { BiDrink } from 'react-icons/bi';
import { MdRateReview } from 'react-icons/md';
import { MdConnectWithoutContact } from 'react-icons/md';


export default function NavbarLinks({func}) {
    // function the can handle a possible click event coming from the parent
    const handleClick = (e) => {
        if(func) func(e);
        return;
    };

  return (
    <ul className="hamburger-menu-links desktop-menu-links">
        <li>
            <a href="#welcome" className="menu-link" id="home" onClick={handleClick} aria-label="home">
                <span className="link-icon"><FaHome /></span>
                Home
            </a>
        </li>
        <li>
            <a href="#productsSec" className="menu-link" id="ourServices" onClick={handleClick} aria-label="our services">
                <span className="link-icon"><BiDrink /></span>
                Our services
                
            </a>
        </li>
        <li>
            <a href="#aboutUsSec" className="menu-link" id="aboutUs" onClick={handleClick} aria-label="about us">
                <span className="link-icon"><IoIosPeople /></span>
                About us
                
            </a>
        </li>
        <li>
            <a href="#reviewsSec" className="menu-link" id="reviews" onClick={handleClick} aria-label="reviews">
                <span className="link-icon"><MdRateReview /></span>
                Reviews
            </a>
        </li>
        <li>
            <a href="#contactSec" className="menu-link" id="contactUs" onClick={handleClick} aria-label="contact us">
                <span className="link-icon"><MdConnectWithoutContact /></span>
                Contact us
            </a>
        </li>
    </ul>
  )
}
