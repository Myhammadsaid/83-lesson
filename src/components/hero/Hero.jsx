import React from "react";
import "./Hero.css";
import { useSelector } from "react-redux";
import img from "../../assets/hero-img.webp";

const Hero = () => {
  const count = useSelector((state) => state.counter);
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-style">
            <div className="hero-content">
              <h1 className="hero-text">Одна цена</h1>
              <p className="hero-par">При заказе от 3 до 10 товаров</p>
              <button className="hero-btn">Купить</button>
            </div>
            <img
              className="hero-img"
              width={895}
              height={286}
              src={img}
              alt="hero-img"
            />
          </div>
          <h1>{count}</h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
