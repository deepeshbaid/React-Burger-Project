import React,{Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES={
            salad:10,
            bacon:20,
            cheese:25,
            meat:40
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:30
    }
    
    addIngredientHandler=(type)=>{
            const oldCount=this.state.ingredients[type];
            const updatedCount=oldCount+1;
            const updatedIngredients={...this.state.ingredients};
            updatedIngredients[type]=updatedCount;
            const priceAddition=INGREDIENT_PRICES[type];
            const newPrice=this.state.totalPrice+priceAddition;
            this.setState({
                totalPrice:newPrice,
                ingredients:updatedIngredients
             })
        }   
    removeIngredientHandler=(type)=>{
            const oldCount=this.state.ingredients[type];
            const updatedCount=oldCount-1;
            if(updatedCount<0)
            {
                return;
            }
            const updatedIngredients={...this.state.ingredients};
            updatedIngredients[type]=updatedCount;
            const priceSubtraction=INGREDIENT_PRICES[type];
            const newPrice=this.state.totalPrice-priceSubtraction;
            this.setState({
                totalPrice:newPrice,
                ingredients:updatedIngredients
             })
    }


    render(){
       const disabledInfo={...this.state.ingredients};
       for(let key in disabledInfo)
       {
           disabledInfo[key]= disabledInfo[key]<=0;
       }

        return(
            <Auxi>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                price={this.state.totalPrice}
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}/>
            </Auxi>
        );
    }
}

export default BurgerBuilder;
