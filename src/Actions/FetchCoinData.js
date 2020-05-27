import axios from 'axios';
import { APIBase } from '../Utilities/Constants'
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL} from '../Utilities/ActionTypes'

export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })

        // return fetch('https://ee9ml7v06b.execute-api.us-east-1.amazonaws.com/dev/getCoins')
        //         .then(response => response.json()).then(data => console.log(data))
// works to log into console.

        
        return axios.get(`https://ee9ml7v06b.execute-api.us-east-1.amazonaws.com/dev/getCoins`)
            .then(res => {
                dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
            });
    }
}