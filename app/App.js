import React,{Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import MainScreen from './page/MainScreen';
import UserScreen from './page/UserScreen';
import RegScreen from './page/RegScreen';
import LoginScreen from './page/LoginScreen';
import UpLoadPage from './page/UpLoad';
import InfoScreen from './page/InfoScreen';
import InfoEditScreen from './page/InfoEditScreen';
import BookDetailsScreen from './page/BookDetailsScreen';

import {connect} from "react-redux"




class NoteScreen extends React.Component {
	   render() {
      return (
    	<View>    	
    	<Text>这是消息页</Text>

    	</View>

    	)

  }
}



const MainScreenNavigator = TabNavigator({
  Main: { screen: MainScreen },
  Register: { screen: RegScreen },
  User: { screen: UserScreen }
},
 {
    tabBarOptions:{
      activeTinColor:'#e91e63',
    }
  }
);
MainScreenNavigator.navigationOptions = {
  title: '教材漂流',
};
//////////////////////////////////////////////////



const FloatBook = StackNavigator({
  Home: {screen: MainScreenNavigator },
  UpLoad:{screen:UpLoadPage},
  Login:{screen:LoginScreen},
  Info:{screen:InfoScreen},
  InfoEdit:{screen:InfoEditScreen},
  BookDetails:{screen:BookDetailsScreen}
});

class _App extends Component {
  constructor(){
    super()
    // setTimeout( () => {
    //   SplashScreen.hide()
    // }, 300)
    
    // this.nextTimeExit = false
  }

  testData=()=>{
    alert(this.props.network.error);
  }

    render() {
      const {network} = this.props
      if(network.error)
        return(<View style={{flex:1,alignItems : 'center', justifyContent : 'center'}}><Text> net error!</Text></View>);
      return (<FloatBook/>);
  }


}
const mapStateToProps = (state) => {
  return {
    network : state.network   
  }
  
}
export let App = connect(mapStateToProps)(_App)
// export App;

// AppRegistry.registerComponent('FloatBook', () =>_App);