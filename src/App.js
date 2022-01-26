import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import classes from "./App.css"
import Main from "./Component/Main/Main";

const App = () => {
    return (
        <BrowserRouter>
            <div className={classes}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default App;
