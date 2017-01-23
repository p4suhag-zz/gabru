'use strict';

import React from 'react';
import {render} from 'react-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Card from './components/card/Card.jsx';

const Layout = React.createClass({
    render: function() {
        return (
            <div>
                < Navbar />
                < Card />
            </div>
        );
    }
});

render(< Layout /> , document.getElementById('app'));