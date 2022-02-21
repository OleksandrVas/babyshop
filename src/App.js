import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";

const App = () => {

    const [likeCount, setLikeCount] = useState({
        totalLiked: 0
    })



    const addLikeCount = (isLiked) => {
        return setLikeCount((prevState) => ({
            totalLiked: prevState.totalLiked + (isLiked ? -1 : +1)
        }))
    }




    return (
            <div>
                <Header likeCount={likeCount} />
                <Main  likeCount={likeCount} addLikeCount={addLikeCount}/>
                <Footer/>
            </div>
    )
}
export default App;
