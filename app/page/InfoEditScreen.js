import React from 'react';
import Picker from 'react-native-picker';
import area from '../basic/static/data/area.json';
import http_req from '../basic/net/http';
import LoginButton from '../component/LoginButton';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


function createAreaData(callback){

    let data = [];
    let len = area.length;
    for(let i=0;i<len;i++){
        let city = [];
        for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
            let country = [];
            for(let k=0,countryLen=area[i]['city'][j]['area'].length;k<countryLen;k++) {
                country.push(area[i]['city'][j]['area'][k]);

            }
            let countryOb = {};
            countryOb[area[i]['city'][j]['name']] = country;
            city.push(countryOb);

        }

        let _data = {};
        _data[area[i]['name']] = city;
        data.push(_data);
    }
    callback(data);

};
// import {flexCenter} from 'basic'
export default class UserScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            country:'北京'
        }
    }
    componentDidMount(){
        let params= {
            name:store.getState().user.name
        }
        let url="http://localhost:8888/api/getUserDetail";
        http_req.getData(url,(responseText) => {
            let res=JSON.parse(responseText);
            let country=res.result.country;
            this.setState({country:country});
        },params);
    }
    _showAreaPicker() {
        createAreaData(data => {
            Picker.init({
                pickerData: data,
                selectedValue: ['河北', '唐山'],
                onPickerConfirm: pickedValue => {
                    console.log('area', pickedValue);
                    this.setState({
                        country:pickedValue[2]
                    })
                },
                onPickerCancel: pickedValue => {
                    console.log('area', pickedValue);
                },
                onPickerSelect: pickedValue => {
                    console.log('area', pickedValue);
                }
            });
            Picker.show();
            // alert(JSON.stringify(Picker));
        });
    }
    _submit=()=>{
        let params={
            'username':store.getState().user.name,
            'country':this.state.country,
        }
        let url = "http://localhost:8888/api/updateUserDetails";
        http_req.postJson(url,params,(responseText) => {
            alert(responseText);
        })

    }

    render() {
            return (
                <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                    <View style={styles.portraitBox}>
                        <Image
                            style={styles.style_image}
                            source={require('../img/huanghualuo.jpg')}/>
                        <View style={styles.portraitTitle}>
                            <Text>{store.getState().user.name}</Text>
                        </View>
                    </View>
                    <View style={styles.workList}>
                        <Text style={styles.workTitle}>{this.state.country}</Text>
                        <TouchableOpacity onPress={this._showAreaPicker.bind(this)}>
                            <Text>选择你的大学</Text>
                        </TouchableOpacity>
                    </View>
                    <LoginButton name='注册' onPressCallback={this._submit}/>
                </View>
            )

    }
}

const styles = StyleSheet.create({
    portraitBox:{
        // flex:1,
        marginTop:10,
        flexDirection:'row',
        height:70,
        // backgroundColor:'#123123'
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
        marginTop:30,
        borderTopColor:'#123123',
        borderTopWidth:2,
    },
    workTitle:{
        fontSize:20,
        alignSelf:'center',
        marginTop:5,
    }
});