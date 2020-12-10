import Axios from 'axios';
import { UrlAPI } from '../../../Support/Constants/UrlAPI';
import { RAJAONGKIRPROVINCE_LOADING, RAJAONGKIRPROVINCE_SUCCESS, RAJAONGKIRPROVINCE_ERROR } from './ActionTypes';

export const onGetProvinceIdRajaOngkir = () => {
    return (dispatch) => {
        dispatch({
            type: RAJAONGKIRPROVINCE_LOADING
        })

        Axios.get(UrlAPI + 'member/shipping-address/get-raja-ongkir-province')
        .then((res) => {
            if(res.data.error){
                dispatch({
                    type: RAJAONGKIRPROVINCE_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: RAJAONGKIRPROVINCE_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: RAJAONGKIRPROVINCE_ERROR,
                payload: err.message
            })
        })    
    }
}