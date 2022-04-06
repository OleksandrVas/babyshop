import React, {useEffect} from 'react';
import classes from './Header.module.css'
import '../../App.css'
import Logo from "../Logo/Logo";
import HeaderMenu from "./HeaderMenu";
import AuthSuccess from "../AuthForm/AuthSuccess";
import AuthFormContainer from "../AuthForm/AuthFormContainer";
import {connect} from "react-redux";
import {onLogIn, onLogInAdmin, onLogOut, onLogOutAdmin} from "../../Redux/authorizeReducer";

const HeaderContainer = ({isLogin, onLogOut, isAdmin, onLogOutAdmin, onLogInAdmin, onLogIn, admin}) => {


    return (
        <div className={classes.header}>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-6 '><Logo/></div>
                    <div className="col-xs-6">
                        {isLogin ?
                            <AuthSuccess onLogOut={onLogOut} onLogOutAdmin={onLogOutAdmin} /> :
                            <AuthFormContainer onLogInAdmin={onLogInAdmin}
                                               admin={admin}
                                               onLogIn={onLogIn}
                            />
                        }
                    </div>
                </div>


                <HeaderMenu isLogin={isLogin}/>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    isAdmin: state.authReduce.isAdmin,
    admin: state.authReduce.userAdmin
})


export default connect(mapStateToProps, {onLogOut, onLogIn, onLogInAdmin, onLogOutAdmin})(HeaderContainer);