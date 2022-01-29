import React from "react";
import classes from './HeadLine.module.css'

const HeadLine = ({headLine}) => {
    return (
        <>
            <div className={classes.headLineContainer}>
                <h1 className={classes.headLine}>
                    {headLine}
                </h1>
            </div>
        </>
    )
}
export default HeadLine