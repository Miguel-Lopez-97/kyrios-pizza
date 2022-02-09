import React from "react";
import { Link} from "react-router-dom";
import './NavigationMenu.css'

export function NavegationMenu(){

    return(
        <div>
            <ul className="NavBarMenu">
                <Link to={`./pizzas`}>PIZZAS, Lasañas y Panzerotii</Link>
                <Link to={`./hotdogs`}>PERROS CALIENTES</Link>
                <Link to={`./burgers`}>HAMBURGUESAS</Link>
                <Link to={`./salchipapas`}>SALCHIPAPAS</Link>
                <Link to={`./patacones&others`}>PATACONES Y OTROS</Link>
                <Link to={`./drinks&others`}>BEBIDAS Y ADICIONALES</Link>
            </ul>
        </div>
    );
}