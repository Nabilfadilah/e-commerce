import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import {footerLinks} from "../../data";
import {FaLocationDot} from "react-icons/fa6";
import {IoMdMail} from "react-icons/io";
import payment from "../../assets/payment.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">NgodingBil</h1>
        <p className="footer-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
          quibusdam error veritatis consequatur earum delectu in?
        </p>

        <div className="social-container">
          <div className="social-icon" style={{backgroundColor: "#3b5999"}}>
            <FaFacebook className="icon" />
          </div>

          <div className="social-icon" style={{backgroundColor: "#e44059"}}>
            <FaInstagram className="icon" />
          </div>

          <div className="social-icon" style={{backgroundColor: "#55acee"}}>
            <FaTwitter className="icon" />
          </div>

          <div className="social-icon" style={{backgroundColor: "#e60023"}}>
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-center">
        <h3>Useful links</h3>
        <ul className="footer-list">
          {footerLinks.map((link) => (
            <li key={link.id} className="footer-list-item">
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-item">
          <FaLocationDot style={{marginRight: "10px"}} /> No. 23, Bandung
        </div>

        <div className="contact-item">
          <FaPhoneAlt style={{marginRight: "10px"}} /> 0818292033929
        </div>

        <div className="contact-item">
          <IoMdMail style={{marginRight: "10px"}} /> Email@gmail.com
        </div>

        <img className="payment" alt="Payment" src={payment} />
      </div>
    </div>
  );
};

export default Footer;
