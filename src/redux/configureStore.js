import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Post from "./modules/post"
import Image from "./modules/image";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({
    user: User,
    post: Post,
    image: Image,
    router: connectRouter(history),
});

const store = createStore(rootReducer, enhancer);

export default store;