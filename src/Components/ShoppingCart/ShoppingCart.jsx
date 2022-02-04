import React, { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "./ShippingReducer";
import './ShoppingCart.css'
import { ProductCardInCart } from "./ProductCardInCart/ProductCardInCart";
import { TYPES } from "./ShoppingActions";
import { Categories } from "../Domiciles/ProductCategories/Data/Categories";

export function ShoppingCart(){

    const [state, dispatch] = useReducer( shoppingReducer, shoppingInitialState);
    const {cart} = state;

const dellFromCart = (id, all=false) =>{
    if (all){
        dispatch({type:TYPES.Remove_All_From_Cart, payload: id});}
    else {
        dispatch({type: TYPES.Remove_One_From_Cart, payload:id});
    }
};
const clearCart = () =>{
    dispatch({type: TYPES.Clear_Cart})
};

    return(
        <>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article>
            <h3>Carrito</h3>
            <button onClick={clearCart}>Limpiar Carrito de Compras</button>
            
            {cart.map((item) => <ProductCardInCart key={item.id} amount={item.amount} value={item.value} data={Categories[Math.floor(item.id/100)-1].products.find(e => e.id ===item.id)}/>
                        )}
        </article>
        </>
    );
}