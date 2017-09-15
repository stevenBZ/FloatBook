import React, { Component } from 'react';
import SmInputText from 'app/component/smInputText'
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
export class Account extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
 }

  render() {
    return (
      <View style={LoginStyles.TextInputView}>
      <Image
        style={LoginStyles.icon}
        source={require('app/img/account.png')}
      />
       <SmInputText name="请输入账号" onChangeText={(text) => {
             this.setState({text});
             this.props.onChangeText(text);}
           }/>
       </View>
    );
  }
}

export class Passwords extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
 }

  render() {
    return (
      <View style={LoginStyles.TextInputView}>
      <Image
        style={LoginStyles.icon}
        source={require('app/img/password.png')}
      />
       <SmInputText name="请输入密码" onChangeText={(text) => {
             this.setState({text});
             this.props.onChangeText(text);}
           }/>
       </View>
    );
  }
}





const LoginStyles = StyleSheet.create({
  TextInputView: {
    marginTop:10,
    height:30,
    borderWidth:1,
    borderColor:'#000000',
    borderWidth:0,
    borderBottomWidth:0.5,
    flexDirection: 'row',
  },
  icon:{
    width:22,
    height:22,
    marginLeft:10,
    marginRight:20,
    marginBottom:8,
  }
 });

