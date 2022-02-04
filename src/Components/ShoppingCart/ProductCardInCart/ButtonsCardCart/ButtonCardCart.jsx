import React, { useState } from "react";
import './ButtonCardCart.css';

export function ButtonCardCart(props){
    const {amount, value}=props

    const [quantity, setQuantity] = useState(amount);

    const addAmount = ()=>{setQuantity(quantity+1)}
    const lessAmount = ()=>{setQuantity(quantity-1)}
    const subtotal = value*quantity;

    return(
        <>
            <div className="buttonAmountChange">
                <button onClick={lessAmount} disabled={quantity===0?true:false}>-</button>
                <h3>{quantity}</h3>
                <button onClick={addAmount}>+</button>
            </div>
            <h2>SubTotal = ${subtotal}"</h2>
        </>
    );

}