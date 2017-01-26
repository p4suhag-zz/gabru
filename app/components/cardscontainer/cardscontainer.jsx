'use strict';

import React from 'react';
import axios from 'axios';
import Card from './card/Card.jsx';
import Mydiet from './mydiet/Mydiet.jsx';

const MyDietItem = [];

const Cardhome = React.createClass({
    handleAddDiet: function(info) {
        // console.log(info);
        var apiurl = 'http://api.cs50.net/food/3/facts?key=64b1434ce52fd6e5ee55f01f7d0ae3f0';
        var proxyurl = 'https://cors-anywhere.herokuapp.com/';
        var finalurl = proxyurl + apiurl;
        axios.get(finalurl, {
            params: {
              recipe: info.recipeid,
              output: 'json'
            },
            auth: {
                username: 'p4suhag',
                password: 'gabrusuhag'
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        MyDietItem.push({
            'id': info.recipeid,
            'name': info.name,
            'image': info.image
        });
        // console.log(MyDietItem);
    },
    render: function() {
        return (
            <Card handleAddDiet={this.handleAddDiet} />
        );
    }
});



export default Cardhome;