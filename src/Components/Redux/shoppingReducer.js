import { Categories } from "../Domiciles/ProductCategories/Data/Categories";
import {ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FORM_CART} from "./types"

export const initialState ={
    products: Categories,
    cart:[]
};

export function shoppingReducer(state = initialState, action){

    switch(action.type){

        case ADD_TO_CART: {
            let newItem = s
        };

        case REMOVE_ONE_FORM_CART: ();

        case REMOVE_ALL_FROM_CART: ();

        case CLEAR_CART:();


    }
}
