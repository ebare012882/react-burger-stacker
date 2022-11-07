// this displays an individual ingredient
import React from 'react';

// this component recieves ONE ingredient as a prop and displays said ingredient
const Ingredient = (props) => {
    
    const { name, color } = props.ingredient

    return (
        <p
            style={{backgroundColor: color}}
            id={props.itemKey}
            onClick={props.clickFunc}
        >
            {name}
        </p>
    )
    
}
export default Ingredient