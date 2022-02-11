import React from "react";
import "./ButtonCardCart.css";

export function ButtonCardCart(props) {
  const { quantity, value, id, dellOneFromCart, addToCart } = props;

  return (
    <div className="ButtonCardCart">
      <div className="buttonAmountChange">
        <button onClick={() => dellOneFromCart(id, false)}>-</button>
        <h3>{quantity}</h3>
        <button onClick={() => addToCart(id)}>+</button>
      </div>
      <h2>
        SubTotal ={" "}
        {(value*quantity).toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
      </h2>
    </div>
  );
}
