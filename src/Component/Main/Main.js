import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
const Main = ({setLikeCount,likeCount}) => {
    return (
        <Routes>
            <Route path="/home" element={
                <Home setLikeCount={setLikeCount} likeCount={likeCount} />
            }/>
        </Routes>
    )
}

export default Main