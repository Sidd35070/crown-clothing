import { addItemToCart } from "../utils/addItemToCart.util";

const INITIAL_STATE = {
    hidden:true,
    count:0,
    cartItems:[]
}

export const cartReducer =(state=INITIAL_STATE, action) => {
    console.log(state)
    if(action.type === "SHOW_HIDE"){
        return{
                ...state,
                hidden: !state.hidden
        }
    }
    else if(action.type === "ADD"){
        console.log(action.payload);
        return{
                ...state,
                count:state.count+1,
                cartItems:addItemToCart(state.cartItems, action.payload)
        }
    }
    else
        return state;
}