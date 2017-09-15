import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
	   render() {
    return (
    	<View>    	
    	<Text>List of recent chats</Text>
    	<Button
  onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
  title="Chat with Lucy"
/>
    	</View>

    	)

  }
}

class AllContactsScreen extends React.Component {
	   render() {
      return (
    	<View>    	
    	<Text>List of all chats</Text>
    	<Button
  onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
  title="Chat with Lucy"
/>
    	</View>

    	)

  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};
//////////////////////////////////////////////////

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
  	const {navigate}=this.props.navigation;
    return(
    <View>
        <Text>Hello, Navigation!</Text>
        <Button
            onPress={()=>navigate('Chat',{user:'Xiaobo'})}
            title="Chat with Lucy"
        />
    </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
  const {state, setParams} = navigation;
  const isInfo = state.params.mode === 'info';
  const {user} = state.params;
  return {
    title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
    headerRight: (
      <Button
        title={isInfo ? 'Done' : `${user}'s info`}
        onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
      />
    ),
  };
};
  render() {
  	const {params}=this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

const FloatBook = StackNavigator({
  Home: {screen: MainScreenNavigator },
  Chat: {screen:ChatScreen},
});


AppRegistry.registerComponent('FloatBook', () => FloatBook);