import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
const Main = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}

export default Main