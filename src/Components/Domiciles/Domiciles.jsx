import React from "react";
import { Outlet } from "react-router-dom";
import "./Domiciles.css";
import { NavegationMenu } from "./NavigationMenu/NavigationMenu";

export function Domiciles() {
  return (
    <div className="containerDomiciles">
      <Outlet />
      <section className="domicilesMenu">
        <div className="logoDomiciles">
          <img
            src="https://drive.google.com/uc?export=download&id=1qynz1kaVgJnrVVASKH2eKCslhoTuSBK_"
            alt="logo"
          />
        </div>
        <div className="navDomiciles">
          <NavegationMenu />
        </div>
      </section>
    </div>
  );
}
