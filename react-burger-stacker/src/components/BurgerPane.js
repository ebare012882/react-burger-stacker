// this is where we're going to display the burger that we are stacking. 
// items clicked in the ingredient list will be added to this component
// since burger pane needs to display ingredients components, we'll import those as well

import React from 'react';
import ClearBurger from './ClearBurger';
import Ingredient from './Ingredient';

const BurgerPane = (props) => {
    // console.log(props)
    let burgerbits = props.burgerIngredients.map((ing, i) => (
        // the virtual DOM NEEDS a KEY to identify this
        <li key={i}> 
            <Ingredient 
                itemkey={i}
                ingredient={ing}
                clickFunc={props.remove}
            />
        </li>
    ))
    return (
        <section className='pane'>
            <h3>BURGER PANE</h3>
            <ul>
                {burgerbits}
            </ul>
            <ClearBurger clearBurger={props.clearBurger} />
        </section>
    )
    
}
 
export default BurgerPane

