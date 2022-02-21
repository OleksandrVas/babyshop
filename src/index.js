import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import {createStore} from "redux";
import rootReducer from "./Redux/rootReducer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App store = {store}/>
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);