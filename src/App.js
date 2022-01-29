import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";
const App = () => {

    const [likeCount , setLikeCount ] = useState({
        totalLiked : 0
    })
    return (
        <BrowserRouter>
            <div >
                <Header likeCount={likeCount} />
                <Main setLikeCount={setLikeCount} likeCount={likeCount}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default App;
