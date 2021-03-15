import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        stylus: {
            name: "Stylus",
            price: 5.00,
            numbers: 0,
            inCart: false
        },
        smartphone: {
            name: "Smartphone",
            price: 750.00,
            numbers: 0,
            inCart: false
        },
        iPad: {
            name: "iPad",
            price: 1000.00,
            numbers: 0,
            inCart: false
        },
        wirelessMouse: {
            name: "Wireless Mouse",
            price: 35.00,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = { ...state.products[action.payload]}
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return {
                basketNumbers: state.basketNumbers + 1
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }
}