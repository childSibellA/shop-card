const INIT_STATE = {
    quantity: 0
};
  
const productsReducer = (state = INIT_STATE, action) => {
    if (action.type === "ADD_PRODUCT") {
        return { quantity: state.quantity + 1 };
    }

    return state;
};
  
export default productsReducer;