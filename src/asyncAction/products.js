import axios from "axios";
import {getAllProductsAction} from "../Redux/allProductsReducers";


export const fetchProducts = () => {
    return dispatch => {
        axios.get("https://run.mocky.io/v3/944978d4-9fb0-4a6b-af99-f87ff7de3037")
            .then(resp => resp.data)
            .then(data => dispatch(getAllProductsAction(data)))
    }
}