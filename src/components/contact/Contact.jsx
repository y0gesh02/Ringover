import React from "react";
import "./contact.css";
import facebook from "../../assets/facebook@2x.png";
import insta from "../../assets/insta@2x.png";
import twitter from "../../assets/twitter@2x.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="card">
        <h2 className="contact__head">REACH US AT</h2>
        <h3 className="contact__mail">support@kicksup.com</h3>
        <p className="contact__content">for any technical support</p>
        <h3 className="contact__mail">infot@kicksup.com</h3>
        <p className="contact__content">for more information</p>
        <h3 className="contact__mail">feedback@kicksup.com</h3>
        <p className="contact__content">to send your feedback</p>
        <h3 className="contact__mail">jobs@kicksup.com</h3>
        <p className="contact__content">to work with us</p>
      </div>
      <p className="btm">stay in touch</p>
      <div className="contact__socials">
        <img src={twitter} alt="twitter" className="contact__socials_img" />
        <img src={insta} alt="insta" className="contact__socials_img" />
        <img src={facebook} alt="facebook" className="contact__socials_img" />
      </div>
    </div>
  );
};

export default Contact;
