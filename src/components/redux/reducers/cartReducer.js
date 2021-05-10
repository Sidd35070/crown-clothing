const INITIAL_STATE = {
    hidden:true
}

export const cartReducer =(state=INITIAL_STATE, action) => {
    if(action.type === "SHOW_HIDE"){
        return{
                hidden: !state.hidden

        }
    }
    else
    return state;
}