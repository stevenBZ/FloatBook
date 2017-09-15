import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

export class MyBook extends React.Component{
	render(){
<View style={styles.wrap}>
  // <Image style={styles.icon} source={require('app/img/book.png')}/>
  <Text>我的教材</Text>
</View>
		}
}

const styles=StyleSheet.create({
  wrap:{
  	width:40,
  	height:60
  },
  icon:{
  	width:40,
  	height:40,
  },
});