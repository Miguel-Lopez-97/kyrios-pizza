import {ADD_TO_CART, ADD_TO_CART_MENU, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FORM_CART} from "./types"

export const addToCart =(id) => ({type:ADD_TO_CART, payload:id});

export const addToCartFromMenu =(id, amount) => ({type:ADD_TO_CART_MENU, payload1:id, payload2:amount});

export const dellFromCart =(id, all=false) => 
            all
            ?{type:REMOVE_ALL_FROM_CART, payload:id}
            :{type:REMOVE_ONE_FORM_CART, payload:id};

export const clearCart = () => ({type:CLEAR_CART})