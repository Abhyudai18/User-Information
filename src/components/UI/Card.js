import React from 'react';

import classes from './Card.module.css'

const Card = props => {
    return (
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    );
};

export default Card;

//since card is our custom component we have to do it like this so that it knows what to do with the potential coming css classes via props