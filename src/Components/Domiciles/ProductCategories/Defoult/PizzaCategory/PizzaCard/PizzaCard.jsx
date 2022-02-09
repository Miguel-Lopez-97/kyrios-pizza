import React, { useState } from "react";
import "./PizzaCard.css";
import { ButtonCardPizza } from "../../ButtonsCard/ButtonCardPizza";

export function PizzaCard(props) {
  const { data, amount, id } = props;
  let { name, url, description, value } = data;

  const [size, setSize] = useState("");

  const sizeXL = () => {
    setSize("XL");
  };
  const sizeSmall = () => {
    setSize("Small");
  };
  const sizeMS = () => {
    setSize("MS");
  };
  const sizeIndividual = () => {
    setSize("individual");
  };

  return (
    <div className="pizzaCard">
      <div className="pizzaName">
        <h3>{size === "" ? name : name + " - " + size}</h3>
        <ul className="pizzaSize">
          <button onClick={sizeXL}>XL</button>
          <button onClick={sizeSmall}>Small</button>
          <button onClick={sizeMS}>MS</button>
          {name === "Pizza Personalizada" ? null : (
            <button onClick={sizeIndividual}>Individual</button>
          )}
        </ul>
      </div>
      <div className="pizzaFullDescription">
        <div className="pizzaImage">
          <img src={url} alt={"Imagen " + name} />
        </div>
        <div className="pizzaInfo">
          <div className="pizzaDescriptionText">
            <h4>...{description}...</h4>
          </div>
          <div className="pizzaValue">
            <h3>
              {size === "XL"
                ?value.XL.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })
                : size === "Small"
                ?value.Small.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })
                : size === "MS"
                ?value.MS.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })
                : size === "individual"
                ?value.individual.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })
                : "Seleccione el Tamaño"}
            </h3>
          </div>
          <div className="pizzaButtons">
            {size === "" ? null : (
              <div className="pizzaButtons">
                <ButtonCardPizza
                  key={"buttonPizza" + id}
                  amount={amount}
                  id={id}
                  size={size}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
