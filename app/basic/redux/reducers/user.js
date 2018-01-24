

const initialState = {
  token : null  ,
  name : ""
}
export const user = (state = initialState, action) => {
  
  switch(action.type) {
    case "SET_TOKEN" : 
      return {token : action.token}
    case "LOGOUT" :
      
      return {token : null, name : ""}
    case "LOGIN_SUCCESS" : {
      return {...state, name : action.name}
    }
  }
  return state
  
}