'use strict';

import React from 'react';

const Mydietview = React.createClass({
    render: function() {
        return (
            <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
                <div className="card">
                    <div className="card__image" style={{backgroundImage: "url(" + this.props.nutrition.image + ")"}}></div>
                    <div className="card__content">
                        <p className="card__name">{this.props.nutrition.name}</p>
                        <div className="pure-g">
                            <div className="card__nutrition">
                                <p>Name</p>
                                <p>Calories</p>
                                <p>Protiens</p>
                                <p>Carbs</p>
                                <p>Fat</p>
                            </div>
                            <div className="card__nutrition pad__lft">
                                <p>Norms</p>
                                <p>{Math.ceil(this.props.nutrition.calories.amount)}g</p>
                                <p>{Math.ceil(this.props.nutrition.protein.amount)}g</p>
                                <p>{Math.ceil(this.props.nutrition.carbs.amount)}g</p>
                                <p>{Math.ceil(this.props.nutrition.fat.amount)}g</p>
                            </div>
                            <div className="card__nutrition pad__lft">
                                <p>Percent</p>
                                <p>{Math.ceil(this.props.nutrition.calories.percent)} %</p>
                                <p>{Math.ceil(this.props.nutrition.protein.percent)} %</p>
                                <p>{Math.ceil(this.props.nutrition.carbs.percent)} %</p>
                                <p>{Math.ceil(this.props.nutrition.fat.percent)} %</p>
                            </div>
                        </div>
                        <p className="card__button dietbtn" onClick={this.props.removecard(this.props.nutrition.id)} >Remove</p>                 
                    </div>
                </div>
            </div>
        );
    }
});

export default Mydietview;