import React, { useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import NavbarLinks from './NavbarLinks';

const findSection = () => {
  // selection all the sections and menuLinks that exist 
  const menuLink = document.querySelectorAll(".menu-link");
  const section = document.querySelectorAll(".section");
  
  for(let i = 0; i < section.length; i++) {
    // passing each section and menuLink as arguments to the observing function, therefore creating an intersectionObserver for each pair (section and menuLink)
    observing(section[i], menuLink[i]);
  }
}

const observing = (obElem, modElem) => {
  // the observing function gets an element to observe and an element to modify.
  const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        modElem.classList.add("section-position");
      } else {
        modElem.classList.remove("section-position");
      }
    })
  }, {
    threshold: .5,
  })
  sectionObserver.observe(obElem);
}

export default function MainNavbar() {
  useEffect(() => { // activating an intersectionObserver
    findSection();
  }, []);

  return (
    <nav className="navbar desktop-navbar">
      <a href="#welcome" className="logo">
        Coding <span>Addict</span>
      </a>
      <div className="desktop-links-wrapper">
        <NavbarLinks />
      </div>
      <HamburgerMenu />
    </nav>
  )
}
