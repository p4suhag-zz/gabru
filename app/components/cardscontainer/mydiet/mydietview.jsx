'use strict';

import React from 'react';

const Mydietview = React.createClass({
    render: function() {
        return (
            <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
                <div className="card">
                    <p className="card__name">{this.props.name}</p>
                    <div className="card__image" style={{backgroundImage: "url(" + this.props.image + ")"}}></div>
                    
                    <div className="card__content">
                        <p>Calories<span>28%</span></p>
                        <p>Fat<span>18%</span></p>
                        <p>Vitamin<span>48%</span></p>
                        <p>Carbs<span>288</span></p>                       
                    </div>
                </div>
            </div>
        );
    }
});

export default Mydietview;