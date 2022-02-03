import React from "react";
import "./Pizza.css";

export function Pizza() {
  return (
    <>
      <div className="pizzasSizes">
        <div className="pizzaSize">
          <div className="pizza xl">
              <img src="https://drive.google.com/uc?export=download&id=1l497mwk7XrFUjWey9u1OKE3VIDChDEQ-" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
              <h2>XL<br/>$40.000"</h2>
          </div>
        </div>
        <div className="pizzaSize">
          <div className="pizza small">
          <img src="https://drive.google.com/uc?export=download&id=1l497mwk7XrFUjWey9u1OKE3VIDChDEQ-" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
          <h2>Small<br/>$31.000"</h2>
          </div>
        </div>
        <div className="pizzaSize">
          <div className="pizza ms">
          <img src="https://drive.google.com/uc?export=download&id=1l497mwk7XrFUjWey9u1OKE3VIDChDEQ-" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
          <h2>MS<br/>$22.000"</h2>
          </div>
        </div>
        <div className="pizzaSize">
          <div className="pizza individual">
          <img src="https://drive.google.com/uc?export=download&id=1Mth0nejt6Gf-LwX1Ja83M2cQfR5IHwbY" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
          <h2>Porción<br/>$5.000"</h2>
          </div>
        </div>
      </div>
      <div className="pizzasSizesInfo">
          <h2>Disfruta de nuestras pizzas acorde a tus necesidades, si tienes ganas de un antojo prueba nuestra porción tamaño personal, si el tema es de hambre una Pizza MS un aproximado de 4 porciones individuales, para compartir con mas amigos el tamaño Small (6 porciones) y el XL (8 porciones), recuerde que puede mandar a porcionar cada pizza en mas porciones mas pequeñas.</h2>
      </div>
    </>
  );
}
