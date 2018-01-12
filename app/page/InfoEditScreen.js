import React from 'react';
import Picker from 'react-native-picker';
import area from '../basic/static/data/area.json';
import http_req from '../basic/net/http';
import LoginButton from '../component/LoginButton';
import SERVICE_BASE from 'app/basic/def/conf';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button
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
        let url=SERVICE_BASE+"getUserDetail";
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
        });
    }
    _submit=()=>{
        let params={
            'username':store.getState().user.name,
            'country':this.state.country,
        }
        let url = SERVICE_BASE+"updateUserDetails";
        http_req.postJson(url,params,(responseText) => {
            alert(responseText);
        })

    }

    render() {
            return (
                <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                    <View style={styles.workList}>
                        <Text>用户名：{store.getState().user.name}</Text>
                        <Text>所在大学:{this.state.country?this.state.country:'尚未选择'}</Text>
                        <TouchableOpacity onPress={this._showAreaPicker.bind(this)}>
                            <Text>选择你的大学</Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                            onPress={() => this._submit}
                            title="提交"
                        />
                </View>
            )

    }
}

const styles = StyleSheet.create({
    portraitBox:{
        flexDirection:'row',
        height:100,
        backgroundColor:'#EBEBEB'
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
    },
    workTitle:{
        fontSize:20,
        alignSelf:'center',
        marginTop:5,
        backgroundColor:'#EBEBEB'
    }
});