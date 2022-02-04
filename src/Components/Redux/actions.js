import {ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FORM_CART} from "./types"

export const addToCard =(id) => ({type:ADD_TO_CART, payload:id});

export const dellFromCart =(id, all=false) => all?{type:REMOVE_ALL_FROM_CART, payload:id}:{type:REMOVE_ONE_FORM_CART, payload:id};

export const clearCard = () => ({type:CLEAR_CART})