import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Main.css";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export function Main() {
  const state = useSelector((state) => state);
  const { cart } = state.shopping;

  return (
    <div className="container">
      <Header />
      <Link to="/domiciles/shopping_card" id="buttonToCart"
      style={cart.length > 0 ? { backgroundColor: "red" } : null}>
        <img
          src="https://drive.google.com/uc?export=download&id=12YfuFGlX0FAzlaPFK5FuGXzAsPd-5v_H"
          alt="ICO"
        />
        <h4>({cart.length})</h4>
      </Link>
      <Outlet />
      <Footer />
    </div>
  );
}
