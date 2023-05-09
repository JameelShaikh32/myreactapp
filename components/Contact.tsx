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
            <div className="input-box">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Phone" />
              <textarea placeholder="Address" />
            </div>
            <input type="submit" id="submitBtn" name="Submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
