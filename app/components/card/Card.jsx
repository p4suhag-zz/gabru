'use strict';

import React from 'react';

const Card = React.createClass({
    render: function() {
        return (
            <div className="card">
                <div className="pure-g">
                    <div className="pure-u-2-5">
                        <div className="card__dish">
                            <div className="card__image"></div>
                            <div className="card__bottom">
                                <p>Dish Name</p>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-3-5">
                        <div className="card__nutrition">
                            <ul className="card__list">
                                <li className="card__item">
                                    <p className="card__itemname">Calories</p>
                                    <p>235</p>
                                </li>
                                <li className="card__item">
                                    <p className="card__itemname">Protein</p>
                                    <p>25%</p>
                                </li>
                                <li className="card__item">
                                    <p className="card__itemname">Fat</p>
                                    <p>13%</p>
                                </li>
                                <li className="card__item">
                                    <p className="card__itemname">Carbs</p>
                                    <p>380</p>
                                </li>
                            </ul>
                            <div className="card__bottom">
                                <p className="card__btn">+ Add to Diet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Card;