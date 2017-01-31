'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card/Card.jsx';
import Mydiet from './mydiet/Mydiet.jsx';

const MyDietItem = {};

const Cardhome = React.createClass({
    getInitialState: function() {
        return {
            status: true,
            text: 'Add to Diet'
        }
    },
    handleAddDiet: function(info) {
        // console.log(info);

        var oReq = new XMLHttpRequest();
        oReq.onload = function(e) {
          var infodata = oReq.response; // not responseText
          // console.log(infodata);
          MyDietItem[info.recipeid] = {
            'id': info.recipeid,
            'name': info.name,
            'image': info.image,
            'calories': infodata[1],
            'protein': infodata[6],
            'carbs': infodata[10],
            'fat': infodata[11]
        }
        }
        oReq.open('GET', 'http://api.cs50.net/food/3/facts?key=64b1434ce52fd6e5ee55f01f7d0ae3f0&recipe=' + info.recipeid + '&portion=1&output=json');
        oReq.responseType = "json";
        oReq.send();
        
    },
    handleRemoveDiet: function(recipeid) {
        delete MyDietItem[recipeid];
    },
    render: function() {
        return (
            <Card handleAddDiet={this.handleAddDiet} handleRemoveDiet={this.handleRemoveDiet} text={this.state.text} />
        );
    }
});

const Carddiet = React.createClass({
    getInitialState: function() {
        return MyDietItem
    },
    removeCard: function(recipeid) {
        delete MyDietItem[recipeid];
        this.replaceState(MyDietItem);
    },
    render: function() {
        return (
            <Mydiet dietItem={this.state} removecard={this.removeCard} />
        );
    }
});


export { Cardhome, Carddiet };
