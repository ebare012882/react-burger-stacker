import React from 'react';

const ClearBurger = (props) => {
    console.log(props)
    return <button onClick={props.clearBurger} className='clear-btn'>Clear Burger</button>
}

export default ClearBurger 