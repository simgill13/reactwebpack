import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {Provider} from 'react-redux';
import store from './store';
import {Root} from "./components/Root";
import {Home} from "./components/Home";


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path={"/"} component={Root} >
                        {/* <IndexRoute component={Home} />
                        <Route path={"user/:id"} component={User} />
                        <Route path={"home"} component={Home} /> */}
                    </Route>
                    <Route path={"home-single"} component={Home}/>
                </Router>
            </Provider>
        );
    }
}

render(<App />, window.document.getElementById('app'));