'use strict';

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Navbar from './components/navbar/Navbar.jsx';
import { Cardhome, Carddiet } from './components/cardscontainer/cardscontainer.jsx';
import Notfound from './components/notfound/Notfound.jsx';


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
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Cardhome} />
            <Route path="/mydiet" component={Carddiet} />
            <Route path="*" component={Notfound} />
        </Route>
    </Router>
), document.getElementById('app'));