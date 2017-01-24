'use strict';

import React from 'react';
import Cardview from './cardview.jsx';
import recipe from '../../data/recipe.js';

const Card = React.createClass({
    createCard: function(data) {
        return <Cardview name={data.name} image={data.image} />;
    },
    createCards: function(recipe) {
        return recipe.map(this.createCard);
    },
    render: function() {
        return (
            <div className="pure-g containercard">
                {this.createCards(recipe)}
            </div>
        );
    }
});

export default Card;