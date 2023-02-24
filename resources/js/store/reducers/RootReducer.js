import { combineReducers } from 'redux';
import priceReducer  from './PricesReducer';
const rootReducer = combineReducers({
    price: priceReducer
});
export default rootReducer;
