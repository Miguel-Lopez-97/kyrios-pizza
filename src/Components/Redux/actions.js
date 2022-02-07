import {ADD_TO_CART, ADD_TO_CART_MENU, ADD_TO_CART_PIZZA,CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FORM_CART} from "./types"

export const addToCart =(id) => ({type:ADD_TO_CART, payload:id});

export const addToCartFromMenu =(id, amount) => ({type:ADD_TO_CART_MENU, payload1:id, payload2:amount});

export const addToCartFromPizza =(id, amount, size) => ({type:ADD_TO_CART_PIZZA, payload1:id, payload2:amount, payload3:size});

export const dellFromCart =(id, all=false) => 
            all
            ?{type:REMOVE_ALL_FROM_CART, payload:id}
            :{type:REMOVE_ONE_FORM_CART, payload:id};

export const clearCart = () => ({type:CLEAR_CART})