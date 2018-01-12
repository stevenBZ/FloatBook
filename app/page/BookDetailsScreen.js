import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
}from 'react-native';
import { WingBlank, WhiteSpace} from 'antd-mobile';
import http_req from '../basic/net/http';
import SERVICE_BASE from 'app/basic/def/conf';


export default class BookDetails extends React.Component{
    constructor(props){
        super(props);
        this._doCollection.bind(this);
    }

    _toChatRoom=()=>{
            var name=store.getState().user.name;
            var toUser=this.props.navigation.state.params.author;
            console.log(toUser);
            if(name&&name!=toUser){
            this.props.navigation.navigate('ChatRoom',{user:toUser}); 
          }
          else if(name){
            return
          }
          else{
            this.props.navigation.navigate('Login');
          }
    }
    _doCollection=()=>{
        let name=store.getState().user.name;
        const { params } = this.props.navigation.state;
        let bookId=params._id;
        let formData={
            "username":name,
            "bookId":bookId
          };
        let url = SERVICE_BASE+"doCollection";
        http_req.postJson(url,formData,(responseText) => {
              let res=JSON.parse(responseText);
              if(res['success']==true){
                alert('收藏成功')   
               }
              else{
                alert('不要重复收藏');
              }
            })
    }
    render(){
          const { params } = this.props.navigation.state;
          const winWidth=Dimensions.get('window').width;
        return(
            <View>
                <ScrollView>
                <View style={{flex:1}}>
                <View style={{height:200,justifyContent:'center',alignItems:'center'}}>
                     <Image style={{width:winWidth,height:200}}
                       source={{uri:params.uri}}/>
                </View>
                <WingBlank>
                <View style={{height:50,alignItems:'center',justifyContent:'center'}}>
                    <Text>{params.title}</Text>
                </View>
                <View style={{height:50,alignItems:'center',justifyContent:'center'}}>
                    <Text>Author: {params.author}</Text>
                </View>
                <View>
                    <Text>{params.intro}</Text>
                </View>
                <WhiteSpace/>
                <View style={{height:100,justifyContent:'flex-end',alignItems:'flex-end'}}>
                    <Text>{(params.create_time).replace(/T.*/,'')}</Text>
                </View>
                </WingBlank>
                </View>
                </ScrollView>  
                <TouchableOpacity onPress={this._toChatRoom}>
                <View style={{height:45}}>
                    <Text>联系作者</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._doCollection}>
                <View style={{height:45}}>
                    <Text>收藏本文</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}