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
<<<<<<< HEAD
import RegScreen from './page/RegScreen';
=======
import MessageListScreen from './page/MessageListScreen';
import RegistScreen from './page/RegistScreen';
>>>>>>> finish functions
import LoginScreen from './page/LoginScreen';
import UpLoadPage from './page/UpLoad';
import InfoScreen from './page/InfoScreen';
import InfoEditScreen from './page/InfoEditScreen';
import BookDetailsScreen from './page/BookDetailsScreen';
<<<<<<< HEAD
=======
import ChatRoomScreen from './page/ChatRoom';
import MyBooksScreen from './page/MyBooksScreen';
import MyCollectionScreen from './page/MyCollectionScreen';
>>>>>>> finish functions

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
<<<<<<< HEAD
  Register: { screen: RegScreen },
=======
  MessageList: { screen: MessageListScreen },
>>>>>>> finish functions
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
<<<<<<< HEAD
  BookDetails:{screen:BookDetailsScreen}
=======
  BookDetails:{screen:BookDetailsScreen},
  ChatRoom:{screen:ChatRoomScreen},
  Regist:{screen:RegistScreen},
  MyBooks:{screen:MyBooksScreen},
  MyCollection:{screen:MyCollectionScreen},  
>>>>>>> finish functions
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