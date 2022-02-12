import React from "react";
import "./Pizza.css";

export function Pizza() {
  return (
    <>
            <div className="pizzasSizes">
        <div className="pizzaSize">
          <div className="pizza xl">
              <img src="https://drive.google.com/uc?export=download&id=1RL33TKltp4cmYxjovgFc7XEpULWWB-FD" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
              <h2>XL<br/>$40.000</h2>
              <h4>8 Porciones Personales</h4>
          </div>
        </div>
        <div className="pizzaSize">
          <div className="pizza small">
          <img src="https://drive.google.com/uc?export=download&id=1482kWIOqIidYOGiZlnaeZpk3md7ie9Y0" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
          <h2>Small<br/>$31.000</h2>
          <h4>6 porciones Personales aprox.</h4>
          </div>
        </div>
        <div className="pizzaSize">
          <div className="pizza ms">
          <img src="https://drive.google.com/uc?export=download&id=1lkayyscLeU_kdLN_e-xzkobcmi2jjUhk" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
          <h2>MS<br/>$22.000</h2>
          <h4>4 porciones Personales aprox.</h4>
          </div>
        </div>
        <div className="pizzaSize">
          <div className="pizza individual">
          <img src="https://drive.google.com/uc?export=download&id=1QghFy_q3Py07dVdHzUZSKxwDHY3g-09q" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
          <h2>Personal<br/>$5.000</h2>
          </div>
        </div>
      </div>
      <div className="pizzasSizesInfo">
          <h2>Disfruta de nuestras pizzas acorde a tus necesidades, recuerde que cada Pizza viene divida en 8 porciones iguales, variando el tamaño de la porción acorde a las equivalencias explicadas anteriormente.</h2>
      </div>
    </>
  );
}
