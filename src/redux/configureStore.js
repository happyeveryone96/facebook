import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({});

const store = createStore(rootReducer, enhancer);

export default store;