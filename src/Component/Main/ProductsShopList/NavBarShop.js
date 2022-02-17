import React, {useState} from "react"
import classes from "./NavBar.module.css"
import InputSlider from "../../Slider/Slider";




const NavBarShop = ({filter , button ,filteredByAge , buttonsOfAge}) => {


    const toSortOfAge = buttonsOfAge.map(age => <li key={age.length[age]}><button onClick={() => filteredByAge(age)}>{age}</button></li>)

    return (
        <div className={"colXs3"}>
            <div className={classes.categories}>
                <h1>Categories</h1>
            </div>
            <div className={classes.catalogOfClothes}>
                <ul>
                    {
                        button.map((cat) =>{
                            return <li><button onClick={() => filter(cat)}> {cat}</button></li>
                        }
                        )
                    }
                </ul>
            </div>
            <div className={classes.categories}>
                <h1>Filter by </h1>
            </div>
            <div className={classes.catalogOfClothes}>
                <ul>
                    <li>Age</li>
                    <li>
                        {toSortOfAge.reverse()}
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