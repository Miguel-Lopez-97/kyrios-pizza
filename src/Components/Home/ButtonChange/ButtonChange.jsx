import React from "react";
import './ButtonChange.css'

export function ButtonChange(props){
    const {onChange, ico}=props
    const handleChange= ()=>{
        onChange()
    }
    return(
        <button className="buttonChange" onClick={handleChange}><img src={ico}alt="Ico Change"/></button>
    );

}