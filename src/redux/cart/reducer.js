import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_IN_CART,
} from "./types";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      return [...state, { product: action.product, qty: 1 }];
    }
    case REMOVE_ITEM_FROM_CART: {
      return state.filter((item) => item.product.id !== action.product.id);
    }
    case UPDATE_ITEM_IN_CART: {
      return state.map((item) => {
        if (item.product.id === action.product.id)
          return { ...item, qty: action.qty };
        return item;
      });
    }
    default:
      return state;
  }
};

export default cartReducer;
