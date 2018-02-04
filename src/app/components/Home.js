import React from "react";
import {Link}       from "react-router";
import {connect} from 'react-redux';

export class Home extends React.Component {
     
    render() {
        console.log("redux test", this.props.test)
        return (
            <div>
                <h3>Home Component</h3>
                <button><Link to={"/"} activeClassName={"active"}> go to Root</Link></button>
            </div>
        );
    }
}



const mapStateToProps = (state,props) => ({
	test:state.test

});

export default connect(mapStateToProps)(Home);
