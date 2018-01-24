/*
* @Author: bob
* @Date:   2017-09-18 10:11:58
* @Last Modified by:   bob
* @Last Modified time: 2017-09-20 15:52:54
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
// import ReversedFlatList from 'react-native-reversed-flat-list';
import { WingBlank, WhiteSpace} from 'antd-mobile';
import http_req from 'app/basic/net/http';
import SERVICE_BASE from 'app/basic/def/conf';
import io from 'socket.io-client'
export default class LoginSuccess extends React.Component {
       constructor(props) {
        super(props);
        this.state={
            typing:"",
            message:[],
            toUser:'',
            selected:0
        }
        }

        componentDidMount() {
          var state=this.state;
          var Author=this.props.navigation.state.params.user;
          this.setState({...state,toUser:this.props.navigation.state.params.user});
          let url=SERVICE_BASE+"getChatHistory";
          let params={
            username:store.getState().user.name,
            toUser:Author
          }
    
           http_req.getData(url,(responseText) => {
            response=JSON.parse(responseText)
          if(response['success']==true){
          if(response['result']){
          var result=response['result'];
          let chatHistory=result.chatHistoryList;
          // alert(JSON.stringify(chatHistory))
          let chatList=[];
          for(let i=0,listLen=chatHistory.length;i<listLen;i++){
            var item={};
            item.message=chatHistory[i].message;
            item.sender=chatHistory[i].sender;
            item.key=i+1;
            chatList.push(item);
          }

          this.setState({...state,toUser:Author,message:chatList});
        }
        }
        else{
          this.setState({...state,toUser:this.props.navigation.state.params.user});
        }
            }
        ,params);
        }
      
        sendMessage(){
        var state=this.state
        var nowMessage=this.state.message
        var len=nowMessage.length
        var newSelected=this.state.selected+1
        var item={}
        item.message=this.state.typing
        item.sender=store.getState().user.name
        item.toUser=this.state.toUser
        item.key=len+1 
        item.messageData={
          sender:item.sender,
          receiver:item.toUser,
          message:item.message
        }
        nowMessage.push(item)
        // alert(JSON.stringify(item))

        let url = SERVICE_BASE+"sendMessage";
        http_req.postJson(url,item,(responseText) => {
              let res=JSON.parse(responseText);
            })

        this.setState({...state,message:nowMessage,typing:"",selected:newSelected});
     }

    renderItem({item}){
        const sender=item.sender;
        if(sender==store.getState().user.name){
          return(
            <WingBlank>
            <WhiteSpace/>
             <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,
                              backgroundColor:'#98FB98',
                              marginLeft:20,
                              marginRight:20,
                              padding:10
                          }}>
                  <Text>{item.message}</Text>
                </View>
                <Image style={{width:40,height:40}} source={require('app/img/huanghualuo.jpg')}/>
             </View>
             </WingBlank>
            );
        }
        else{
          return(
              <WingBlank>
              <WhiteSpace/>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image style={{width:40,height:40}} source={require('app/img/huanghualuo.jpg')}/>
                  <View style={{flex:1,
                                backgroundColor:'#FFF8DC',
                                marginLeft:20,
                                marginRight:20,
                                padding:10
                            }}>
                    <Text>{item.message}</Text>
                  </View>
               </View>
               </WingBlank>
              );
      }
    }

    render(){
          const { params } = this.props.navigation.state;
        return(
          <View style={{flex:1}}>
          <View style={{borderWidth:1}}>          
          <Text>{this.state.toUser}</Text>

          </View>

          <FlatList data={this.state.message} extraData={this.state} renderItem={this.renderItem} inverted={false}/>
          <KeyboardAvoidingView behavior="padding">
          <View style={{flexDirection:'row',backgroundColor:'#eee'}}>
            <TextInput
          value={this.state.typing}
          onChangeText={text => this.setState({typing: text})}
          style={{paddingHorizontal: 20,paddingVertical: 10,fontSize: 18,flex: 1,}}
          underlineColorAndroid="transparent"
          placeholder="在此输入聊天内容"
        />
           <TouchableOpacity onPress={this.sendMessage.bind(this)}>
            <Text style={{alignSelf: 'center',color: 'lightseagreen',fontSize: 16,fontWeight: 'bold',padding: 20,}}>发送</Text>
           </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
          </View>
            );
    }


}