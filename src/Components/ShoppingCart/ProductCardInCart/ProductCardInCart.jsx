import React from "react";
import "./ProductCardInCart.css";
import { ButtonCardCart } from "./ButtonsCardCart/ButtonCardCart";

export function ProductCardInCart(props) {
  const { value, data, quantity, id, addToCart, dellOneFromCart, dellAllFromCart, size } = props;
  let { name, url, description } = data;

  const clearItem = () => dellAllFromCart(id, true);

  const alertClear = () => {
    if (window.confirm("¿Desea eliminar este Item del Carrito de Compras?")) {
      clearItem();
    }
  };

  return (
    <div className="productCardInCart">
      <div className="productName">
        <h3>{size ? name + " - " + size : name}</h3>
        <button className="productClearProduct" onClick={alertClear}>X</button>
      </div>
      <div className="productFullDescription">
        <div className="productImage">
          <img src={url} alt={"Imagen " + name} />
        </div>
        <div className="productInfo">
          <div className="productDescriptionText">
            <h4>...{description}...</h4>
          </div>
          <div className="productValue">
            <h3>{value.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP"
            })}</h3>
          </div>
        </div>
      </div>
      <div className="productButtons">
        <ButtonCardCart
          key={"buttonProductCart" + id}
          quantity={quantity}
          value={value}
          id={id}
          addToCart={addToCart}
          dellOneFromCart={dellOneFromCart} />
      </div>
    </div>
  );
}
