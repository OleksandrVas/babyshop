import React from "react";
import classes from "./Header.module.css"
import '../../App.css'
import NavLinkCreator from "../NavLinkCreator/NavLinkCreator";

const HeaderMenu = () => {
    return (
        <div className='container'>
            <div className={classes.rowForMenu}>
                <NavLinkCreator to="/home" text='HOME'/>
                <NavLinkCreator to="/products" text='OUR PRODUCTS '/>
                <NavLinkCreator to="/about" text='ABOUT US '/>
                <NavLinkCreator to="/blog" text='BLOG'/>
                <NavLinkCreator to="/client" text='CLIENT CENTER '/>
                <NavLinkCreator to="/faq" text='FAQ '/>
            </div>
        </div>
    )
}
export default HeaderMenu