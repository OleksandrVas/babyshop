import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";

const App = () => {

    const [likeCount, setLikeCount] = useState({
        totalLiked: 0
    })

    const [addToFavourite , setAddToFavourite] = useState({})

    const onAddToLiked = (id , isLiked  ) => {
        setAddToFavourite((prevState) => ({
            ...prevState,
            [id] : isLiked
        }))
    }
    const onRemoveFromFavourite = (id) => {
        const removeFromFavourite = {...addToFavourite}
        delete(removeFromFavourite[id])
        setAddToFavourite(removeFromFavourite)
    }

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

    const onRemoveFromCart = (id) => {
        const prevState = {...addToCart}
        delete(prevState[id])
        setAddToCart(prevState)
    }

    const quantity = (id , count ) => {
        setAddToCart((prevState => ({
            ...prevState ,
            [id] : count
        })))
    }

    return (
        <BrowserRouter>
            <div>
                <Header likeCount={likeCount} addToCart={addToCart}/>
                <Main addToCart={addToCart} addToLiked={addToFavourite} likeCount={likeCount} onRemoveFromCart={onRemoveFromCart} addLikeCount={addLikeCount}
                      onRemoveFromFavourite={onRemoveFromFavourite} onAddToCart={onAddToCart} quantity={quantity} onAddToLiked={onAddToLiked}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default App;
