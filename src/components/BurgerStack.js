import React from 'react';
import Ingredient from './Ingredient';


const BurgerStack = (props) => {
    
    let burgerBits = props.ingredients.map(ingredient => <li><IngredientList ingredient={ingredient} /></li>)

    return (
        <div>
            <h2>BURGER STACK</h2>
            <ul className='burger'>
                {burgerBits}
            </ul>
        </div>
    )
    
}

export default BurgerStack