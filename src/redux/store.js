import {createStore,applyMiddleware} from 'redux';
import { routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk';
import combineReducers from './reducers.js';
import {createBrowserHistory} from 'history'
const middleware=routerMiddleware(createBrowserHistory());
let store = createStore(combineReducers,
    applyMiddleware(thunk,middleware)
);
if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}
export default store;