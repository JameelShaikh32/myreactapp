import * as React from 'react';
import Link from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="col">
        <Link to={'/'}>
          <h2>Logo</h2>
        </Link>
        <p id="company-info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="col">
        <h3>Company</h3>
        <ul className="company-links">
          <li>
            <Link to={''}>Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link to={''}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={''}>Support</Link>
          </li>
        </ul>
      </div>

      <div className="col">
        <h3>Quick Links</h3>
        <ul className="quick-links">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={''}>Services</Link>
          </li>
          <li>
            <Link to={''}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
