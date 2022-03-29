export const productObject = (array) => array.reduce(
    (object, product) => ({
        ...object ,
        [product.id]: product
    }), {})
