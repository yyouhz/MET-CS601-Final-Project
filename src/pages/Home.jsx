// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="selfie">
        <div className="photo-placeholder">
          <img className='photo-selfie' src='./images/myphoto.jpg' alt='My selfie'></img>
        </div>
      </div>
      <div className="selfie-intro">
        <h2>Hello!</h2>
        <h3>A Bit About Me</h3>
        <p>
          My name is Yuhao Wu (吴宇昊). I'm currently pursuing a Master's degree in Software
          Development at Boston University and growing into a junior software developer.
          My background is a bit unique — I have a bachelor's degree in Fine Arts from China, earned my first
          master's degree in Management in the UK, and worked in the IT industry in Beijing for four years.
        </p>
        <p>
          Two years ago, I came to the U.S. and now I live in sunny San Diego, California.<br />
          What comes next? I don't know yet — the journey is still unfolding.
        </p>
        <h4>- Click the button below to know more about me. -</h4>
        <div className="button-container">
          <Link to="/cv" className="button-cv">CV</Link>
          <Link to="/projects" className="button-project">Projects</Link>
          <Link to="/contact" className="button-contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;