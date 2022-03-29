import {useDispatch} from "react-redux";
import {useEffect} from "react";


export const useActionDispatch = (action) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(action)
    }, [])
}