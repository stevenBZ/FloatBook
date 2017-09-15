import React,{Component} from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator } from "react-navigation";
import MainScreen from 'app/page/MainScreen';
import UserScreen from 'app/page/UserScreen';
import RegScreen from 'app/page/RegScreen';

class Tab extends React.Component {
  constructor(props){
    super(props)
    this.state={
        selectedTab:'首页',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={styles.tabBarStyle} tabBarShadowStyle={styles.tabBarShadowStyle}>
          <TabNavigator.Item
            selected={this.state.selectedTab === '首页'}
            title="首页"
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image style={styles.tabBarIcon} source={require('app/img/account.png')}/>}
            renderSelectedIcon={() => <Image style={[styles.tabBarSelectedIcon ]} source={require('app/img/account.png')}/>}
            onPress={() => this.setState({ selectedTab: '首页' })} >
            <Text>首页</Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '发现'}
            title="发现"
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image style={styles.tabBarIcon} source={require('app/img/account.png')}/>}
            renderSelectedIcon={() => <Image style={[styles.tabBarSelectedIcon ]} source={require('app/img/account.png')}/>}
            onPress={() => this.setState({ selectedTab: '发现' })} >
            <Text>产品</Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '我的'}
            title="我的"
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image style={styles.tabBarIcon} source={require('app/img/account.png')}/>}
            renderSelectedIcon={() => <Image style={[styles.tabBarSelectedIcon ]} source={require('app/img/account.png')}/>}
            onPress={() => this.setState({ selectedTab: '我的' })} >
            <Text>我的</Text>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    overflow: 'visible',
  },
  tabBarShadowStyle: {
    height: 0,
  },
  selectedTitleStyle: {
    color: '#b42325',
  },
  logoIcon: {
    zIndex: 9999,
    position: 'absolute',
    top: -50,
    left: -25,
    width: 60, height: 60,
  },
  tabBarIcon: {
    width: 26, height: 26,
    resizeMode: 'contain',
    tintColor: '#5f5f5f',
  },
  tabBarSelectedIcon: {
    width: 26, height: 26,
    resizeMode: 'contain',
    tintColor: '#b42325',
  }
});

export default Tab;
const MainScreenNavigator = TabNavigator({
  Main: { screen: MainScreen },
  Register: { screen: RegScreen },
  User: { screen: UserScreen },
});
MainScreenNavigator.navigationOptions = {
  title: '教材漂流',
};