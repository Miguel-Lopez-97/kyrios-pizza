import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {ProductCardInCart} from "./ProductCardInCart/ProductCardInCart";
import { addToCart, dellFromCart, clearCart } from "../Redux/actions";
import './ShoppingCart.css';

export function ShoppingCart(){
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {products, cart} = state.shopping;

    return(
        <>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article>
            <h3>Carrito</h3>
            <button onClick={()=>dispatch(clearCart())}>Limpiar Carrito de Compras</button>
            {cart.map((item) => 
            <ProductCardInCart 
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            value={item.value}
            data={products.find(e => e.id === item.id)}
            addToCart={() => dispatch(addToCart(item.id))}
            dellOneFromCart={()=> dispatch(dellFromCart(item.id))}
            dellAllFromCart={()=> dispatch(dellFromCart(item.id, true))}
            />)}
        </article>
        </>
    );
}