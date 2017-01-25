'use strict';

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Navbar from './components/navbar/Navbar.jsx';
import Card from './components/card/Card.jsx';

const Layout = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
});

render((
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Card} />
        </Route>
    </Router>
), document.getElementById('app'));