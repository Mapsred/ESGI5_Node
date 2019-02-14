import { combineReducers } from "redux";
import securityReducer from "./security";
import productsReducer from './products';
import userReducer from './user';

const rootReducer = combineReducers({
    security: securityReducer,
    products: productsReducer,
    user: userReducer
});

export default rootReducer;