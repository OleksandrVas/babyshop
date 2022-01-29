import React from "react";
import "../../App.css"
import classes from "./ProductSaleOfProducts.module.css"
import ButtonHome from "../ButtonArray/ButtonHome";
import classesImport from "./ProductList.module.css"

const ProductSaleOfProducts = ({price}) => {
    return (
        <>
            <div className="container" >
                <div className={classes.box}>
                    <div className={classes.colXs12}>
                        <div className={classes.colXs6}>
                            <div className={classes.boxContainerForSale}>
                                <div className={classes.container}>
                                    <h3>LIMITED OFFER</h3>
                                    <h1>Holiday <br/>
                                        Sale</h1>
                                    <div>data</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.colXs6}>
                            <div className={classes.containerFoSpecialOffers}>
                                <div className={classes.container}>
                                    <h3>USE DISCOUNTS AND PROMOTIONS</h3>
                                    <h1>Special <span>Offers</span></h1>
                                    <img className={classes.imagesSpecialOffers}
                                         src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-bebear.webp"/>
                                    <div>price : {price} $</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  className={classesImport.buttonHome}>
                        <ButtonHome text={"SEE PROMOTION"} to="/promotion" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductSaleOfProducts