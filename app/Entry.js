import React, {Component} from 'react'

import {
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native'

import {App} from "./App"

import {Provider} from 'react-redux'
import {init} from "./basic/redux/init"
import http_req from "./basic/net/http"
<<<<<<< HEAD
=======
import SERVICE_BASE from 'app/basic/def/conf';
>>>>>>> finish functions

export class Entry extends Component {

  constructor(){
    super()

    this.state = {
      store : null
    }
  }

  componentDidMount(){

    /**
     * 初始化Redux Store
     */
    init().then( (__store => {
      /**
       * 设置Store全局可见,会增加副作用,但通常APP都属于中小型项目
       * 这样做会增强coding体验
       * 以后在任何地方,store就变成了一个全局变量
       * global.xxx的语法是react-native packager独有, 不要在react
       * 项目中使用
       */
      global.store = __store;
<<<<<<< HEAD
      let url="http://localhost:8888/api/getBookData";
=======
      let url=SERVICE_BASE+"getBookData";
>>>>>>> finish functions
     http_req.getData(url,()=>{});
      this.setState({store : __store});
      /**
       * 从服务端获取token,然后缓存在本地
       */
      
      // get_token()
      //   .then( (() => {
      //     setTimeout( (() => {
      //       this.setState({store : __store})
      //     }).bind(this), 0)
      //   }).bind(this))

    }).bind(this))
  }

 

  render() {
    const {store} = this.state
    if(!store) {
      return null
    }

    return <Provider store={store}>
        <App />
    </Provider>
    
  }
}
