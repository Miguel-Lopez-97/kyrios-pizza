import React, { useState } from "react";
import "./PizzaCard.css";
import { ButtonCardPizza } from "../../ButtonsCard/ButtonCardPizza";

export function PizzaCard(props) {
  const { data, amount, id } = props;
  let {name, url, description, value} = data;

  const [size, setSize] = useState("");

  const sizeXL = ()=>{setSize("XL")};
  const sizeSmall = ()=>{setSize("Small")};
  const sizeMS = ()=>{setSize("MS")};
  const sizeIndividual = ()=>{setSize("individual");}

  return (
    <div className="pizzaCard">
      <div className="pizzaName">
        <h3>{size===""?name:name+" - "+size}</h3>
        <ul className="pizzaSize">
          <button onClick={sizeXL}>XL</button>
          <button onClick={sizeSmall}>Small</button>
          <button onClick={sizeMS}>MS</button>
          {name==="Personalizada"?null:<button onClick={sizeIndividual}>Individual</button>}
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
            <h3>{size==="XL"?"$"+value.XL:size==="Small"?"$"+value.Small:size==="MS"?"$"+value.MS:size==="individual"?"$"+value.individual:"Seleccione el Tamaño"}</h3>
          </div>
          {size===""?null:<div className="pizzaButtons"><ButtonCardPizza amount={amount} id={id} size={size}/></div>}
        </div>
      </div>
    </div>
  );
}
