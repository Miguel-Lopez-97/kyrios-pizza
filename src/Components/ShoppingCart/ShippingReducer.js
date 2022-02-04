import {Categories} from "../Domiciles/ProductCategories/Data/Categories"
import { TYPES } from "./ShoppingActions"

export const shoppingInitialState = {
    products: Categories,
    cart:[{"id":301, "amount":2}]
}

export function shoppingReducer(state, action){
    switch(action.type){
        case TYPES.Add_To_Cart:{
            /* let newItem =state.products[Math.floor(action.payload/100)-1].find(product => product.id === action.payload); */
            let newItem = state.products.find(product => product.id === action.payload);
            let itemInCart = state.cart.find(item => item.id === newItem.id);
            return itemInCart? {
                ...state, cart: state.cart.map((item)=>
                item.id === newItem.id?
                {...item, quantity:item.quantity+1}
                :item)
            }:{
                ...state, cart:[...state.cart, {...newItem, quantity:1}]
            };
        }

        case TYPES.Remove_One_From_Cart:{}

        case TYPES.Remove_All_From_Cart:{}

        case TYPES.Clear_Cart:
            return shoppingInitialState;

        default: 
            return state;
    }
}