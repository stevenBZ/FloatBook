



import {http_get, http_post, http_put, url_mapper} from "domain/api/http"

import RNFetchBlob from 'react-native-fetch-blob'
import {get_local_token} from "domain/store/storage"

/**
 * 请求获取token,并缓存在本地
 */
export const get_token = async (force) => {
  if(!force && store.getState().user.token) {
    return
  }
  return await http_get("/token")
}

function _arrayBufferToBase64( buffer ) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa( binary );
}

/**
 *  去支付宝拿签名
 */

export const get_sign_alipay = (orderId) => {
  return http_get('/order/sign/alipay', {orderId})
}

/**
 * 获取验证码图片
 * @return 图片base64字符串
 */
export const get_image = async () => {


  console.log("@get_image[图片验证码] with token " + token)

  // 获取实际的请求地址
  const url = url_mapper("/imgcode")

  // 从AnsycStorage中取得token
  const token = await get_local_token()

  const result = await RNFetchBlob.fetch('GET', url, {
    token
  })

  const base64String = result.base64()
  
  
  return "data:image/png;base64," + base64String

}

/**
 * 获取用户注册码
 */
export const get_user_vcode = (type, mobile, imgcode) => {
  console.log("@get_user_vcode")
  return http_get("/user/vcode", {type, mobile, "img_code" : imgcode})
}


/**
 * 用户注册
 */
export const register = (data) => {
  console.log("@register")  
  return http_post("/user", data)
}


/**
 * 重置密码
 */
export const reset = (data) => {
  console.log("@reset password")
}

/**
 * 登录
 */
export const login = (data) => {

  console.log("@login")
  return http_get("/user/identity", data)
  
}

/**
 * 获取课程
 */
export const get_courses = (start, take) => {
  console.log("@get_courses")
  return http_get("/course", {start, take})
}
 

/**
 * 获取订单
 */
export const get_orders = (start, take) => {
  console.log("@get_ourder")  
  return http_get("/order", {start, take})
}


/**
 * 创建订单
 * @param courseId
 */
export const post_order = (courseId) => {
  console.log("@post_order")
  return http_post(`/order/${courseId}`)

}


export const put_user = (data) => {
  console.log("@put_user")
  return http_put(`/user`, data)
}