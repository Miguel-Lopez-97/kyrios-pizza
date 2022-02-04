import React from "react";
import './ShoppingCart.css'
import { ProductCardInCart } from "./ProductCardInCart/ProductCardInCart";
import { AllProducts } from "../Domiciles/ProductCategories/Data/Categories";

export function ShoppingCart(){
    
    const cart=[{"id":301, "amount":2, "value":12000}, {"id":102, "amount":10, "value":40000}, {"id":112, "amount":5, "value":9000}];

    return(
        <>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article>
            <h3>Carrito</h3>
            <button>Limpiar Carrito de Compras</button>
            
            {cart.map((item) => <ProductCardInCart key={item.id} amount={item.amount} value={item.value} data={AllProducts.find(e => e.id === item.id)}/>)}
        </article>
        </>
    );
}