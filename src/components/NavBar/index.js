import React from "react";
import "./style.css";
function NavBar(props) {
    return (
        <nav className="navbar sticky-top navbar-expand">
        <ul className="navbar-nav">
            <li className="nav-item">
                <h1>Link and Zelda's Friends;</h1><span className="sr-only nav-link title"></span>
            </li>
            <li className="nav-item">
                <h4 className={`nav-link ${props.colorStyle}`}>{props.mid}</h4>
            </li>
            <li className="nav-item">
                <h4 className="nav-link">Score: {props.score} | Top Score: {props.highScore}</h4>
            </li>
        </ul>
        {props.children}
    </nav>
)}
export default NavBar;
    )
}