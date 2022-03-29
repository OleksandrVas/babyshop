import React from 'react';
import classes from './Header.module.css'
import '../../App.css'
import Logo from "../Logo/Logo";
import HeaderMenu from "./HeaderMenu";
import AuthForm from "../AuthForm/AuthForm";
import AuthSuccess from "../AuthForm/AuthSuccess";

const HeaderContainer = ({isLogin , onLogOut , onLogIn}) => {
    return (
        <div className={classes.header}>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-6 '><Logo/></div>
                    <div className="col-xs-6">
                        {isLogin?
                            <AuthSuccess  onLogOut={onLogOut}/> :
                            <AuthForm onLogIn={onLogIn}/>

                        }
                    </div>
                </div>


                <HeaderMenu isLogin={isLogin}/>
            </div>
        </div>
    );
};

export default HeaderContainer;