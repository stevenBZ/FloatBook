import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
export default class smInputText extends Component {
  constructor(props) {
   super(props);
 }

  render() {
    return (
           <TextInput style={LoginStyles.TextInput}
         placeholder={this.props.name}
         onChangeText={
           this.props.onChangeText
          }
       />
       )
   
  }
}


const LoginStyles = StyleSheet.create({
  TextInput: {
    height:30,
  
  },
});