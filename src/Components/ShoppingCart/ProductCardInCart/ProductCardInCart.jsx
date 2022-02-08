import React from "react";
import "./ProductCardInCart.css";
import { ButtonCardCart } from "./ButtonsCardCart/ButtonCardCart";

export function ProductCardInCart(props) {
  const {value, data, quantity, id, addToCart, dellOneFromCart, dellAllFromCart, size}=props;
  let {name, url, description}=data;
  
  return (
    <div className="productCardInCart">
      <div className="productName">
          <h3>{size?name+" - "+size:name}</h3>
          <button onClick={()=>dellAllFromCart(id, true)}>Eliminar del Carrito</button>
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
              <h3>${size?size==="XL"?value.XL:size==="Small"?value.Small:size==="MS"?value.MS:size==="individual"?value.individual:null:value}"</h3>
          </div>
          <div className="productButtons">
              <ButtonCardCart 
              quantity={quantity}
              value={size?size==="XL"?value.XL:size==="Small"?value.Small:size==="MS"?value.MS:size==="individual"?value.individual:null:value}
              id={id}
              addToCart={addToCart}
              dellOneFromCart={dellOneFromCart}/>
          </div>
        </div>
      </div>
    </div>
  );
}
