import React from "react";
import './ButtonCarousel.css'

export function ButtonCarousel(props){
    const {onChange, index}=props
    const handleChange= ()=>{
        onChange(index)
    }
    return(
        <button className="buttonCarousel" onClick={handleChange}>x</button>
    );

}