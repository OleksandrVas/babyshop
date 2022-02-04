import React from "react"
import classes from "./NavBar.module.css"
import NavLinkCreator from "../../NavLinkCreator/NavLinkCreator";
import InputSlider from "../../Slider/Slider";


const NavBarShop = () => {
    return (
        <div className={"colXs3"}>
            <div className={classes.categories}>
                <h1>Categories</h1>
            </div>
            <div className={classes.catalogOfClothes}>
                <ul>
                    <li><NavLinkCreator text="Bathrobes" to="/shop"/></li>
                    <li><NavLinkCreator text="Bed sets" to="/shop"/></li>
                    <li><NavLinkCreator text="Sleepwear" to="/shop"/></li>
                </ul>
            </div>
            <div className={classes.categories}>
                <h1>Filter by </h1>
            </div>
            <div className={classes.catalogOfClothes}>
                <ul>
                    <li>Age</li>
                    <li>
                        <li><input type="checkbox"/> <span> 0 - 2 years </span></li>
                        <li><input type="checkbox"/> <span> 2 - 4  years </span></li>
                        <li><input type="checkbox"/> <span> 4 - 6  years </span></li>
                    </li>
                    <li>Color</li>
                    <li>Height</li>
                    <li>
                        <li>Filter by price</li>
                        <li><InputSlider/></li>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default NavBarShop