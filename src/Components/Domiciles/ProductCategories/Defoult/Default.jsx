import React from "react";
import './Default.css'
import { ProductCard } from "./ProductCard/ProductCard";

export function DefaultCategory(props){

    const {json}=props;

    return(
        <section className="categorySection">
            <div className="selectCategory">
                <img src={json.url} alt={"imagen de "+json.name}/>
                <h2>{json.name}</h2>
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
        </section>
    );
}