export const addItemToCart = (cartItems, itemToAdd) => {
    const exist = cartItems.find(
        cardItem => cardItem.id === itemToAdd.id
    );

    if(exist){
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity+1 } :
                cartItem
        )
    }
    else
        return [...cartItems, {...itemToAdd, quantity:1} ]
}