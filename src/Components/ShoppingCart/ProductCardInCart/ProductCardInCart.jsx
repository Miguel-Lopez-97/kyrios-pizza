import React from "react";
import "./ProductCardInCart.css";
import { ButtonCardCart } from "./ButtonsCardCart/ButtonCardCart";

export function ProductCardInCart(props) {
  const {data, amount, value}=props;
  let {name, url, description}=data;

  return (
    <div className="productCardInCart">
      <div className="productName">
          <h3>{name}</h3>
      </div>
      <div className="productFullDescription">
        <div className="productImage">
            <img src={url} alt={"Imagen "+name} />
        </div>
        <div className="productInfo">
          <div className="productDescriptionText">
              <h4>...{description}...</h4>
          </div>
          <div className="productValue">
              <h3>${value}"</h3>
          </div>
          <div className="productButtons">
              <ButtonCardCart amount={amount} value={value}/>
          </div>
        </div>
      </div>
    </div>
  );
}
