import React from 'react';
import "./homepage.css";
import logo from "./logo.png";
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";

function Homepage(){
    return(
        <div className="container">
            <div className="homepage-container">
                <div className="homepage-navbar-container">
                    <ul className="navbar-list">
                        <div className="navbar-list-logo">
                            <img src={logo} width="213px" height="63px"/>
                        </div>
                        <li>
                            <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>login</Link>
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
        </div>
        
    );
}

export default Homepage;