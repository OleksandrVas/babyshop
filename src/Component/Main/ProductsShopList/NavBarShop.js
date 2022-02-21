import React, {useState} from "react"
import classes from "./NavBar.module.css"
import InputSlider from "../../Slider/Slider";




const NavBarShop = ({filter , button ,filteredByAge , buttonsOfAge}) => {


    const toSortOfAge = buttonsOfAge.map(age => <li key={age} ><button onClick={() => filteredByAge(age)}>{age}</button></li>)

    return (
        <div className={"colXs3"}>
            <div className={classes.categories}>
                <h1>Categories</h1>
            </div>
            <div className={classes.catalogOfClothes}>
                <ul>
                    {
                        button.map((cat) =>{
                            return <li key={cat} ><button onClick={() => filter(cat)}> {cat}</button></li>
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
                    <ul>
                        {toSortOfAge.reverse()}
                    </ul>
                    <li>Color</li>
                    <li>Height</li>
                    <ul>
                        <li>Filter by price</li>
                        <li><InputSlider/></li>
                    </ul>

                </ul>
            </div>

        </div>
    )
}

export default NavBarShop