import React from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button'

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
            <p>Total Price:<strong>{props.totalPrice}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>

        </Auxi>

    )
}
export default orderSummary;