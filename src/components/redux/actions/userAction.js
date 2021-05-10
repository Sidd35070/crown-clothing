export const setUsername = user =>{
    // console.log(user);
    return ({
        type:"ADD_USER",
        payload: user
    });
}