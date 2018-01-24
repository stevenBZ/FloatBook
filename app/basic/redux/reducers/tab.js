


const initial = {
  active : "home"
}

export const tab = (state = initial, action) => {
  switch(action.type) {
    case "SWITCH_TAB" :
      return {...state, active : action.active}
    
  }
  return state
}