import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartFromPizza } from "../../../../Redux/actions";
import './ButtonCard.css';

export function ButtonCardPizza(props){
    const dispatch = useDispatch();

    const {amount, id, size}=props

    const [quantity, setQuantity] = useState(amount);

    const addAmount = ()=>{setQuantity(quantity+1)};
    const lessAmount = ()=>{setQuantity(quantity-1)};
    const alertCart = ()=>{alert("Se han Añadido "+quantity+" productos al carrito de manera exitosa")};
    const sendToCart = ()=>{
        dispatch(addToCartFromPizza(id, quantity, size));
        alertCart();
        setQuantity(0)
    }


    return(
        <>
            <div className="buttonAmountChange">
                <button onClick={lessAmount} disabled={quantity===0?true:false}>-</button>
                <h3>{quantity}</h3>
                <button onClick={addAmount}>+</button>
            </div>
            <button className="buttonAmountSend"
            disabled={quantity===0?true:false}
            onClick={sendToCart}
            >Añadir al Carrito</button>
        </>
    );

}