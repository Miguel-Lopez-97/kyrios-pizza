import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export function NavBar(){

    return(
        <ul className="NavBar">
            <Link to="/">KYRIO'S</Link>
            <Link to="/domiciles">DOMICILIOS</Link>
            <Link to="/shopping_card"><img src="https://drive.google.com/uc?export=download&id=12YfuFGlX0FAzlaPFK5FuGXzAsPd-5v_H" alt="ICO"/></Link>
        </ul>
    );
}
