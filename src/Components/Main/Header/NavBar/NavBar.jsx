import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  const state = useSelector((state) => state);
  const { cart } = state.shopping;

  return (
    <ul className="NavBar">
      <Link to="/">KYRIO'S</Link>
      <Link to="/domiciles">DOMICILIOS</Link>
      <Link
        to="/domiciles/shopping_card"
        style={cart.length > 0 ? { backgroundColor: "red" } : null}
      >
        <img
          src="https://drive.google.com/uc?export=download&id=12YfuFGlX0FAzlaPFK5FuGXzAsPd-5v_H"
          alt="ICO"
        />
        <h2>({cart.length})</h2>
      </Link>
    </ul>
  );
}
