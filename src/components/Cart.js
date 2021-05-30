import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cart/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const totalCost = cart.reduce(
    (total, item) => (total = total + item.product.price * item.qty),
    0
  );

  console.log(cart);
  return (
    <div className="cart-container">
      <h3 className="cart-title">Cart</h3>
      <div className="cart-inner-container">
        {cart.map((item) => (
          <CartItem
            key={item.product.id}
            product={item.product}
            qty={item.qty}
          />
        ))}
        <hr className="cart-item-line-break" />
        <div className="cart-item-total-container">
          <h5>Total</h5>
          <h5>{totalCost.toFixed(2)} EGP</h5>
        </div>
        <button className="product-detail-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
