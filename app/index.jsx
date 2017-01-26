'use strict';

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Navbar from './components/navbar/Navbar.jsx';
import { Cardhome, Carddiet } from './components/cardscontainer/cardscontainer.jsx';

const Layout = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar />
                <div className="containercard">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

render((
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Cardhome} />
            <Route path="/mydiet" component={Carddiet} />

        </Route>
    </Router>
), document.getElementById('app'));