export const toggleCart =()=>({
    type:"SHOW_HIDE"
});

export const addToCart =item=>{
    console.log(item);
    return({
    type:"ADD",
    payload: item
})};

export const clearItem = item => ({
    type:"CLEAR",
    payload: item
})

export const ReduceItem = item => ({
    type:"REDUCE",
    payload: item
})