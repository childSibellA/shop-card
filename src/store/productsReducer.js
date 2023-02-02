const INIT_STATE = {
  diferentProductAmount: 0,
  quantity: 0,
  totalPrice: 0,
  choosenProducts: [],
  productsList: [
      {
        name: "hp230",
        id: 1,
        price: 300,
      },
      {
        name: "hp231",
        id: 2,
        price: 400,
      },
      {
        name: "hp232",
        id: 3,
        price: 500,
      },
      {
        name: "hp233",
        id: 4,
        price: 500,
      },
      {
        name: "hp234",
        id: 5,
        price: 500,
      },
      {
        name: "hp235",
        id: 6,
        price: 500,
      },
      {
        name: "hp236",
        id: 7,
        price: 500,
      }
    ]
};

const productsReducer = (state = INIT_STATE, action) => {

  if (action.type === "ADD_PRODUCT_QUANTITY") {
    return { ...state, quantity: state.quantity + 1 };
  }
  
  if (action.type === "ADD_COOSEN_PRODUCT") {
    return { ...state, choosenProducts: [...state.choosenProducts, action.product] };
  }

  if (action.type === "REMOVE_COOSEN_PRODUCTS") {
    return { ...state, choosenProducts: [...state.choosenProducts, action.product] };
  }

  return state;
};

export default productsReducer;