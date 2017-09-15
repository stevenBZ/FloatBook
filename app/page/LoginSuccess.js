import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
export default class LoginSuccess extends React.Component {
    constructor(props){
        super(props);
        this.state = {};

    }
    //回到第一个页面去
   
    render(){
        return (

            <View >
                <TouchableOpacity>
                    <Text> 登录成功，点击返回登录页面 </Text>
                </TouchableOpacity>
            </View>


        );

    }

}