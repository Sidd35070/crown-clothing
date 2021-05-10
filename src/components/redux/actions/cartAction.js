export const toggleCart =()=>({
    type:"SHOW_HIDE"
});

export const addToCart =item=>{
    console.log(item);
    return({
    type:"ADD",
    payload: item
})};