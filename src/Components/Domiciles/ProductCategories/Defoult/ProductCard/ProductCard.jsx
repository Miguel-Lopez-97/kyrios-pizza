import React from "react";
import "./ProductCard.css";

export function ProductCard() {
  return (
    <div className="productCard">
      <div className="productName">
          <h3>Nombre</h3>
      </div>
      <div className="productFullDescription">
        <div className="productImage">
            <img src="https://www.mycolombianrecipes.com/wp-content/uploads/2009/07/perritos-colombianos.jpg" alt="Imagen" />
        </div>
        <div className="productInfo">
          <div className="productDescriptionText">
              <h4>..Description..</h4>
          </div>
          <div className="productValue">
              <h3>Value</h3>
          </div>
          <div className="productButtons">
              Botones
          </div>
        </div>
      </div>
    </div>
  );
}
