import React  from "react"
import classes from "./NavBar.module.css"
import InputSlider from "../../Slider/Slider";


const NavBarShop = ({filter, button, filteredByAge, buttonsOfAge}) => {


    const toSortOfAge = buttonsOfAge
        .map(age => <li key={age}>
            <button onClick={() => filteredByAge(age) } className={classes.btnOfFilter}>{age}</button>
        </li>)

    return (
        <div className={"colXs3"}>
            <div className={classes.categories}>
                <h1>Categories</h1>
            </div>
            <div className={classes.catalogOfClothes}>
                <ul>
                    {
                        button.map((cat) => {
                                return <li key={cat}>
                                    <button onClick={() => filter(cat)} className={classes.btnOfFilter}> {cat}</button>
                                </li>
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
                </ul>
            </div>

        </div>
    )
}

export default NavBarShop