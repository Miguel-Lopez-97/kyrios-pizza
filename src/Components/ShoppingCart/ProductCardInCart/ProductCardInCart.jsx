import React from "react";
import "./ProductCardInCart.css";
import { ButtonCard } from "../../Domiciles/ProductCategories/Defoult/ButtonsCard/ButtonCard";

export function ProductCardInCart(props) {
  const {data, amount}=props;
  let {name, url, description, value}=data;

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
              <ButtonCard amount={amount}/>
          </div>
        </div>
      </div>
    </div>
  );
}
