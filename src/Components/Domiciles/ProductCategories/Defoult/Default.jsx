import React from "react";
import './Default.css'
import { ProductCard } from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";

export function DefaultCategory(props){

    const {json}=props;

    return(
        <section className="categorySection">
            
            <div className="selectCategory">
                <img src={json.url} alt={"imagen de "+json.name}/>
                <h2>{json.name}</h2>
            </div>
            <Link to="/domiciles">Regresar al Menú</Link>
            <div className="productsList">
                {json.products.map((product) =>{
                    return(
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            data={product}
                            amount={0}/>
                    )
                })}
            </div>
            <Link to="/domiciles">Regresar al Menú</Link>
        </section>
    );
}