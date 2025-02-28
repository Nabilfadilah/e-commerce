import React from "react";
import "./NewsLetter.css";
import {IoMdSend} from "react-icons/io";

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <h5 className="newsletter-title">Surat Berita</h5>
      <div className="newsletter-desc">
        Apa pembaruan yang tidak ingin Anda lewatkan
      </div>

      <div className="input-container">
        <input className="newsletter-input" placeholder="Your Email" />
        <button className="newsletter-button">
          <IoMdSend className="icon" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
