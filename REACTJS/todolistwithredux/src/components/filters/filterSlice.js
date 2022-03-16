const initialState = {
    filter: {
        search: '',
        status: 'All',
        priotity: [],
    }
}

const filterReducer = (state = initialState, action) => {
  // console.log({state, action})
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                filter: {...state.filter, search: action.payload}
            }

        case 'filters/statusFilterChange':
            return {
                ...state,
                filter: {...state.filter, status: action.payload}
            }

        case 'filters/priorityFilterChange':
            return {
                ...state,
                filter: {...state.filter, priotity: action.payload}
        }
          
    default:
        return state
  }
} 

export default filterReducer;
