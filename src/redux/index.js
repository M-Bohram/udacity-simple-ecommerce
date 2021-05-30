import cartReducer from "./cart/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
