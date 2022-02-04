import React, {useState} from "react";
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


    const [addToCart, setAddToCart] = useState({})

    const onAddToCart = (id, count) => {
        setAddToCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count
        }))
    }

    return (
        <BrowserRouter>
            <div>
                <Header likeCount={likeCount} addToCart={addToCart}/>
                <Main likeCount={likeCount} addLikeCount={addLikeCount} onAddToCart={onAddToCart}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default App;
