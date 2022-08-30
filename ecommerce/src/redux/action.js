import * as types from './actionType';
import axios from 'axios';

// FETCHING THE DATA
export const getData = () => (dispatch) => {
  dispatch({type:types.GET_DATA_LOADING})
  axios.get(`https://json-server1122.herokuapp.com/prods`)
  .then((res) => {
     dispatch({type:types.GET_DATA_SUCCESS,payload:res.data})
  })
  .catch((e) => {
    dispatch({type:types.GET_DATA_FAILURE})
  })
}