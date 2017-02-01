'use strict';

import React from 'react';

const Cardview = React.createClass({
    render: function() {
        return (
            <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
                <div className="card">
                    <div className="card__image" style={{backgroundImage: "url(" + this.props.image + ")"}}></div>
                    <div className="card__content">
                        <p className="card__name">{this.props.name}</p>
                        <p className="card__button" onClick={this.props.callAddDiet(this.props)} >Add to Diet</p>
                    </div>
                </div>
            </div>
        );
    }
});

export default Cardview;