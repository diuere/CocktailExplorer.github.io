import React, { useState, useEffect } from 'react';
import NavbarLinks from "./NavbarLinks";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import SmContact from './SmContact';

const activateMenu = (toggled) => { // function that toggles the hamburger menu
  const overlay = document.querySelector(".overlay");
  const hamburgerLinksWrapper = document.querySelector(".hamburger-links-wrapper");

  const transform =  toggled ? "transform: translate(0);" : "transform: translate(-16rem);" // css transform property for the hamburger-links-wrapper
  
  const visibility = toggled ? ` 
    visibility: visible;
    opacity: 1;
  ` : `
    visibility: hidden;
    opacity: 0;
  ` // css visibility property for the menu overlay
  
  hamburgerLinksWrapper.style.cssText = transform;
  overlay.style.cssText = visibility;
}

export default function HamburgerMenu() {
  const [toggled, setToggled] = useState(false);  // will determine wether the hamburger menu wrapper is activated or not.

  useEffect(() => activateMenu(toggled), [toggled]);
  
  // functions that will trigger the menu open and close events
  const openMenu = () => setToggled(prevState => !prevState);
  const closeMenu = () => setToggled(prevState => !prevState);
  
  return (
    <div className="hamburger-menu-wrapper">
      <div className="open-hamburger-menu" onClick={openMenu}>
        <GiHamburgerMenu/>
      </div>
      <div className="overlay">
        <div className="hamburger-links-wrapper">
          <div className="menu-header">
            <a href="#welcome" className="logo">
              Coding <span>Addict</span>
            </a>
            <div className="close-hamburger-menu" onClick={closeMenu}>
              <MdClose />
            </div>
          </div>
          <NavbarLinks func={closeMenu}/>
          <SmContact func={closeMenu}/>
        </div>
      </div>
    </div>
  )
}
