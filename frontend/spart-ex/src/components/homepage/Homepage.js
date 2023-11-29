import React from 'react';
import "./homepage.css";
import logo from "./logo.png";

function Homepage(){
    return(
        <div className="homepage-container">
            <div className="homepage-navbar-container">
                <ul className="navbar-list">
                    <div className="navbar-list-logo">
                        <img src={logo} width="213px" height="63px"/>
                    </div>
                    <li>
                        <p>login</p>
                    </li>
                </ul>
            </div>
            <div className="cta-container">
                <div className="cta-quote">
                    <p>the exclusive hub for</p>
                    <p><span className="s-to-s-highlight">Spartan-to-Spartan</span> shopping</p>
                </div>
                <div className="cta-made-by-container">
                    <p>Made by <strong>Spartans</strong> for <strong>Spartans</strong>.</p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;