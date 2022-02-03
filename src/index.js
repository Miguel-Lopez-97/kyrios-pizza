import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Routes, Route, Navigate, HashRouter} from "react-router-dom";
import {Main} from "./Components/Main/Main"
import {Home} from "./Components/Home/Home"
import { Domiciles } from "./Components/Domiciles/Domiciles";
import {Unselect} from "./Components/Domiciles/ProductCategories/Unselect/Unselect";
import {DefaultCategory} from "./Components/Domiciles/ProductCategories/Defoult/Default";
import {CategoryPizza} from "./Components/Domiciles/ProductCategories/Defoult/DefaultPizza";
import {Categories} from "./Components/Domiciles/ProductCategories/Data/Categories"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Main/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/domiciles" element={<Domiciles/>}>
            <Route path="/domiciles" element={<Unselect/>}/>
            <Route path="/domiciles/pizzas" element={<CategoryPizza json={Categories[0]}/>}/>
            <Route path="/domiciles/hotdogs" element={<DefaultCategory json={Categories[1]}/>}/>
            <Route path="/domiciles/burgers" element={<DefaultCategory json={Categories[2]}/>}/>
            <Route path="/domiciles/salchipapas" element={<DefaultCategory json={Categories[3]}/>}/>
            <Route path="/domiciles/patacones&others" element={<DefaultCategory json={Categories[4]}/>}/>
            <Route path="/domiciles/drinks&others" element={<DefaultCategory json={Categories[5]}/>}/>
          </Route>
          <Route path="/shopping_card" element={<h1>Carrito de Compra</h1>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
