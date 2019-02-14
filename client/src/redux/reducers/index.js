import { combineReducers } from "redux";
import securityReducer from "./security";
import productsReducer from './products';

const rootReducer = combineReducers({
    security: securityReducer,
    products: productsReducer
});

export default rootReducer;