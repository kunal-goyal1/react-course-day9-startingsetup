import React from "react";

import "./Navigation.css";

const Navigation = (props) => {
    return (
        <nav className="nav">
            <ul>
                {props.isLoggedIn && (
                    <li>
                        <a href="/">Courses</a>
                    </li>
                )}
                {props.isLoggedIn && (
                    <li>
                        <a href="/">Problems</a>
                    </li>
                )}
                {props.isLoggedIn && (
                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
