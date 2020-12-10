import Axios from 'axios';
import { UrlAPI } from '../../../Support/Constants/UrlAPI';
import { MYTRANSACTIONS_LOADING, MYTRANSACTIONS_SUCCESS, MYTRANSACTIONS_ERROR } from './ActionTypes';

export const getMyTransactions = (data) => {
    return (dispatch) => {
        dispatch({
            type: MYTRANSACTIONS_LOADING
        })

        Axios.post(UrlAPI + 'member/transactions', data)
        .then((res) => {
            console.log(res.data)
            if(res.data.error){
                dispatch({
                    type: MYTRANSACTIONS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: MYTRANSACTIONS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: MYTRANSACTIONS_ERROR,
                payload: err.message
            })
        })    
    }
}

export const confirmMyTransaction = (data) => {
    return (dispatch) => {
        dispatch({
            type: MYTRANSACTIONS_LOADING
        })

        Axios.post(UrlAPI + 'member/confirm-transaction', data)
        .then((res) => {
            console.log(res.data)
            if(res.data.error){
                dispatch({
                    type: MYTRANSACTIONS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: MYTRANSACTIONS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: MYTRANSACTIONS_ERROR,
                payload: err.message
            })
        })    
    }
}