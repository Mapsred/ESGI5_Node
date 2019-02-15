import { combineReducers } from "redux";
import securityReducer from "./security";
import productsReducer from './products';
import userReducer from './user';
import registerReducer from './register';

const rootReducer = combineReducers({
    security: securityReducer,
    products: productsReducer,
    user: userReducer,
    register: registerReducer
});

export default rootReducer;