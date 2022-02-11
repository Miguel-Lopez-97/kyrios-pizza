import React from "react";
import "./Pizza.css";

export function Pizza() {
  return (
    <>
      <div className="pizzasSizesInfo">
          <h2>Disfruta de nuestras pizzas acorde a tus necesidades, El tamaño MS (4 porciones personales aprox.), tamaño Small (6 porciones personales aprox.) y el XL (8 porciones personales), recuerde que cada Pizza viene divida en 8 porciones iguales, variando el tamaño de la porción acorde a las equivalencias explicadas anteriormente.</h2>
      </div>
      <div className="pizzasSizes">
        <div className="pizzaSize">
          <div className="pizza xl">
              <img src="https://drive.google.com/uc?export=download&id=1RL33TKltp4cmYxjovgFc7XEpULWWB-FD" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
              <h2>XL<br/>$40.000</h2>
          </div>
        </div>
        <div className="pizzaSize">
          <div className="pizza small">
          <img src="https://drive.google.com/uc?export=download&id=1482kWIOqIidYOGiZlnaeZpk3md7ie9Y0" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
          <h2>Small<br/>$31.000</h2>
          </div>
        </div>
        <div className="pizzaSize">
          <div className="pizza ms">
          <img src="https://drive.google.com/uc?export=download&id=1lkayyscLeU_kdLN_e-xzkobcmi2jjUhk" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
          <h2>MS<br/>$22.000</h2>
          </div>
        </div>
        <div className="pizzaSize">
          <div className="pizza individual">
          <img src="https://drive.google.com/uc?export=download&id=1y4WT87JgcdSSF9JCmNzzyHGHRelXb5bU" alt="Pizza" />
          </div>
          <div className="pizzaSizeInfo">
          <h2>Personal<br/>$5.000</h2>
          </div>
        </div>
      </div>
    </>
  );
}
