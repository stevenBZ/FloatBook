import {AsyncStorage} from 'react-native'

export const get_local_token = () => {
  return store.getState().user.token
}

export const set_local_token = async (token) => {
  store.dispatch({type : "SET_TOKEN", token})
}

export const clear_local_token = async () => {
  await AsyncStorage.removeItem("token")
}
