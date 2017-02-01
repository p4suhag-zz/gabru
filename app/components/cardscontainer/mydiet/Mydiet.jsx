'use strict';

import React from 'react';
import Mydietview from './mydietview.jsx';


const Mydiet = React.createClass({
    createCard: function(data) {
        // console.log(data);
        return <Mydietview nutrition={data} key={data.id} removecard={this.removeCard} />;
    },
    createCards: function(items) {
        // console.log(items);
        var itemsbox = [];
        for(var item in items) {
            // console.log(item);
            itemsbox.push(this.createCard(items[item]));
        };
        return itemsbox;
    },
    removeCard: function(recipeid) {
        var that = this.props.removecard;
        return function() {
            that(recipeid);
        };
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