// Imports
import axios from 'axios'

// App Imports
import {routesApi} from '../../../setup/routes'
import {queryBuilder} from '../../../setup/helpers'

// Actions Types
export const RESULTS_GET_LIST_REQUEST = 'RESULTS/GET_LIST_REQUEST'
export const RESULTS_GET_LIST_RESPONSE = 'RESULTS/GET_LIST_RESPONSE'
export const RESULTS_GET_LIST_FAILURE = 'RESULTS/GET_LIST_FAILURE'

// Actions

// Get list of results
export function getList(name, isLoading = true) {
  return dispatch => {
    dispatch({
      type: RESULTS_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, queryBuilder({
      type: 'query',
      operation: 'result',
      data: {name},
      fields: ['camis', 'dba', 'boro', 'address',
               'phone', 'inspection_date',
               'action', 'violation',
               'score', 'grade']
    }))
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: RESULTS_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.result
        })
      })
      .catch((error) => {
        dispatch({
          type: RESULTS_GET_LIST_FAILURE,
          error: error
        })
      })
  }
}