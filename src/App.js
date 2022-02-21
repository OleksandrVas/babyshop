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
            <div>
                <Header likeCount={likeCount} addToCart={addToCart}/>
                <Main addToCart={addToCart} addToLiked={addToFavourite} likeCount={likeCount} onRemoveFromCart={onRemoveFromCart} addLikeCount={addLikeCount}
                      onRemoveFromFavourite={onRemoveFromFavourite}  quantity={quantity} onAddToLiked={onAddToLiked}/>
                <Footer/>
            </div>
    )
}
export default App;
