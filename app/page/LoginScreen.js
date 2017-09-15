import React from 'react';
import LoginButton from '../component/LoginButton';
import {Account,Passwords} from 'app/component/EditView';
import { WingBlank, WhiteSpace} from 'antd-mobile';
import { Button } from 'antd-mobile';
import http_req from '../basic/net/http';
import {set_local_token} from '../basic/store/storage';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

// import {flexCenter} from 'basic'
export default class LoginScreen extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
     text: 'Useless Placeholder'
     };
     this.username = " ";
    this.password = " ";
  }
    onPressCallback = () => {
       let formData={
      "username":this.username,
      "password":this.password
    };
    let url = "http://localhost:8888/api/login";
    http_req.postJson(url,formData,(responseText) => {
          let res=JSON.parse(responseText);
          if(res['success']==true){
            this.props.navigation.navigate('Home'); 
            set_local_token(res['token']);
             store.dispatch({
               type : "LOGIN_SUCCESS",
               name : this.username
             });
            
             alert(JSON.stringify(store.getState().user));
           }
          else{
            alert('账号密码错误');
          }
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
              <WingBlank><Button type="ghost" onClick={this.onPressCallback}>登陆</Button></WingBlank>
                  </WingBlank>
           <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
             <Text style={styles.style_view_unlogin}>
                 无法登录?
            </Text>
            <Text style={styles.style_view_register}>
                 新用户
            </Text>
          </View>
      </View>
      )

  }

}

const styles = StyleSheet.create({
  style_image:{
    borderRadius:35,
    height:70,
    width:70,
    marginTop:40,
    alignSelf:'center',
  },
  style_user_input:{  
      backgroundColor:'#fff',
      marginTop:10,
      height:35,
  },
   style_pwd_input:{  
      backgroundColor:'#fff',
      height:35,
  },
   style_view_commit:{  
      marginTop:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#63B8FF',
      height:35,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
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
  }
});