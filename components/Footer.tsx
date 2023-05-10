import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer-row">
        <div className="col">
          <Link to={'/'}>
            <h2>Logo</h2>
          </Link>
          <p id="company-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="col">
          <h3>Company</h3>
          <ul className="company-links">
            <li>
              <Link to={''}>Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to={'/privacypolicy'}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={'/contact'}>Support</Link>
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
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-row copyright">
        <div className="col">
          <p>
            &copy; {year} <Link to={'/'}>company-name.com</Link>
          </p>
        </div>
        <div className="col">
          <div className="footer-social-links">
            <Link to={'https://www.linkedin.com/in/dev-jameel'}>
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to={'https://www.github.com/JameelShaikh32'}>
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link to={'#'}>
              <i className="fa-brands fa-square-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
