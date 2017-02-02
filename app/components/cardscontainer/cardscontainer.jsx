'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card/Card.jsx';
import Mydiet from './mydiet/Mydiet.jsx';
import nutrition from '../../data/nutrition.js';

const MyDietItem = JSON.parse(localStorage.getItem('MyDietItem')) || {};

const Cardhome = React.createClass({
    handleAddDiet: function(info) {
        MyDietItem[info.recipeid] = {
            'id': info.recipeid,
            'name': info.name,
            'image': info.image,
            'calories': nutrition[info.recipeid].calories,
            'protein': nutrition[info.recipeid].protein,
            'carbs': nutrition[info.recipeid].carbs,
            'fat': nutrition[info.recipeid].fat
        }
        localStorage.setItem('MyDietItem', JSON.stringify(MyDietItem));
        // var oReq = new XMLHttpRequest();
        // oReq.onload = function(e) {
        //   var infodata = oReq.response; // not responseText
        //   // console.log(infodata);
        //   MyDietItem[info.recipeid] = {
        //     'id': info.recipeid,
        //     'name': info.name,
        //     'image': info.image,
        //     'calories': infodata[1],
        //     'protein': infodata[6],
        //     'carbs': infodata[10],
        //     'fat': infodata[11]
        // }

        // // console.log(MyDietItem);
        // localStorage.setItem('MyDietItem', JSON.stringify(MyDietItem));
        // }
        // oReq.open('GET', 'http://api.cs50.net/food/3/facts?key=64b1434ce52fd6e5ee55f01f7d0ae3f0&recipe=' + info.recipeid + '&portion=1&output=json');
        // oReq.responseType = "json";
        // oReq.send(); 
    },
    render: function() {
        return (
            <Card handleAddDiet={this.handleAddDiet} />
        );
    }
});

const Carddiet = React.createClass({
    getInitialState: function() {
        return MyDietItem
    },
    removeCard: function(recipeid) {
        delete MyDietItem[recipeid];
        localStorage.setItem('MyDietItem', JSON.stringify(MyDietItem));
        this.replaceState(MyDietItem);
    },
    render: function() {
        return (
            <Mydiet dietItem={this.state} removecard={this.removeCard} />
        );
    }
});


export { Cardhome, Carddiet };
