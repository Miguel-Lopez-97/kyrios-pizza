import React from "react";
import "./Default.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { Pizza } from "./PizzaCategory/Pizza";
import { PizzaCard } from "./PizzaCategory/PizzaCard/PizzaCard";
import { Link } from "react-router-dom";

export function CategoryPizza(props) {
  const { json } = props;

  return (
    <section className="categorySection">
      <div className="selectCategory">
        <img src={json.url} alt={"imagen de " + json.name} />
        <h2>{json.name}</h2>
      </div>
      <div className="selectCategory">
        <h2>PIZZAS</h2>
      </div>
      <Pizza key="001"/>
      <div className="selectCategory">
        <h2>Variedades y Sabores</h2>
      </div>
      <Link to="/domiciles" key="002">Regresar al Menú</Link>
     <div className="productsList">
        {json.products.map((product) => {
          return product.id < 1000 ? (
            <PizzaCard
              key={product.id}
              id={product.id}
              data={product}
              amount={0}
            />
          ) : null;
        })}
      </div>
      
      <div className="selectCategory">
        <h2>Lasañas y Panzerotiis</h2>
      </div>
      <div className="productsList">
        {json.products.map((product) => {
          return product.id < 1000 ? null : (
              <ProductCard
                key={product.id}
                id={product.id}
                data={product}
                amount={0}
              />
          );
        })}
      </div>
      <Link to="/domiciles" key="003">Regresar al Menú</Link>
    </section>
  );
}
