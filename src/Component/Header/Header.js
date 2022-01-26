import React from "react";
import classes from './Header.module.css'
import '../../App.css'
import Logo from "../Logo/Logo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className='container'>
                <Logo/>
                <HeaderMenu/>
            </div>
        </div>
    )
}
export default Header
