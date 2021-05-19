import { addItemToCart, reduceItem } from "../utils/addItemToCart.util";

const INITIAL_STATE = {
    hidden:true, 
    cartItems:[]
}

export const cartReducer =(state=INITIAL_STATE, action) => {
    // console.log(state)
    if(action.type === "SHOW_HIDE"){
        return{
                ...state,
                hidden: !state.hidden
        }
    }
    else if(action.type === "ADD"){
        console.log("yes")
        console.log(action.payload);
        return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
        }
    }
    else if(action.type === "CLEAR"){
        return {
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }
    }
    else if(action.type === "REDUCE"){
        return {
            ...state,
            cartItems: reduceItem(state.cartItems, action.payload)
        }
    }
    else
        return state;
}

