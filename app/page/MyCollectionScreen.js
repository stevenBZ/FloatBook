import React from 'react';
import {Account,Passwords} from 'app/component/EditView';
import http_req from 'app/basic/net/http';
import { WingBlank, WhiteSpace} from 'antd-mobile';
import SERVICE_BASE from 'app/basic/def/conf';

import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Button } from 'antd-mobile';

// import {flexCenter} from 'basic'
export default class MyCollectionScreenextends extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      books:[]
     }
  }
  componentDidMount() {
      let url=SERVICE_BASE+"getMyCollectionBooks";
      let params={
            username:store.getState().user.name
          }
        http_req.getData(url,(responseText) => {
          if(JSON.parse(responseText)['success']==true){
          var result=JSON.parse(responseText)['result'];
          let bookNumber=result.length;
          for(let i=0;i<bookNumber;i++){
            result[i].key=i;
          } 
          this.setState({books:result});
        }
            }
            
        ,params);
  }

 render() {
    return (
        <View style={{flex:1}}>
        <FlatList
          data={this.state.books}
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
          );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
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

});