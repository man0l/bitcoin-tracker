import {LIST_PRICES, LIST_PRICES_SUCCESS, LIST_PRICES_ERROR} from "../actionTypes/PricesTypes";
import Price from "../../apis/Price";

function listActions() {
    return (dispatch, getState) => {
        dispatch({
            type: LIST_PRICES
        });

        Price.list().then(response => {
            dispatch({
                type: LIST_PRICES_SUCCESS,
                data: response.data.data
            });

        }).catch(error => {
            dispatch({
                type: LIST_PRICES_ERROR,
                error: error.response.data
            });
        })
    }
}

export {listActions};
