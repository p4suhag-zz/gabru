'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router';

const Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar navbar--grey">
                <div className="navbar__item">
                    <p>Gabru</p>
                </div>
                <div className="navbar__item">
                    <p><Link to="/mydiet">My Diet</Link></p>
                </div>
            </div>    
        );
    }
});

export default Navbar;