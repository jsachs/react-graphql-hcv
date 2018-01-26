// Imports

// App Imports
import {
    RESULTS_GET_LIST_REQUEST,
    RESULTS_GET_LIST_RESPONSE,
    RESULTS_GET_LIST_FAILURE,
  } from './actions'
  
  // Thoughts list
  
  // Initial State
  const resultsInitialState = {
    isLoading: false,
    error: null,
    list: []
  }
  
  // State
  export const results = (state = resultsInitialState, action) => {
    switch (action.type) {
      case RESULTS_GET_LIST_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
          error: null
        }
  
      case RESULTS_GET_LIST_RESPONSE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
          list: action.list
        }
  
      case RESULTS_GET_LIST_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
  
      default:
        return state
    }
  }