import React from "react";
import './Default.css'
import { ProductCard } from "./ProductCard/ProductCard";
import { Pizza } from "./PizzaCategory/Pizza";
import { PizzaCard } from "./PizzaCategory/PizzaCard/PizzaCard";
import { Link } from "react-router-dom";

export function CategoryPizza(props){

    const {json}=props;

    return(
        <section className="categorySection">
            <div className="selectCategory">
                <img src={json.url} alt={"imagen de "+json.name}/>
                <h2>{json.name}</h2>
            </div>
            <Pizza/>
            <div className="productsList">
                {json.pizzas.map((product) =>{
                    return(
                            <PizzaCard
                            key={product.id}
                            name={product.name}
                            url={product.url}
                            description={product.description}
                            value={product.value}/>
                    )
                })}
            </div>
            <div className="productsList">
                {json.products.map((product) =>{
                    return(
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            url={product.url}
                            description={product.description}
                            value={product.value}/>
                    )
                })}
            </div>
            <Link to="/domiciles">Regresar al Menú</Link>
        </section>
    );
}