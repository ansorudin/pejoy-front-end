import Axios from 'axios';
import { UrlAPI } from '../../../Support/Constants/UrlAPI';
import { USERPROFILE_LOADING, USERPROFILE_SUCCESS, USERPROFILE_ERROR } from './ActionTypes';

export const onGetDataUsers = (token) => {
    return (dispatch) => {
        dispatch({
            type: USERPROFILE_LOADING
        })

        Axios.post(UrlAPI + 'member/profile', {token})
        .then((res) => {
            console.log(res)
            if(res.data.error){
                dispatch({
                    type: USERPROFILE_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: USERPROFILE_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: USERPROFILE_ERROR,
                payload: err.message
            })
        })    
    }
}