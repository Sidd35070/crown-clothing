const st={
    currentUser:null
};

export const userReducer = (state=st, action) => {

    if( action.type === "ADD_USER"){
        state = {...action.payload}
        return state;
    }
    else 
        return state;
}