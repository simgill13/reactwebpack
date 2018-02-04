import React from "react";
import {Link}       from "react-router";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home Component</h3>
                <button><Link to={"/"} activeClassName={"active"}> go to Root</Link></button>
            </div>
        );
    }
}