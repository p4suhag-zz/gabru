'use strict';

import React from 'react';

const Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar navbar--grey">
                <div className="navbar__item">
                    <p>Gabru</p>
                </div>
                <div className="navbar__item">
                    <p>My Diet</p>
                </div>
            </div>    
        );
    }
});

export default Navbar;