'use strict';

import React from 'react';
import Mydietview from './mydietview.jsx';

const Mydiet = React.createClass({
    createCard: function(data) {
        // console.log('mydietview');
        return <Mydietview name={data.name} image={data.image} recipeid={data.id} key={data.id} />;
    },
    createCards: function(items) {
        console.log(items);
        var itemsbox = [];
        for(var item in items) {
            // console.log(item);
            itemsbox.push(this.createCard(items[item]));
        };
        return itemsbox;
    },
    render: function() {
        var dietItem = this.props.dietItem;
        return (
            <div className="pure-g">
                {this.createCards(dietItem)}
            </div>
        );
    }
});

export default Mydiet;