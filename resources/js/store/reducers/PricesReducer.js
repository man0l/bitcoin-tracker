import {LIST_PRICES, LIST_PRICES_SUCCESS, LIST_PRICES_ERROR} from "../actionTypes/PricesTypes";

const initialState = {
    prices: [],
    price: {},
    // price: {
    //     id: "",
    //     mid: "",
    //     bid: "",
    //     ask: "",
    //     last_price: "",
    //     low: "",
    //     high: "",
    //     volume: "",
    //     fetched_at: ""
    // },
    success_message: "",
    error_message: "",
    validation_errors: null,
};


const priceReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PRICES:
            return {
                ...state
            };
        case LIST_PRICES_SUCCESS:
            return {
                ...state,
                prices: action.data
            };
        case LIST_PRICES_ERROR:
            return {
                ...state,
                error_message: action.error,
            };
        default:
            return state;
    }
}

export default priceReducer;
