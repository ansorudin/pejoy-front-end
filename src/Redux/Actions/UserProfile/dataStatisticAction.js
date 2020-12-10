import Axios from 'axios';
import { UrlAPI } from '../../../Support/Constants/UrlAPI';
import { DATASTATISTIC_LOADING, DATASTATISTIC_SUCCESS, DATASTATISTIC_ERROR } from './ActionTypes';

export const onGetDataStatistic = () => {
    return (dispatch) => {
        dispatch({
            type: DATASTATISTIC_LOADING
        })

        Axios.get(UrlAPI + 'member/admin-dashboard/data-statistic')
        .then((res) => {
            console.log(res)
            if(res.data.error){
                dispatch({
                    type: DATASTATISTIC_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: DATASTATISTIC_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: DATASTATISTIC_ERROR,
                payload: err.message
            })
        })    
    }
}