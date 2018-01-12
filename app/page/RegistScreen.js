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
import SERVICE_BASE from 'app/basic/def/conf';

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

    onPressCallback = () => {
    let params={
      'username':this.username,
      'password':this.password
    }
    let url = SERVICE_BASE+"register";
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
  },
  style_view_register:{
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    flex:1,
    textAlign:'right',
  },
  });