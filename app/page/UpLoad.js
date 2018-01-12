import ImagePicker from 'react-native-image-crop-picker';
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
} from 'react-native';
import http_req from '../basic/net/http';
import { Button } from 'antd-mobile';
import { Modal,WingBlank, WhiteSpace} from 'antd-mobile';
import SERVICE_BASE from 'app/basic/def/conf';




export default class RNCameraView extends Component {
   //初始化一个对象，path本地路径
    _imageObj = {
        path: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: require('app/img/camera.png'),
        }
        this.title= "";
        this.intro="";
    }
    render() {
        return (
            <WingBlank>
            <View style={{flex: 1, alignItems: 'center'}}>
            <WhiteSpace/>
            <TextInput style={[{width:300,height:30,fontSize:16},styles.DotBox]} onChangeText={(text) => {
            this.title = text;}} placeholder="请输入标题"/>
            <WhiteSpace/>
            <TextInput multiline={true} style={[{width:300,height:300,fontSize:16},styles.DotBox]} onChangeText={(text) => {
            this.intro = text;}} placeholder="请输入正文"/>
            <WhiteSpace/>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:300,height:100}}>
                <View style={[{width: 80, height: 80},styles.DotBox]}>
                <Image style={{width: 60, height: 60,marginLeft:8,marginTop:8}}
                       source={this.state.imageUrl}/>
                </View>
                <View style={[{width: 80, height: 80},styles.DotBox]}>
                    <TouchableOpacity  onPress={this._openPicker}>
                    <Text>从相册中选择单张图片</Text>
                    </TouchableOpacity>
                </View> 
                <View style={[{width: 80, height: 80},styles.DotBox]}>
                <TouchableOpacity  onPress={this._openCamera}>
                    <Text>拍照</Text>
                </TouchableOpacity>
                </View> 
            </View>
            <WhiteSpace/>
            <View style={{width:300}}>
            <Button type="ghost" onClick={this._beginUpImage}>发布</Button>
            </View>
            </View>
            </WingBlank>
        )
    }
    _chooseMethods=() => alert('选择上传方式','', [
        { text: '相册', onPress: () => this._openPicker()},
        { text: '照相', onPress: () => console.log('第1个按钮被点击了') }
    ])
    _beginUpImage =()=> {
        let params = {
            'path':  this._imageObj['path'],    //本地文件地址
            'title':this.title,
            'author':store.getState().user.name,
            'intro':this.intro,
        };
          let url = SERVICE_BASE+"uploadBook";
    http_req.postJson(url,params,(responseText) => {
           alert(responseText);
        });
        // this.uploadImage('uploadBook', params)
        //     .then( res=>{
        //         console.log('success');
        //     }).catch( err=>{
        //     //请求失败
        //     console.log('flied');
        // })
    };

    //从相册中选择单张图片：
    _openPicker =()=> {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            this.setState({
                imageUrl: {uri: image['path']}
            });
            this._imageObj = image;
        })
    };
    //从相册中选择多张图片：
    _openTwoPicker =()=> {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
        });
    };
    //拍照：
    _openCamera =()=> {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    };
    
}

const styles =StyleSheet.create({
    DotBox:{
    borderWidth:1,
    borderRadius:5,
    borderStyle:'dotted',
    borderWidth:2,
    borderColor:'#6495ED',
        }
});