import React from 'react';
import {Account,Passwords} from 'app/component/EditView';
import http_req from 'app/basic/net/http';
import { WingBlank, WhiteSpace} from 'antd-mobile';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { Button } from 'antd-mobile';

// import {flexCenter} from 'basic'
export default class UserScreen extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
     text: 'Useless Placeholder'
     };
     this.username = " ";
    this.password = " ";
  }
   static navigationOptions = {
    tabBarLabel: '发现',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('app/img/favorite.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

    onPressCallback = () => {
    let params={
      'username':this.username,
      'password':this.password
    }
    let url = "http://localhost:8888/api/register";
    http_req.postJson(url,params,(responseText) => {
          alert(responseText);
        })

  }


     render() {
      return (
          <View style={{flex:1}}>
              <WhiteSpace/>
              <WingBlank>
          <Account   onChangeText={(text) => {
            this.username = text;
        }}/>
              <WhiteSpace/>
         <Passwords   onChangeText={(text) => {
            this.password = text;
        }}/>

              <WhiteSpace size="lg" />
              <WingBlank><Button type="ghost" onClick={this.onPressCallback}>注册</Button></WingBlank>
                  </WingBlank>
          
      </View>
      )

  }
}

const styles = StyleSheet.create({
  style_view_unlogin:{
    fontSize:12,
    color:'#63B8FF',
    marginLeft:10,
    // backgroundColor:'#aaa',
  },
  style_view_register:{
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    // alignItems:'flex-end',
    flex:1,
    // flexDirection:'row',
    textAlign:'right',
    // backgroundColor:'#bbb',
  },
  icon: {
    width: 26,
    height: 26,
  },
});