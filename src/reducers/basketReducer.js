import { ADD_PRODUCT_BASKET, DECREASE_QUANTITY, GET_NUMBERS_BASKET, INCREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        stylus: {
            name: "Stylus",
            tagName: "stylus",
            price: 5.00,
            numbers: 0,
            inCart: false
        },
        smartphone: {
            name: "Smartphone",
            tagName: "smartphone",
            price: 750.00,
            numbers: 0,
            inCart: false
        },
        iPad: {
            name: "iPad",
            tagName: "iPad",
            price: 1000.00,
            numbers: 0,
            inCart: false
        },
        wirelessMouse: {
            name: "Wireless Mouse",
            tagName: "wirelessMouse",
            price: 35.00,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    let productSelected = ""
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if(productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost;
                newBasketNumbers = state.basketNumbers
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price;
                newBasketNumbers = state.basketNumbers - 1
            }
            
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case CLEAR_PRODUCT:
            productSelected = { ...state.products[action.payload]};
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;
            return {
                ...state,
                basketNumbers: state.basketNumbers - numbersBackup,
                cartCost: state.cartCost - (numbersBackup * productSelected.price),
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                } 
            }
        default:
            return state;
    }
}