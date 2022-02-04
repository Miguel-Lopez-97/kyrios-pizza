import {Categories} from "../Domiciles/ProductCategories/Data/Categories"
import { TYPES } from "./ShoppingActions"

export const shoppingInitialState = {
    products: Categories,
    cart:[{"id":301,
    "name":"Clásica",
    "url":"",
    "description":"Pan Fino + Carne Ahumada + Queso + Cebolla + Tomate+ Papitas Chips + Salsas + Lechuga",
    "value":5000},
    {"id":302,
    "name":"Sencilla",
    "url":"",
    "description":"Pan Fino + Carne Ahumada + Jamón + Papitas Chips + Queso + Huevo de Codorniz + Cebolla + Tomate + Salsas",
    "value":7500},
    {"id":303,
    "name":"Especial",
    "url":"",
    "description":"Pan Fino + Carne Artesanal + Tocineta + Jamón + Papitas Chips + Queso + 2 Huevos de Codorniz + Cebolla + Tomate + Salsas",
    "value":10000},
    {"id":304,
    "name":"De la Casa",
    "url":"",
    "description":"Pan Fino + Doble Carne Artesanal + Doble Tocineta + Doble Jamón + Papitas Chips + 3 Huevos de Codorniz + Queso + Cebolla + Tomate + Salsas + Francesa",
    "value":12500},
    {"id":305,
    "name":"Ranchera",
    "url":"",
    "description":"Pan Fino + Carne Artesanal + Maiz Tierno + Papitas Chips + Huevo de Gallina Frito + Cebolla + Tomate + Salsas + Chorizo + Queso + Tocineta + Francesa",
    "value":14500}]
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