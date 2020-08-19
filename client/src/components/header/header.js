import React from 'react';

const Header = (props)=> (
    <nav style={{background: "#2E4C13", color: ""}} className={"navbar navbar-default sticky-top"}>
        <div className={"container"}>
            <div>Link and his Friends</div>
            <div>score: {props.score}</div>
            <div>Top score: {props.topScore}</div>

        </div>
    </nav>
);

export default Header;