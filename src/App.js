import React from "react";
import Footer from "./Component/Footer/Footer";
import Preloader from "./Component/Preloader/Preloader";
import HeaderContainer from "./Component/Header/HeaderContainer";
import MainContainer from "./Component/Main/Main";

const App = ({isLoading, onLogIn, onLogOut, isLogin}) => {

    if (isLoading) {
        return <Preloader/>
    }
    return (
        <>
            <HeaderContainer isLogin={isLogin} onLogIn={onLogIn} onLogOut={onLogOut}/>
            <MainContainer isLogin={isLogin}/>
            <Footer/>
        </>
    )

}




export default App
