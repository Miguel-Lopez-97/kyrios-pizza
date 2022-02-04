import React, { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "./ShippingReducer";
import './ShoppingCart.css'
import { ProductCard } from "../Domiciles/ProductCategories/Defoult/ProductCard/ProductCard";
import { TYPES } from "./ShoppingActions";

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
            
            {cart.map((product) => 
                {<ProductCard key={product.id} data={product}/>
                    /* <div key={"div"+product.id}>
                    <button key={"button1"+product.id} onClick={()=>dellFromCart(product.id, true)}>Eliminar Todos</button>
                    <button key={"button2"+product.id} onClick={()=>dellFromCart(product.id)}>Eliminar Uno</button>
                    <ProductCard key={product.id} data={product} modificationCart={dellFromCart}/>
                </div> */})}
        </article>
        </>
    );
}