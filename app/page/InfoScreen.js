import React from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
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
    componentDidMount() {

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
                        <Button
                            onPress={() => this.props.navigation.navigate('InfoEdit')}
                            title="修改信息"
                        />
                    </View>
                </View>
            )

    }
}

const styles = StyleSheet.create({
    portraitBox:{
        marginTop:10,
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
        backgroundColor:'#EBEBEB',        
        marginTop:10,
    },
    workTitle:{
        fontSize:20,
        alignSelf:'center',
        marginTop:5,
    }
});