import React from 'react';
import Auxi from '../../../hoc/Auxi'

const orderSummary=(props)=>{
    const ingredientList=[];
     for(let key in props.ingredients){
        ingredientList.push(
            <li key={key}>
            <span style={{textTransform:'capitalize'}}>
            {key}
            </span>:
            {props.ingredients[key]}
            </li>)
    };

    return(
        <Auxi>
            <h3>Your Order</h3>
            <p>Here is your customized delicious burger</p>
            <ul>
                {ingredientList}
            </ul>
            <p>Continue to checkout?</p>

        </Auxi>

    )
}
export default orderSummary;