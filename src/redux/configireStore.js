import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    user: User,
    router: connectRouter(history),
});

//thunk의 내장함수인 withExtraArgument사용해서 다른 객체 추가적으로 넘겨줄 수 있음
const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

//개발환경일 때 redux-logger라는걸 가져오기
if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

//devtools 사용설정
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();