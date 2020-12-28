import Axios from 'axios';
import { UrlAPI } from '../../../Support/Constants/UrlAPI';
import { BESTSELLERPRODUCTS_LOADING, BESTSELLERPRODUCTS_SUCCESS, BESTSELLERPRODUCTS_ERROR } from './ActionTypes';

export const getBestSellerProducts = () => {
    return (dispatch) => {
        dispatch({
            type: BESTSELLERPRODUCTS_LOADING
        })

        Axios.get(process.env.REACT_APP_API_URL + 'pejoy/products-best-seller')
        .then((res) => {
            if(res.data.error){
                dispatch({
                    type: BESTSELLERPRODUCTS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: BESTSELLERPRODUCTS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: BESTSELLERPRODUCTS_ERROR,
                payload: err.message
            })
        })    
    }
}