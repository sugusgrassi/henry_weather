import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
import '../containers/App.css';

var style = {
    backgroundImage: "linear-gradient(to right, #2f6fa0, #47aefe)",
    borderTop: "1px solid #E7E7E7",
    textAlign: "left",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    minHeight: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

export default function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <span className="footertext">Made with ♡ by <a href="https://sugusgrassi.netlify.app/" target="blank" className="footerlinks">@sugusgrassi</a></span>
                <Link to="/henry_weather/about">
                <span className=" footerlinks">🌞 About</span>
                </Link>
            </div>
        </div>
    )
}

{/* <div>
<div className="phantom" />
<div className="footer" >
   hola
</div> */}