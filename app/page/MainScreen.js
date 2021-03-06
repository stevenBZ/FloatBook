import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import http_req from '../basic/net/http';
import SERVICE_BASE from 'app/basic/def/conf';



export default class MainScreen extends React.Component {
     constructor(props) {
       super(props);
       this.state={
        bookList:{}
       };
       this.updateInfo.bind(this)
     }

      static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('app/img/all.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
     componentDidMount() {
      this.updateInfo()
             }
     
    updateInfo(){
      let url=SERVICE_BASE+"getBookData";
      http_req.getData(url,(responseText) => {
           var result=JSON.parse(responseText)['result'];
           for(var i=0;i<result.length;i++){
               result[i].key=i;
           }
           this.setState({
             bookList:result
           });
           
         })
    }

	   render() {
     return (
    	<View style={styles.container}>   
    	   <Swiper height={200}  autoplay={true}  style={styles.wrapper} >
        <View style={styles.slide1}>
          <Text style={styles.text}>FloatBook</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>welcome</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>thanks</Text>
        </View>
      </Swiper>	
      <View style={styles.subTitleLine}>
       <TouchableOpacity onPress={this.updateInfo()}> 
      	<Text>最新发布</Text>
        </TouchableOpacity>
      </View> 
      <FlatList
          data={this.state.bookList}
          renderItem={({item}) => 
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('BookDetails',item)}>
          <View style={styles.listItem}>
                <Image source={{uri:item.uri}} style={styles.thumbnail}></Image>
                <View style={styles.listItemRight}>
                <View style={{height:30,justifyContent:'center',alignItems:'center'}}>
                  <Text>{item.title}</Text>
                </View>
                <View style={{height:20,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text>{item.create_time.replace(/T.*/,'')}</Text>
                </View>

                </View>
          </View>
          </TouchableOpacity>
        }
      />
       	</View>

    	)
  }
}

var styles = StyleSheet.create({
  container:{
  	flex:1,
  },
  wrapper: {
  
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitleLine:{
  	height:40,
  	alignItems:'center',  
    justifyContent: 'center',  
  },
  listItem:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listItemRight:{
    flex:1,
    alignItems: 'center',
  },
  thumbnail: {
    width: 153,
    height: 81,
  },
  icon: {
    width: 26,
    height: 26,
  },
})