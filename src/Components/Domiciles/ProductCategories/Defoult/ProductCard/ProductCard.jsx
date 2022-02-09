import React from "react";
import "./ProductCard.css";
import { ButtonCard } from "../ButtonsCard/ButtonCard";

export function ProductCard(props) {
  const { data, amount, id } = props;
  let { name, url, description, value } = data;

  return (
    <div className="productCard">
      <div className="productName">
        <h3>{name}</h3>
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
          <div className="productButtons">
            <ButtonCard
              key={"buttonProduct" + id}
              amount={amount}
              id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
