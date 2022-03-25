import axios from "axios";


export default class ProductServices {
    static async getAllProducts() {
        const response = await axios.get("https://run.mocky.io/v3/fcaa0919-ac9a-4eec-8827-99e96641adac")
        return response
    }
}