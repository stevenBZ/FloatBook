
import React, {Component} from 'react'

import {View, Text, StyleSheet, Dimensions,Button} from 'react-native'

// import {ZButton} from "domain/component"

import {flexCenter} from '../basic/style';
import {COLOR_TEXT_LIGHT, COLOR_TITLE} from '../basic/net/http';

export default class NetworkError extends Component{

  render(){
    return <View style={styles.container}>
      <Text style={{fontSize : 24, color : COLOR_TITLE}}>亲!网络出错啦!</Text>
      <View style={{height : 20}}></View>
      <Text style={{fontSize : 14, color : COLOR_TEXT_LIGHT}}>您可以尝试去设置中调整网络配置,然后点击重试按钮</Text>

      <View style={{height : 20}}></View>
      // <Button onPress={this._press.bind(this)}>重试</Button>
    </View>

  }
}

const styles = StyleSheet.create({
  container  : {
    position : "absolute",
    top : 0,
    left : 0,
    zIndex : 1,
    backgroundColor : "white",
    height : Dimensions.get("window").height,
    width : Dimensions.get("window").width,
    ...flexCenter
  }
})