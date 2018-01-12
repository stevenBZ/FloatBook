import React from 'react';
import {Account,Passwords} from 'app/component/EditView';
import http_req from 'app/basic/net/http';
import { WingBlank, WhiteSpace} from 'antd-mobile';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Button } from 'antd-mobile';
import SERVICE_BASE from 'app/basic/def/conf';

// import {flexCenter} from 'basic'
export default class UserScreen extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      message:[]
     }
  }
  componentDidMount() {
      let url=SERVICE_BASE+"getChatList";
      let params={
            username:store.getState().user.name
          }
        http_req.getData(url,(responseText) => {
          if(JSON.parse(responseText)['success']==true){
          var result=JSON.parse(responseText)['result'];
          let chatNumber=result.length;
          let messageList=this.state.message;
          let message=[];
          for(let i=0;i<chatNumber;i++){
            var item={};
            item.key=i
            item.sender=result[i]['toUser']
            var LastWordsIndex=result[i]['chatHistoryList']['length']-1
            var theMessage=result[i]['chatHistoryList'][LastWordsIndex]['message'];
            if(theMessage.length>15)
              theMessage=theMessage.slice(0,15)+'...'
            item.outline=theMessage
            message.push(item);
          } 
          this.setState({message:message});
        }
            }
        ,params);
  }
   static navigationOptions = {
    tabBarLabel: '消息',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('app/img/favorite.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };


  renderItem({item}){
    return(
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ChatRoom',{user:item.sender})}}>    
      <View style={{height:80,marginLeft:10,marginRight:10,flexDirection:'row',alignItems:'center',borderBottomWidth:0.5}}>
      <Image source={require('app/img/group.png')} style={{height:60,width:60,marginRight:20}}/>
      <View style={{flex:1,padding:5}}>
        <View style={{height:35,flexDirection:'row',alignItems:'center'}}><Text style={{fontSize:16}}>{item.sender}</Text></View>
        <View style={{height:35}}><Text style={{fontSize:10,color:'#949494'}}>{item.outline}</Text></View>
      </View>
    </View>
    </TouchableOpacity>

    )
  }
 render() {
    return (
        <View style={{flex:1}}>
        <FlatList data={this.state.message} extraData={this.state} renderItem={this.renderItem.bind(this)}/>
        </View>
          );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },

});