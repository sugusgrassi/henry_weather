import React from "react";
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
    return (
      <div className="aboutContainer">
        <div className="aboutCard">
        <Link to="/">
        <div id="closeIcon" className="row">
        <button className="xbutton">X</button>
        </div>
        </Link>
          <h2>About</h2>
          <p ><strong>Hi! I'm Agustín Grassi</strong>. I'm a graphic designer and a web developer, <strong>and this is my ideal weather app!</strong> Illustrative and iconic, depending on whether it's daytime or nighttime, the background changes. This is a project that I developed at Henry, a coding bootcamp in Latin America</p>
        </div>
      </div>
    );
  };