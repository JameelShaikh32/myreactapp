import * as React from 'react';
import '../css/contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="page-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-form">
        <div className="contact-col1">
          <img src="https://bit.ly/3LUGD9J" alt="user photo" />
        </div>
        <div className="contact-col2">
          <form>
            <h2>Get In Touch With Us</h2>
            <div className="input-box">
              <input type="text" required />
              <span className="placeholder">Name</span>
            </div>
            <div className="input-box">
              <input type="email" required />
              <span className="placeholder">Email</span>
            </div>
            <div className="input-box">
              <input type="phone" required />
              <span className="placeholder">Phone</span>
            </div>
            <div className="input-box">
              <textarea />
              <span className="placeholder">Address</span>
            </div>
            <input type="submit" id="submitBtn" name="Submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
