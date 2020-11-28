import Axios from 'axios';
import { UrlAPI } from '../../../Support/Constants/UrlAPI';
import { RAJAONGKIRCITY_LOADING, RAJAONGKIRCITY_SUCCESS, RAJAONGKIRCITY_ERROR } from './ActionTypes';

export const onGetCityIdRajaOngkir = (data) => {
    return (dispatch) => {
        dispatch({
            type: RAJAONGKIRCITY_LOADING
        })

        Axios.get(UrlAPI + 'member/shipping-address/get-raja-ongkir-city')
        .then((res) => {
            console.log(res.data)

            let filterRajaOngkirCity = []
            res.data.data.rajaongkir.results.forEach((value, index) => {
                if(value.province_id === String(data.province_id)){
                    filterRajaOngkirCity.push({city_id: value.province_id, city_name: value.city_name})
                }
            })

            if(res.data.error){
                dispatch({
                    type: RAJAONGKIRCITY_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: RAJAONGKIRCITY_SUCCESS,
                    payload: filterRajaOngkirCity
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: RAJAONGKIRCITY_ERROR,
                payload: err.message
            })
        })    
    }
}