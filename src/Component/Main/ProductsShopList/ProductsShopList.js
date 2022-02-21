import React, {useState} from "react"
import HeadLine from "../../HeadLine/HeadLine";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import NavBarShop from "./NavBarShop";
import ProductShopCatalog from "./ProductShopCatalog";
import productsArray from "../../Products/ProductsArray";
import {connect} from "react-redux";


const allCategories = [ 'All', ...new Set(productsArray.map(item => item.categories))]

const allAge = [...new Set(productsArray.map(item => item.age))]



const ProductsShopList = ({}) => {

    const [menuItems, setMenuItems] = useState(productsArray)
    const [buttons] = useState(allCategories);
    const [buttonsOfAge] = useState(allAge);

    const filter = (button) => {
        if (button === "All") {
            return setMenuItems(productsArray)
        }
        const filteredData = productsArray.filter(item => item.categories === button)
        setMenuItems(filteredData)
    }

    const filteredByAge = (age) => {
        if (age === "All") {
            return setMenuItems(productsArray)
        }
        const filteredDataByAge = productsArray.filter(item => item.age === age)
        setMenuItems(filteredDataByAge)
    }

    return (
        <>
            <HeadLine headLine={"Products Catalog"}/>
            <BreadCrumbs/>
            <div className={"colXs12"}>
                <NavBarShop buttonsOfAge={buttonsOfAge} filter={filter} button={buttons} filteredByAge={filteredByAge}/>
                <ProductShopCatalog  menuItems={menuItems}/>
            </div>
        </>
    )
}

export default ProductsShopList