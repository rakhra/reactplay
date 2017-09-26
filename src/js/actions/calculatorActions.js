export const addInputs = (output) => {
    return {
        type: "ADD_INPUTS",
        output: output 
    }
}

export const subtractInputs = (output) => {
    return {
        type: "SUBTRACT_INPUTS",
        output: output 
    }
}




function requestIndentifiers() {
  return {
    type: 'REQUEST_IDENTIFIERS'
  }
}

function receiveIdentifiers(json) {
  console.log(json);
  return {
    type: 'RECEIVE_IDENTIFIERS',
    identifiers: json.map((s) => {return s.identifier;}),
    receivedAt: Date.now()
  }
}

export const fetchPosts = () => {
  return dispatch => {
    dispatch(requestIndentifiers())
    return fetch(`http://localhost:3000/identifiers`)
      .then(response => response.json())
      .then(json => dispatch(receiveIdentifiers(json)))
  }
}

