import React from 'react';
import LoginButton from '../component/LoginButton';
import EditView from '../component/EditView';
// import NetUitl from '../basic/net/NetUtil';
import http_req from '../basic/net/http';
import {get_local_token,clear_local_token} from '../basic/store/storage'
// import {MyBook} from 'app/component/IconItem'
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';

// import {flexCenter} from 'basic'
export default class UserScreen extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
     text: 'Useless Placeholder',
     login:'false'
     };
     this.username = " ";
    this.password = " ";
  }
   static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('app/img/account.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  componentDidMount() {
    let token=get_local_token();
    if(token){
    let url = "http://localhost:8888/api/haveLogin";
       http_req.checkToken(url,token,(responseText) => {
          if(responseText=='OK'){
            // alert('hhh');
            this.setState({login:'true'});
          }

        })
    }
  }
    onPressCallback = () => {
    let formData = new FormData();
    formData.append("username",this.username);
    formData.append("password",this.password);
    let url = "http://localhost:8888/api/login";
    http_req.postJson(url,formData,(responseText) => {
          alert(responseText);
          // alert(this.props);
          // if(responseText=='ok'){
          //   onLoginSuccess();
          // }
        })

  }

  getBookData=()=>{
    let url="http://localhost:8888/api/getBookData";
     http_req.getData(url,(responseText) => {
          alert(responseText);
        })

  }

   DelBooks=()=>{
    let url="http://localhost:8888/api/delBooks";
     http_req.getData(url,(responseText) => {
          alert(responseText);
        })

  }


  getBookUsers=()=>{
    let url="http://localhost:8888/api/getUsers";
     http_req.getData(url,(responseText) => {
          var result=JSON.parse(responseText)['result'];
          var str='';
          for(var i=0;i<result.length;i++){
             str=str+' '+result[i]['username']+' '+result[i]['password']+';';
          };
          alert(str);
        })

  }

    getAllUserDetails=()=>{
        let url="http://localhost:8888/api/getAllUserDetails";
        http_req.getData(url,(responseText) => {
            // var result=JSON.parse(responseText)['result'];
            // var str='';
            // for(var i=0;i<result.length;i++){
            //     str=str+' '+result[i]['username']+' ';
            // };
            // alert(str);
            alert(responseText);
        })

    }

  logOut=()=>{
     store.dispatch({
               type : "LOGOUT"
               });

     // clear_local_token();
     this.props.navigation.navigate('Home');
  }

  toLogin=()=>{
    this.props.navigation.navigate('Login');
  }
   //跳转到第二个页面去

     render() {
      if(this.state.login=='true'){
        return (
          <View style={{backgroundColor:'#f4f4f4',flex:1}}>
            <View style={styles.portraitBox}>
            <Image
              style={styles.style_image} 
              source={require('../img/huanghualuo.jpg')}/>
              <View style={styles.portraitTitle}>
              <Text>欢迎!{store.getState().user.name}</Text>      
            </View>
          </View>
          <View style={styles.funcList}>
<View style={styles.Iconwrap}>
  <Image style={styles.icon} source={require('app/img/book.png')}/>
  <Text style={styles.IconText}>我的教材</Text>
</View>
<View style={styles.Iconwrap}>
  <Image style={styles.icon} source={require('app/img/collect.png')}/>
  <Text style={styles.IconText}>我的收藏</Text>
</View>
<View style={styles.Iconwrap}>
  <Image style={styles.icon} source={require('app/img/group.png')}/>
  <Text style={styles.IconText}>我的群组</Text>
</View>
<View style={styles.Iconwrap}>
  <Image style={styles.icon} source={require('app/img/set.png')}/>
  <Text style={styles.IconText}>设置</Text>
</View>
          </View>
          <View style={styles.workList}>
            <Text style={styles.workTitle}>发布漂流瓶</Text>

              <Button
                  onPress={() => this.props.navigation.navigate('UpLoad', { user: 'Lucy' })}
                  title="I want to upload"
              />

              <Button
                  onPress={() => this.props.navigation.navigate('Info')}
                  title="我的信息"
              />

<Button
  onPress={this.logOut}
  title="登出"
/>


          </View>
        </View>
      )
      }
      return (
          <View style={{backgroundColor:'#f4f4f4',flex:1}}>
          <View style={styles.portraitBox}>
          <Image
              style={styles.style_image} 
              source={require('../img/defaultPortrait.png')}/>
              <View style={styles.portraitTitle}>
              <Button
                 onPress={this.toLogin} 
                 style={styles.portraitTip}
                title="请登陆"
              />
              
                           </View>
          </View>
          <View style={styles.workList}>
            <Text style={styles.workTitle}>发布漂流瓶</Text>

<Button
  onPress={this.getBookData}
  title="show me the data!"
/>

<Button
  onPress={this.getBookUsers}
  title="show me the users!"
/>

<Button
  onPress={this.DelBooks}
  title="delete all the books!"
/>

              <Button
                  onPress={this.getAllUserDetails}
                  title="所有用户详细信息"
              />


          </View>
        </View>
      )

  }
}

const styles = StyleSheet.create({
  portraitBox:{
    flexDirection:'row',
    height:100,
    alignItems:'center',
    borderWidth:0.5
  },
   portraitTip:{
    fontSize:20,
  },
  portraitTitle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  style_image:{
    borderRadius:35,
    height:70,
    width:70,
    marginLeft:40,
    // alignSelf:'center',
  },
  workList:{
    marginTop:10,
    borderWidth:0.5,
  },
  funcList:{
    marginTop:10,
    borderWidth:0.5,
    height:80,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  
   icon: {
    width: 26,
    height: 26,
    marginBottom:8,
  },
   Iconwrap:{
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
  },
  IconText:{
    // color: '#CCCCCC',  
    fontSize:10,
  },
  workTitle:{
    fontSize:20,
    alignSelf:'center',
    marginTop:5,
  },
});