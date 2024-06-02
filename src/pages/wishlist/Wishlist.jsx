import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWishlist } from "../../lib/action/action";
import img1 from "../../assets/heart.png";
import img2 from "../../assets/cart.png";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  const wishlists = wishlist?.map((val) => (
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
        <img src={img2} alt={val.title} />
      </div>
    </div>
  ));

  return (
    <>
      {wishlist.length ? (
        <section className="wishlist">
          <div className="container">
            <div className="product-cards">{wishlists}</div>
          </div>
        </section>
      ) : (
        <h1 style={{ textAlign: "center" }}>Wishlist not found</h1>
      )}
    </>
  );
};

export default Wishlist;
