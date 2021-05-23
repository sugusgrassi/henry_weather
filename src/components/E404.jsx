import React from 'react';
import { Link } from 'react-router-dom';


export default function E404() {
    return (
      <div>
        <div className="aboutContainer">
        <div className="aboutCard">
        <Link to="/">
        <div id="closeIcon" className="row">
        <button className="xbutton">X</button>
        </div>
        </Link>
          <h2>Error 404</h2>
          <p >Sorry, we still don't have access to the forecast of <strong>The Lost World</strong></p>
        </div>
      </div>
      </div>
    );
  };