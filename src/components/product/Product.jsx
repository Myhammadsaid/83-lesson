import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart, toggleWishlist } from "../../lib/action/action";
import img1 from "../../assets/heart.png";
import img2 from "../../assets/cart.png";

const Product = ({ data }) => {
  const dispatch = useDispatch();

  let products = data?.map((val) => (
    <div key={val.id} className="product-card">
      <img className="product-img" src={val.images[0]} alt="product-img" />
      <p className="product-text" title={val.title}>
        {val.title}
      </p>
      <p className="product-par" title={val.description}>
        {val.description}
      </p>
      <p className="product-price">{val.price} UZS</p>
      <div className="product-btns">
        <button
          onClick={() => dispatch(toggleWishlist(val))}
          className="product-btn"
        >
          <img src={img1} alt={val.title} />
        </button>
        <button
          onClick={() => dispatch(addToCart(val))}
          className="product-btn"
        >
          <img src={img2} alt={val.title} />
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product-cards">{products}</div>
        </div>
      </section>
    </>
  );
};

export default Product;
