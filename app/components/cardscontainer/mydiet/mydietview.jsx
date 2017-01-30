'use strict';

import React from 'react';

const Mydietview = React.createClass({
    render: function() {
        return (
            <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-3" id={this.props.nutrition.id}>
                <div className="card">
                    <div className="card__image" style={{backgroundImage: "url(" + this.props.nutrition.image + ")"}}></div>
                    <div className="card__content">
                        <p className="card__name">{this.props.nutrition.name}</p>
                        <div className="pure-g">
                            <div className="pure-u-1-3">
                                <p>Name</p>
                                <p>Calories</p>
                                <p>Protiens</p>
                                <p>Carbs</p>
                                <p>Fat</p>
                            </div>
                            <div className="pure-u-1-3">
                                <p>Norms</p>
                                <p>{this.props.nutrition.calories.amount}</p>
                                <p>{this.props.nutrition.protein.amount}</p>
                                <p>{this.props.nutrition.carbs.amount}</p>
                                <p>{this.props.nutrition.fat.amount}</p>
                            </div>
                            <div className="pure-u-1-3">
                                <p>Percent</p>
                                <p>{this.props.nutrition.calories.percent}</p>
                                <p>{this.props.nutrition.protein.percent}</p>
                                <p>{this.props.nutrition.carbs.percent}</p>
                                <p>{this.props.nutrition.fat.percent}</p>
                            </div>
                        </div>
                        <p className="card__button" onClick={this.props.removecard(this.props.nutrition.id)} >Remove</p>                 
                    </div>
                </div>
            </div>
        );
    }
});

export default Mydietview;