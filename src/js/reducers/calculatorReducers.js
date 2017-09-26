const initialState = {output:0, identifiers:[]}

const calculatorReducers = (state=initialState,action) => {
    switch (action.type){
        case 'ADD_INPUTS': 
            return {...state,output:action.output}
        case 'SUBTRACT_INPUTS':
            return {...state,output:action.output}

        case 'REQUEST_IDENTIFIERS':
          return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
          })
        case 'RECEIVE_IDENTIFIERS':
          return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            identifiers: action.identifiers,
            lastUpdated: action.receivedAt
          })

        default: return {...state}

    }

}



export default calculatorReducers