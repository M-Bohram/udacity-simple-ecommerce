import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_IN_CART,
} from "./types";

export const addItemToCart = (product) => ({
  type: ADD_ITEM_TO_CART,
  product,
});

export const removeItemFromCart = (product) => ({
  type: REMOVE_ITEM_FROM_CART,
  product,
});

export const updateItemInCart = (product, qty) => ({
  type: UPDATE_ITEM_IN_CART,
  product,
  qty,
});
