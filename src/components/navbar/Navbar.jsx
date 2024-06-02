import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.value.length);
  const wishlist = useSelector((state) => state.wishlist.value.length);

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <NavLink to={"/"} className="nav-logo">
              <svg
                viewBox="0 0 140 30"
                width={121}
                hanging={25}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m8.574 2.99-8.87 21.045h3.16l2.106-5.01h10.38l2.036 5.01h3.256L11.83 2.99H8.574ZM6.081 16.26l4.037-10.173L14.22 16.26H6.081ZM36.352 24.066h13.706v-2.733H39.3v-6.44h10.301V12.1H39.301V5.784h10.757V2.99H36.352v21.076ZM31.035.257h-.516a3.72 3.72 0 0 1-3.555 3.523v.515c1.975.091 3.433 1.61 3.555 3.584h.516a3.73 3.73 0 0 1 3.556-3.584V3.81A3.776 3.776 0 0 1 31.035.257ZM32.19 8.821h-2.856v15.215h2.856V8.821ZM25.23 2.99h-2.886v21.045h2.887V2.99ZM104.119 8.487c-4.613 0-7.84 3.401-7.84 7.986 0 4.677 3.374 8.048 7.961 8.048 2.645 0 4.894-1.033 6.261-2.977l-2.006-1.7a5.264 5.264 0 0 1-4.255 2.035c-2.612 0-4.74-1.823-5.046-4.313h12.307a6.64 6.64 0 0 0 .091-1.275c.003-4.373-3.097-7.804-7.473-7.804Zm-4.922 6.62c.303-2.43 2.218-4.008 4.922-4.008 2.493 0 4.255 1.585 4.559 4.008h-9.48ZM116.823 12.829c0-1.153 1.245-1.853 2.977-1.853 1.701 0 2.795.85 3.343 1.702l2.278-1.428c-.941-1.336-2.643-2.763-5.53-2.763-3.433 0-5.956 1.67-5.956 4.493 0 5.65 8.939 3.372 8.939 6.804 0 1.366-1.337 2.185-3.221 2.185-1.975 0-3.316-1.184-4.037-1.974l-2.197 1.67c.546.791 2.306 2.856 6.229 2.856 4.011 0 6.108-2.065 6.108-4.798 0-5.953-8.933-3.706-8.933-6.894ZM130.77 12.83c0-1.153 1.246-1.854 2.979-1.854 1.701 0 2.795.85 3.342 1.702l2.279-1.423c-.941-1.336-2.644-2.764-5.53-2.764-3.435 0-5.956 1.67-5.956 4.494 0 5.65 8.939 3.371 8.939 6.803 0 1.366-1.338 2.186-3.223 2.186-1.975 0-3.316-1.184-4.037-1.974l-2.188 1.67c.548.791 2.307 2.856 6.23 2.856 4.012 0 6.108-2.065 6.108-4.798-.008-5.958-8.943-3.71-8.943-6.899ZM76.709 8.487c-3.92 0-8.053 2.368-8.053 8.594v12.663h2.857v-7.531c1.215 1.428 3.16 2.278 5.288 2.278 4.614 0 7.687-3.645 7.687-7.988 0-4.403-2.795-8.016-7.78-8.016Zm-.084 13.392c-2.705 0-5.166-1.914-5.166-5.406 0-3.219 2.461-5.374 5.166-5.374 2.884 0 5.014 2.064 5.014 5.374-.007 3.25-2.13 5.406-5.014 5.406ZM89.898 10.976V8.851h-2.856v15.215h2.856V16.26c0-3.796 2.307-5.011 5.349-4.8v-2.7c-2.797-.153-4.529 1.03-5.35 2.215ZM67.562 8.821h-3.495l-4.345 5.436-4.285-5.436H51.73l6.198 7.652-6.26 7.593h3.404l4.529-5.558 4.527 5.558h3.495l-6.26-7.683 6.2-7.562Z"
                  fill="#fff"
                  data-spm-anchor-id="a2g2w.home.logo.i0.41715586iM6rqV"
                ></path>
              </svg>
            </NavLink>
            <div className="nav-items">
              <a href="#" className="nav-item">
                <svg
                  width={24}
                  hanging={24}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.739 3.352v15.065h-6.027a3.013 3.013 0 0 1-3.013-3.013V6.365a3.013 3.013 0 0 1 3.014-3.013h6.026Zm-13.057 0H2.656v15.065h6.026a3.013 3.013 0 0 0 3.013-3.013V6.365a3.013 3.013 0 0 0-3.013-3.013Zm.484 15.065a3.014 3.014 0 0 0 6.026 0H9.166Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Каталог
              </a>
              <form className="nav-form">
                <input
                  className="nav-input"
                  type="search"
                  placeholder="Search"
                />
                <button className="nav-btn">Search</button>
              </form>
              <NavLink to={"/wishlist"} className="nav-item">
                <svg
                  width={24}
                  hanging={24}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.998 5.5 2 7.5v7h7V7.293L10.791 5.5H3.998Zm9.795-3H7l-2.002 2h6.793l2.002-2ZM10 7.707V14.5h6.793L19 12.287V5.5h-6.795L10 7.707ZM15.207 2.5l-2.002 2h6.801v6.787L22 9.293V2.5h-6.793ZM2 22.5h7v-7H2v7Zm18.006-3.006L22 17.5v-6.793l-1.994 1.994v6.793ZM10 15.5v7h7l2-2.006v-6.793L17.207 15.5H10Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Wishlist
              </NavLink>
              <NavLink to={"/cart"} className="nav-item">
                <svg
                  width={24}
                  hanging={24}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m8.785 14.947-.882-.164 2.658-10.032h12.81l-2.666 9.95-.867-.233-11.053.479Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18.448 16.828H7.658a2.244 2.244 0 0 1-2.166-2.826L8.51 2.785a2.242 2.242 0 1 1 4.332 1.165l-2.26 8.391h7.865a2.243 2.243 0 1 1 0 4.487Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M2.292 10.056a2.245 2.245 0 0 1-.542-4.11L9.536 1.41a2.243 2.243 0 1 1 2.243 3.885L3.993 9.832a2.24 2.24 0 0 1-1.7.224ZM8.523 23.109a2.692 2.692 0 1 0 0-5.383 2.692 2.692 0 0 0 0 5.383ZM15.25 23.109a2.692 2.692 0 1 0 0-5.384 2.692 2.692 0 0 0 0 5.384Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Cart
              </NavLink>
              <a href="#" className="nav-item">
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.74 7.232c-2.287 3.991-4.426 8.702-.777 12.67 1.639 1.782 4.287 2.969 7.029 3.071 6.843.256 11.434-4.79 11.89-9.985.221-2.528.224-5.286-1.555-7.477-1.248-1.537-3.137-2.074-5.059-2.819-2.345-.91-8.14-1.195-9.902.86-1.648 1.924-4.832 4.844-3.577 7.419m5.68-2.754.14.273m0 0c.11.217.216.415.317.59m-.318-.59c.54-1.241 1.892-2.583 2.213-1.575.056.176.088.387.098.61m-2.31.965c-.275.631-.338 1.237.053 1.493m.264-.904c.58 1.001 1.032 1.24 1.744-.152.184-.36.27-.91.249-1.401M8.926 9.079c.26-.762.723-1.621 1.913-1.572a.208.208 0 0 1 .08.019M8.926 9.079c-.078.23-.138.452-.193.636a5.118 5.118 0 0 0-.07.268m2.256-2.457c.541.25.04 2.879-1.941 2.57a.789.789 0 0 1-.316-.113m0 0c-.138.583-.31 1.67.485.837m6.835-4.251-.03.14m0 0c-.074.356-.129.626-.168.825m.168-.826c.031-.028.064-.055.097-.08.768-.594.518 2.989.472 3.163-.41 1.532-2.096 1.992-1.685.03.182-.872.183-1.772.674-2.564.05-.08.092-.138.127-.176m.315-.373c-.12.11-.225.235-.315.373m.147.453c-.163.837-.05.425 0 0Zm0 0c.038-.322.038-.653-.147-.453m0 0c-.542.833-.565 2.116-.565 2.915m-9.423 2.951c.774 2.516 3.792 7.465 7.308 6.175 1.002-.367 5.542-5.249 4.355-5.848"
                    stroke="#FFB800"
                    strokeLinecap="round"
                    strokeWidth="1.825"
                  ></path>
                </svg>
                Войти
              </a>
              <b className="header-heart">{wishlist}</b>
              <b className="header-cart">{cart}</b>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
