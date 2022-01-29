import React from "react";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const ButtonHome = ( {text ,to}) => {

    return (
        <>
            <Button size={"large"} variant={"text"}>
                <NavLink to={to}>{text}</NavLink>
            </Button>
        </>
    )
}
export default ButtonHome