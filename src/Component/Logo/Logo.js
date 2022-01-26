import React from "react";
import classes from "./Logo.module.css";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={classes.logo}>
            <NavLink to="/home ">
                <img className={classes.imgHeaderMenu}
                     src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/retina-babyshop.png"/>
            </NavLink>
        </div>
    )
}
export default Logo