import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Routes, Route, Navigate, HashRouter} from "react-router-dom";
import {Main} from "./Components/Main/Main"
import {Home} from './Components/Home/Home'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Main/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/domiciles" element={<h1>Domicilios</h1>} />
          <Route path="/shopping_card" element={<h1>Carrito de Compra</h1>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
