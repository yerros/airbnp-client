import { ADD_CART, REMOVE_CART, REMOVE_ALL_CART } from "../actions/types";
const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.payload];
    case REMOVE_CART:
      return state.filter(alert => alert.item._id !== action.payload);
    case REMOVE_ALL_CART:
      return (state = []);
    default:
      return state;
  }
};

export default cartReducer;
