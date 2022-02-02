import React from "react";
import './Default.css'
import { ProductCard } from "./ProductCard/ProductCard";

export function DefaultCategory(props){

    const {name}=props;

    return(
        <section className="categorySection">
            <div className="selectCategory">
                <img src="https://www.mycolombianrecipes.com/wp-content/uploads/2009/07/perritos-colombianos.jpg" alt={"imagen de "+name}/>
                <h2>{name}</h2>
            </div>
            <div className="productsList">
                <ProductCard/>
            </div>
        </section>
    );
}