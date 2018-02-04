import React        from "react";
import {Link}       from "react-router";
import styles       from "../../../src/app.css"



export class Root extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="">
                <h3>Root Component</h3>
                <button><Link to={"home-single"} activeClassName={"active"}>go to home</Link></button>
            </div>
        );
    }
}