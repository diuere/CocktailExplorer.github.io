import React from 'react';
import { Link } from 'react-router-dom';

export default function SecNavBar() {
  return (
    <nav className="sec-navbar navbar">
      <Link to="/" className="logo" aria-label="home link">
        Coding <span>Addict</span>  
      </Link>
      <div className="homeBtn-wrapper">
        <Link to="/" className="homeBtn" aria-label="home link">home</Link>
      </div>
    </nav>
  )
}
