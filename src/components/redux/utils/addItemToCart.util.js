export const addItemToCart = (cartItems, itemToAdd) => {
    console.log("ohh yeah")
    const exist = cartItems.find(
        cardItem => cardItem.id === itemToAdd.id
    );

    if(exist){
        console.log("ohh yeah")
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity+1 } :
                cartItem
        )
    }
    else
        return [...cartItems, {...itemToAdd, quantity:1} ]
}
export const reduceItem = (cartItems, itemToReduce) => {
    // const exist = cartItems.find(
    //     cardItem => cardItem.id === itemToReduce.id
    // );
    
    if(itemToReduce.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToReduce.id)
    }
    return cartItems.map(cartItem => 
        cartItem.id === itemToReduce.id ?
            { ...cartItem, quantity: cartItem.quantity-1 } :
            cartItem
     )
}

