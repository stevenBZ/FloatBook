

const initial = {
  error : false
}

export const network = (state = initial, action) => {
  
  switch (action.type) {
    case "NETWORK_ERROR" :
      return {error : true, cache : action.cache}
    case "NETWORK_RETRY" :
      return {error : false}
  }
  
  return state
}
