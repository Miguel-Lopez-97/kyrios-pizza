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
        <div className="containerCart">
        <h2>Carrito de compras</h2>
        <h3>{cart.length>0?"Lista de productos seleccionados":"Vacio, por favor agregar productos desde el Menú"}</h3>
        <article>
            <button onClick={()=>dispatch(clearCart())}>Limpiar Carrito de Compras</button>
            {cart.map((item) => 
            <ProductCardInCart 
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            size={item.size?item.size:null}
            data={products.find(e => e.id === item.dataID)}
            value={products.find(e => e.id === item.dataID).value}
            addToCart={() => dispatch(addToCart(item.id))}
            dellOneFromCart={()=> dispatch(dellFromCart(item.id))}
            dellAllFromCart={()=> dispatch(dellFromCart(item.id, true))}
            />)}
        </article>
        <div>
            <h2>Total</h2>
            <h4>Recuerde que el valor minimo para realizar el domicilio es de $12.000" (Doce mill pesos)</h4>
            <h3>$ Valor Total</h3>
        </div>
        <section className="formCart">
            <h2>DATOS DEL PEDIDO</h2>
            <form>
                <fieldset>
                <input type="text" id="name" name="user_name" placeholder="Ingrese su Nombre"/>
                <input type="text" id="cel" name="user_cel" placeholder="Ingrese su Número de Celular"/>
                <input type="text" id="address" name="user_text" placeholder="Ingrese su Direccón"/>
                <input type="message" id="name" name="user_message" placeholder="Mensaje Adicional para su pedido, selección de saboreso especificaciones, ejemplo sabores de bebidas o de pizza personalizada, Hamburgesa sin salsas y cebolla, etc..."/>
                </fieldset>
                <input type="submit" value="Enviar"/>
            </form>
        </section>
        </div>
    );
}