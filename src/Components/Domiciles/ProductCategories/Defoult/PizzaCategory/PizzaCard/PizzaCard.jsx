import React, { useState } from "react";
import "./PizzaCard.css";

export function PizzaCard(props) {
  const { name, url, description, value } = props;

  const [size, setSize] = useState("");

  const sizeXL = ()=>{setSize("XL")};
  const sizeSmall = ()=>{setSize("Small")};
  const sizeMS = ()=>{setSize("MS")};
  const sizeIndividual = ()=>{setSize("individual");}

  return (
    <div className="productCard">
      <div className="productName">
        <h3>{name}</h3>
        <ul className="pizzaSize">
          <button onClick={sizeXL}>XL</button>
          <button onClick={sizeSmall}>Small</button>
          <button onClick={sizeMS}>MS</button>
          <button onClick={sizeIndividual}>Individual</button>
        </ul>
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
            <h3>${size==="XL"?value.XL:size==="Small"?value.Small:size==="MS"?value.MS:size==="individual"?value.individual:"Seleccione el Tamaño"}"</h3>
          </div>
          <div className="productButtons">Botones</div>
        </div>
      </div>
    </div>
  );
}
