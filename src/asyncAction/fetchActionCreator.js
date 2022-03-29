import axios from "axios";


export const fetchActionCreator = (url , actionCreator) =>  async (dispatch) => {
    const response = await axios.get(url)
        .then(data => data)
    return dispatch(actionCreator(response.data))
}