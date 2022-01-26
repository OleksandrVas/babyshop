import React from "react";
import classes from '../Home.module.css'
import "../../../../App.css"
import cn from 'classname'
import {NavLink} from "react-router-dom";

const NameOfTrend = () => {
    return (
        <div id={classes.nameOfTrend}>
            <div className={classes.colXs12}>
                <div className={cn(classes.colXs8, classes.box)}>
                    <img
                        src="//themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-slider-pic2.webp"/>
                    <div className={classes.text}>
                        Collection <br/>
                        <span className={classes.season}>of Autumn</span> <br/>
                        <span className={classes.year}>2022</span>
                    </div>
                </div>
                <div className={cn(classes.colXs4)}>
                    <div className={cn(classes.colXs4, classes.selectAge)}>
                        <div className={classes.item}>Select your <br/> child's age</div>
                        <div>
                            {/*<NavLinkCreator text={"0-2"} to={"/someWhere"}/>*/}
                            {/*<NavLinkCreator text={"2-4"} to={"/someWhere"}/>*/}
                            {/*<NavLinkCreator text={"4-6"} to={"/someWhere"}/>*/}
                        </div>
                    </div>
                    <div className={cn(classes.colXs8  , classes.collection)}>
                        <div>
                            <img className={classes.saleImg} src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-promo-pic1.webp"/>
                        </div>
                        <div className={classes.item}>Duvet Cover Set<br/>
                            <span>-40% off</span>
                        </div>
                        <div className={classes.viewCollection}>
                            <NavLink to='/viewCollection' >
                                <button>VIEW COLLECTION </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NameOfTrend