import {applyMiddleware, createStore} from "redux";
import rootReducer from "../Redux/rootReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


export const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(thunk)))
