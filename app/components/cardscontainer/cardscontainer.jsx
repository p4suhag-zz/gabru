'use strict';

import React from 'react';
import axios from 'axios';
import Card from './card/Card.jsx';
import Mydiet from './mydiet/Mydiet.jsx';

const MyDietItem = [];

const Cardhome = React.createClass({
    handleAddDiet: function(info) {
        console.log(info);
        MyDietItem.push({
            'id': info.recipeid,
            'name': info.name,
            'image': info.image
        });
        console.log(MyDietItem);
    },
    render: function() {
        return (
            <Card handleAddDiet={this.handleAddDiet} />
        );
    }
});



export default Cardhome;