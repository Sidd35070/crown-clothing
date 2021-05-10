const st={
    currentUser:null
};

export const userReducer = (state=st, action) => {
    console.log(state);
    console.log(action);

    if( action.type === "ADD_USER"){
        state = {...action.payload}
        return state;
    }
    else 
        return state;
}