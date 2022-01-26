import React from "react";
import {NavLink} from "react-router-dom";

const NavLinkCreator = ({text , to }) => {
    return (
        <NavLink to={to}>{text}</NavLink>
    )
}
export default NavLinkCreator