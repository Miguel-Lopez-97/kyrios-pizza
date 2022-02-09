import { AllProducts} from "../Data/Categories";
import {ADD_TO_CART, ADD_TO_CART_MENU, ADD_TO_CART_PIZZA, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FORM_CART} from "./types"

export const initialState ={
    products: AllProducts,
    cart:[]
};

export function shoppingReducer(state = initialState, action){

    switch(action.type){

        case ADD_TO_CART: 
            
            return (
            {...state, cart: state.cart.map((item) => item.id === action.payload
                ?{...item, quantity: item.quantity+1}
                :item)});

        case ADD_TO_CART_MENU: {
            let newItem = {id:action.payload1, dataID:action.payload1};
            let quantityItem = action.payload2;
            let nameItem = state.products.find((e) => e.id === action.payload1).name;
            let priceItem = state.products.find((e) => e.id === action.payload1).value;
            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return(
                itemInCart?{...state,
                                cart: state.cart.map((item) => item.id === newItem.id
                                ?{...item, quantity: item.quantity+quantityItem}
                                :item)}
                            :{
                            ...state,
                            cart:[...state.cart, {...newItem, quantity:quantityItem, value:priceItem, name:nameItem}]
                            }
            );
        };
        
        case ADD_TO_CART_PIZZA: {
            let newItem = {id:action.payload1+action.payload3, dataID:action.payload1, size:action.payload3};
            let quantityItem = action.payload2;
            let size = action.payload3;
            let nameItem = state.products.find((e) => e.id === action.payload1).name;
            let priceItem = size==="XL"?
                state.products.find((e) => e.id === action.payload1).value.XL
                :size==="Small"?
                    state.products.find((e) => e.id === action.payload1).value.Small
                    :size==="MS"?
                        state.products.find((e) => e.id === action.payload1).value.MS
                        :size==="individual"?
                            state.products.find((e) => e.id === action.payload1).value.individual
                            :null;

            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return(
                itemInCart?{...state,
                                cart: state.cart.map((item) => item.id === newItem.id
                                ?{...item, quantity: item.quantity+quantityItem}
                                :item)}
                            :{
                            ...state,
                            cart:[...state.cart, {...newItem, quantity:quantityItem , value:priceItem, name:nameItem+"%20-"+size}]
                            }
            );
        };

        case REMOVE_ONE_FORM_CART: {
            let itemToDelete = state.cart.find((product) => product.id === action.payload);
            
            return itemToDelete.quantity>1?
                    {...state, cart: state.cart.map((item) => item.id === action.payload
                        ?{...item, quantity: item.quantity-1}
                        :item)}
                    :{
                        ...state,
                         cart: state.cart.filter((item)=>item.id !==action.payload)
                        }
        };

        case REMOVE_ALL_FROM_CART: 
            return {
                ...state,
                 cart: state.cart.filter((item)=>item.id !==action.payload)
                };
        ;

        case CLEAR_CART:
            return initialState
        ;

        default: return state;
    }
}
