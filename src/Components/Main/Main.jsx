import React from "react";
import './Main.css';
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export function Main(){

    return(
        <div className="container">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    );
}