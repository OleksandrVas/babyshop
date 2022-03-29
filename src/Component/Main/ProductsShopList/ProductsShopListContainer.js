import React, {useState} from "react"
import {connect} from "react-redux";
import ProductsShopList from "./ProductsShopList";


const ProductsShopListContainer = ({products}) => {
    console.log(products)

    const productsArray = products
    const allCategories = ['All', ...new Set(productsArray.map(item => item.categories))]

    const allAge = [...new Set(productsArray.map(item => item.age))]

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
        <ProductsShopList
            filter={filter}
            buttons={buttons}
            filteredByAge={filteredByAge}
            menuItems={menuItems}
            buttonsOfAge={buttonsOfAge}
        />
    )
}

const mapStateToProps = (state) => ({
    products: state.allProducts.products
})


export default connect(mapStateToProps)(ProductsShopListContainer)