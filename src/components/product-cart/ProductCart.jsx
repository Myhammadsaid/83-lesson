import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementCart,
  decrementCart,
  deleteAllCart,
} from "../../lib/action/action";
import img1 from "../../assets/delete.png";
import "./ProductCart.css";
import "number-brm";

const ProductCart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const cartItems = cart?.map((val) => (
    <div key={val.id} className="cart-card">
      <img className="cart-img" src={val.images[0]} alt="product-img" />
      <h3 className="cart-text">{val.title}</h3>
      <div className="cart-btns">
        <button
          onClick={() => dispatch(incrementCart(val))}
          className="cart-inc"
        >
          +
        </button>
        <button className="cart-count">{val.quantity}</button>
        <button
          className="cart-dec"
          disabled={val.quantity <= 1}
          onClick={() => dispatch(decrementCart(val))}
        >
          -
        </button>
      </div>
      <p className="cart-price">
        <span>
          <s>{val.price * 2} UZS</s>
          <span>-50%</span>
        </span>
        {(val.price * val.quantity).brm()} UZS
      </p>
      <button
        onClick={() => dispatch(removeFromCart(val))}
        className="cart-btn"
      >
        <img src={img1} alt={val.title} />
      </button>
    </div>
  ));

  return (
    <div>
      {cart.length ? (
        <section className="cart">
          <div className="container">
            <div className="cart-titles">
              <h3 className="cart-title">Корзина</h3>
              <button
                onClick={() => dispatch(deleteAllCart())}
                className="cart-btn"
              >
                <img src={img1} alt="delete" />
              </button>
            </div>
            <div className="cart-cards">{cartItems}</div>
          </div>
        </section>
      ) : (
        <h2 style={{ textAlign: "center" }}>Cart not found</h2>
      )}
    </div>
  );
};

export default ProductCart;
