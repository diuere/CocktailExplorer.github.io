import React from 'react';
import SmContact from './SmContact';
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Rollback from './Rollback';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer className="main-footer">
        <Rollback />
        <div className="container">
          <div className="footer-info-wrapper">
            <div className="abt-footer-wrapper">
              <h4 className="footer-title">about us</h4>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, velit perspiciatis vitae amet non nam?</p>
                <SmContact />
              </div>
            </div>
            <div className="address-footer-wrapper">
              <h4 className="footer-title">our address</h4>
              <div>
                <p className="address-footer"><span className="address-footer-icons"><MdLocationOn /></span> Lorem ipsum dolor sit amet consectetur.</p>
                <p className="number-footer"><span className="address-footer-icons"><BsTelephoneFill /></span> 3425263786453</p>
                <p className="email-footer"><span className="address-footer-icons"><FaEnvelope /></span> Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="contact-footer-wrapper">
              <h4 className="footer-title">contact us</h4>
              <ContactForm />
            </div>
          </div>
          <div className="copyright-wrapper">
            {/* <p>Copyright &copy; 2022 Diuere Santos. All right reserved.</p> */}
            <p>Design from John Smilga</p>
          </div>
        </div>
    </footer>
  )
}
