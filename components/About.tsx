import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/about.css';

const About = () => {
  return (
    <div className="about">
      <div className="page-title">
        <h1>About</h1>
      </div>
      <div className="about-info">
        <div className="about-col1">
          <img src="https://bit.ly/3LUGD9J" alt="user photo" />
        </div>
        <div className="about-col2">
          <h2>I'm Unknown</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            cupiditate ab accusamus doloremque, ex enim autem voluptates
            necessitatibus est, ullam nesciunt ducimus eligendi? Exercitationem
            veritatis nisi obcaecati enim, expedita nostrum nam iste iusto.
            Autem deserunt magnam, quasi voluptates repudiandae consequatur
            obcaecati sit reprehenderit vel architecto illo modi, optio, esse
            doloribus.
          </p>
          <div className="social-links">
            <Link to={'#'}>
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to={'#'}>
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

export default About;
