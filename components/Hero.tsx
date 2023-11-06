import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/hero.css';

const Hero = () => {
  return (
    <div className="hero" transition-style="in:circle:top-right">
      <h1>Hey, I'm Unknown</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
        cupiditate ab accusamus doloremque
      </p>
      <Link to={'/about'}>
        <button className="aboutBtn">About Me</button>
      </Link>
    </div>
  );
};

export default Hero;
