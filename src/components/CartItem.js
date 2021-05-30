import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateItemInCart } from "../redux/cart/actions";

const CartItem = ({ product, qty }) => {
  const dispatch = useDispatch();
  const changeCartItemQty = (action) => {
    if (action === "increment") dispatch(updateItemInCart(product, qty + 1));
    else if (action === "decrement" && qty > 0) {
      dispatch(updateItemInCart(product, qty - 1));
    }
  };
  const removeCartItem = () => {
    dispatch(removeItemFromCart(product));
  };

  const itemCost = product.price * qty;

  return (
    <div className="cart-item-container">
      <img className="cart-item-img" src={product.img} />
      <div className="cart-item-center-container">
        <p className="cart-item-product-name">{product.name}</p>
        <h3 className="cart-item-product-price">{itemCost.toFixed(2)} EGP</h3>
      </div>
      <div className="cart-item-right-container">
        <div className="cart-item-quantity-container">
          <p
            className="cart-item-quantity-decrease"
            onClick={() => changeCartItemQty("decrement")}
          >
            -
          </p>
          <p className="cart-item-quantity-value">{qty || 1}</p>
          <p
            className="cart-item-quantity-increase"
            onClick={() => changeCartItemQty("increment")}
          >
            +
          </p>
        </div>
        <button className="cart-item-delete-btn" onClick={removeCartItem}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
