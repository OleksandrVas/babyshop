import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import AppContainer from "./AppContainer";
import NewApp from "./NewApp";




ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            {/*<NewApp/>*/}
            <AppContainer/>
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);