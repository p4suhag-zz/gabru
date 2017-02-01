'use strict';

import React from 'react';
import Cardview from './cardview.jsx';
import recipe from '../../../data/recipe.js';

const Card = React.createClass({
    callAddDiet: function(info) {
        var that = this.props.handleAddDiet;
        return function() {
            that(info);
        } 
    },
    createCard: function(data) {
        return <Cardview name={data.name} image={data.image} recipeid={data.id} key={data.id} callAddDiet={this.callAddDiet} />;
    },
    createCards: function(recipe) {
        return recipe.map(this.createCard);
    },
    render: function() {
        return (
            <div className="pure-g">
                {this.createCards(recipe)}
            </div>
        );
    }
});

export default Card;